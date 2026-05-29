import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/VideoBackground";
import SubscriptionModal from "@/components/SubscriptionModal";
import { useSubscription } from "@/contexts/SubscriptionContext";
import { usePreserveParams } from "@/hooks/usePreserveParams";
import { GraduationCap, Clock, Users, Star, ArrowRight, Leaf, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { videoUrls } from "@/data/videoUrls";

export default function Index() {
  const [showParticles, setShowParticles] = useState(false);
  const { checkAndPlayVideo, isPopupOpen, closePopup, handleSubscribe } = useSubscription();
  const queryParams = usePreserveParams();

  const openVideo = (url: string, title: string) => {
    checkAndPlayVideo({ url, title });
  };

  useEffect(() => {
    const hasSeenPreloader = localStorage.getItem("TheCookStudio_preloader_shown");
    if (hasSeenPreloader) {
      setShowParticles(true);
    } else {
      const timer = setTimeout(() => {
        setShowParticles(true);
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, []);

  const newRecipes = [
    { id: 1, name: "Mediterranean Soup", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/8f33cced-89b6-424a-a3a6-03ae93d13134/play_360p.mp4" },
    { id: 2, name: "Cheesy Garlic Rolls", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/935fac92-4d6f-42b2-9eff-e055f0f6e7e9/play_360p.mp4" },
    { id: 3, name: "Polish Soup", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/e1c7cde3-9a89-47ab-81fe-18edaa0b2bfd/play_360p.mp4" },
    { id: 4, name: "Simple Surprise Soup", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/2015929e-76be-4bdd-b7ea-6f1da818d1fc/play_360p.mp4" },
    { id: 5, name: "Easy Cheese Danish", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/f070533e-5d59-424d-b0e2-76c660deac43/play_360p.mp4" },
    { id: 6, name: "Focaccia Pizza", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/4a4b98f6-9214-4158-9127-e4e04964a3e7/play_360p.mp4" },
    { id: 7, name: "Garlic Butter Potatoes", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/0cac6663-931c-4704-b83d-4e298ced5818/play_360p.mp4" },
    { id: 8, name: "Vegetable Soup", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/a8a1d291-4f50-4788-ba4b-a3fe163315b1/play_360p.mp4" },
    { id: 9, name: "Chickpea Patties", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/7dfd460c-ffb2-427f-bf06-1f6301b1e57f/play_360p.mp4" },
    { id: 10, name: "Healthy Pancakes", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/3314795a-5f3e-454e-97df-1b6fb2adea62/play_360p.mp4" },
    { id: 11, name: "Chickpea Salad", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/a3064318-3245-4c70-b2c0-5784d34e34f1/play_360p.mp4" },
    { id: 12, name: "Master Chef Method", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/0455543c-90bd-46ca-b1f2-11dd9756ed69/play_360p.mp4" },
    { id: 13, name: "Cheesy Beef Casserole", videoUrl: "https://vz-37338a02-bb9.b-cdn.net/6c399cdc-1600-4161-ab94-f974c2dd5702/play_480p.mp4" },
    { id: 14, name: "Beef & Cabbage", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/89df6a73-f83f-46f1-9dcc-f86fcb0175ea/play_360p.mp4" },
    { id: 15, name: "Mediterranean Pasta Salad", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/fe0dc2cd-1177-4b79-85d8-d7103bb193f9/play_360p.mp4" },
    { id: 16, name: "Homemade Sushi", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/0725a23f-7282-4315-8d94-928090d1843b/play_360p.mp4" },
    { id: 17, name: "Chicken Fajita Pasta", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/2cf8ae76-d194-4d0e-a74c-6dc61a905c07/play_360p.mp4" },
    { id: 18, name: "Everyday Salad", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/0e69b816-b94a-4c2f-826b-1413ca9c3acd/play_360p.mp4" },
    { id: 19, name: "After-Work Potatoes", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/5dfd44ec-8dc0-4aa0-b9f4-48a0e9de3178/play_360p.mp4" },
    { id: 20, name: "Blood Vessel Cleanser", videoUrl: "https://vz-a2c5d962-9e6.b-cdn.net/a2dc236b-ddc1-4c45-aa47-20b6233946aa/play_360p.mp4" },
  ];

  const featuredClasses = [
    {
      id: 1,
      name: "Breakfast Special",
      time: "35 mins",
      image: "👨‍🍳",
      description: "Easy breakfast recipes to start your day",
      videoUrl: videoUrls[0],
    },
    {
      id: 2,
      name: "Power Bowl",
      time: "25 mins",
      image: "💪",
      description: "Nutritious bowls packed with energy",
      videoUrl: videoUrls[1],
    },
    {
      id: 3,
      name: "Comfort Food",
      time: "20 mins",
      image: "☯️",
      description: "Cozy dishes for ultimate comfort",
      videoUrl: videoUrls[2],
    },
    {
      id: 4,
      name: "Quick Bites",
      time: "15 mins",
      image: "🙏",
      description: "Fast and delicious snacks",
      videoUrl: videoUrls[3],
    },
  ];

  const stats = [
    { number: "50K+", label: "Classes", icon: <GraduationCap className="w-6 h-6" /> },
    { number: "100K+", label: "Practice Enthusiasts", icon: <Users className="w-6 h-6" /> },
    { number: "4.9★", label: "Average Rating", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Community Support", icon: <Flame className="w-6 h-6" /> },
  ];

  return (
    <div className="relative min-h-screen bg-food-cream">
      <VideoBackground />
      <SubscriptionModal isOpen={isPopupOpen} onClose={closePopup} onSubscribe={handleSubscribe} />

      <div className="relative z-20">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-food-beige/50 border border-food-olive/20">
                  <Leaf className="w-4 h-4 text-food-olive" />
                  <span className="text-sm text-white font-medium">Premium Recipes</span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                  Discover
                  <span className="text-yellow-500"> Culinary Excellence</span>
                </h1>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Explore thousands of transformative recipes from certified chefs worldwide. Learn authentic techniques, discover diverse cooking styles, and deepen your culinary skills.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={`/classes${queryParams}`}
                    className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
                  >
                    <span>Explore Recipes</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-food-beige to-food-olive/20 rounded-3xl blur-3xl opacity-40"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl text-center border border-white/20">
                    <div className="text-8xl mb-4">🍽️</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Premium Recipes</h3>
                    <p className="text-white/80">Handcrafted recipes & tutorials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-6 text-center group animate-bounce-in hover:border-white/40 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="flex justify-center mb-3 text-white group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Classes Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Featured <span className="text-yellow-500">Recipes</span>
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Handpicked recipes from our community of passionate home chefs and professionals
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredClasses.map((CookClass, index) => (
                <div
                  key={CookClass.id}
                  onClick={() => openVideo(CookClass.videoUrl, CookClass.name)}
                  className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md overflow-hidden group cursor-pointer animate-bounce-in hover:border-white/40 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                      <img src={`/thumbnails/F${index + 1}.png`} alt={CookClass.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-food-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2">{CookClass.name}</h3>
                    <p className="text-sm text-white/80 mb-4">{CookClass.description}</p>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{CookClass.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to={`/classes${queryParams}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 border-2 border-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-600 hover:border-yellow-600 transition-all duration-300 group"
              >
                <span>View All Recipes</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* New Recipes Grid 5x4 */}
            <div className="mt-16">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {newRecipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    onClick={() => openVideo(recipe.videoUrl, recipe.name)}
                    className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md overflow-hidden group cursor-pointer hover:border-white/40 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={`/NewLandscape/${recipe.id}.png`}
                        alt={recipe.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-yellow-500/90 flex items-center justify-center">
                          <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-white text-sm font-medium leading-tight line-clamp-2">{recipe.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Why Choose <span className="text-yellow-500">Cook</span>?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "👨🍳",
                  title: "Expert Guidance",
                  description: "Learn from professional chefs and culinary experts",
                },
                {
                  icon: "🌍",
                  title: "Global Recipes",
                  description: "Discover cuisines from every corner of the world",
                },
                {
                  icon: "⭐",
                  title: "Premium Quality",
                  description: "Tested recipes with high success rates",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-8 group animate-bounce-in hover:border-white/40 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/20 bg-white/10 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <img src="/logo.png" alt="Cook" className="w-32 h-32 object-contain" />
              <p className="text-white/80 text-sm">Your gateway to culinary excellence</p>
              <div className="border-t border-white/20 pt-6 w-full">
                <p className="text-white/80 text-sm mb-2">&copy; 2025, Numero Mobile Pvt. Ltd. All Rights Reserved</p>
                <div className="flex gap-2 justify-center text-white/80 text-sm">
                  <Link to={`/terms${queryParams}`} className="hover:text-white">Terms of Services</Link>
                  <span>|</span>
                  <Link to={`/refund${queryParams}`} className="hover:text-white">Refund Policy</Link>
                  <span>|</span>
                  <Link to={`/privacy${queryParams}`} className="hover:text-white">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
