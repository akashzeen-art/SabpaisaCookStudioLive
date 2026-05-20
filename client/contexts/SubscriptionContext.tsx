import React, { createContext, useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface SubscriptionContextType {
  isPopupOpen: boolean;
  isSubscribed: boolean;
  openPopup: () => void;
  closePopup: () => void;
  checkAndPlayVideo: (videoData: any) => void;
  handleSubscribe: (subscriptionData: any) => void;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (!context) throw new Error('useSubscription must be used within SubscriptionProvider');
  return context;
};

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(() => localStorage.getItem('eatme_subscribed') === 'true');
  const pendingVideo = useRef<any>(null);
  const navigate = useNavigate();

  const getVideoUrl = (videoData: any) => {
    const url = typeof videoData === 'object' && videoData?.url ? videoData.url : videoData;
    const title = typeof videoData === 'object' && videoData?.title ? videoData.title : '';
    const params = new URLSearchParams({ url });
    if (title) params.append('title', title);
    return `/watch?${params.toString()}`;
  };

  const checkAndPlayVideo = (videoData: any) => {
    if (isSubscribed) {
      navigate(getVideoUrl(videoData));
    } else {
      pendingVideo.current = videoData;
      setIsPopupOpen(true);
    }
  };

  const handleSubscribe = (subscriptionData: any) => {
    localStorage.setItem('eatme_subscribed', 'true');
    localStorage.setItem('eatme_mobile', subscriptionData?.mobile || '');
    setIsSubscribed(true);
    setIsPopupOpen(false);
    if (pendingVideo.current) {
      navigate(getVideoUrl(pendingVideo.current));
      pendingVideo.current = null;
    }
  };

  return (
    <SubscriptionContext.Provider
      value={{
        isPopupOpen,
        isSubscribed,
        openPopup: () => setIsPopupOpen(true),
        closePopup: () => { setIsPopupOpen(false); pendingVideo.current = null; },
        checkAndPlayVideo,
        handleSubscribe,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};
