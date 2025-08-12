import { useEffect, useState } from "react";
import { Home, Dog, Plane, Music, Users, Sprout, Heart, Sparkles, Star, Zap } from "lucide-react";

const Forever = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const dreams = [
    {
      icon: Home,
      title: "Our Dream House by the Sea",
      description: "A cozy home where sunsets paint the sky just for us, and the waves sing us to sleep."
    },
    {
      icon: Dog,
      title: "Our Dog – 'Waffle",
      description: "A fluffy bundle of joy who’ll greet us every day with wagging tails and unconditional love."
    },
    {
      icon: Plane,
      title: "Adventures Around the World",
      description: "Hand in hand, exploring new lands, tasting new flavors, and collecting memories that will last forever."
    },
    {
      icon: Star,
      title: "Sex Under the Starlit Sky",
      description: "Just us, wrapped in love’s embrace, hearts and bodies moving as one, with the stars as our only witnesses."
    },
    {
      icon: Users,
      title: "Our Little Family",
      description: "A home overflowing with love, laughter, and endless dreams, where every moment feels like magic."
    },
    {
      icon: Sprout,
      title: "Growing Old Together",
      description: "Through every season, through every storm, always choosing each other — forever and always."
    }
  ];

  return (
    <div className="min-h-screen starry-bg pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="font-romantic text-4xl md:text-6xl font-bold text-gold-accent text-gold-glow mb-4">
            Forever and Beyond
          </h1>
          <p className="text-starlight-purple text-xl max-w-2xl mx-auto">
            Dreams we'll chase together, written in the constellations of our future
          </p>
        </div>

        {/* Animated couple stargazing */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="mb-4 float">
              <Users className="w-24 h-24 md:w-32 md:h-32 mx-auto text-cloud-pink" />
            </div>
            <div className="absolute -top-4 -right-4 text-gold-accent twinkle"><Star className="w-6 h-6 fill-current" /></div>
            <div className="absolute -top-2 -left-6 text-starlight-purple twinkle" style={{ animationDelay: "1s" }}><Sparkles className="w-5 h-5" /></div>
            <div className="absolute -bottom-2 -right-2 text-cloud-pink twinkle" style={{ animationDelay: "2s" }}><Zap className="w-4 h-4" /></div>
          </div>
          <p className="font-handwritten text-2xl md:text-3xl text-cloud-pink mt-4">
            Our Dream Life Together – Rahul & Srinithi 
          </p>
        </div>

        {/* Future Dreams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dreams.map((dream, index) => (
            <div
              key={index}
              className={`bg-card/30 border border-starlight-purple/30 rounded-2xl p-6 shadow-star hover:shadow-gold transition-all duration-500 hover:scale-105 float ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-4">
                <dream.icon className="w-12 h-12 md:w-16 md:h-16 mx-auto text-gold-accent" />
              </div>
              <h3 className="font-romantic text-xl md:text-2xl text-gold-accent font-bold text-center mb-3">
                {dream.title}
              </h3>
              <p className="text-moon-glow text-center leading-relaxed">
                {dream.description}
              </p>
            </div>
          ))}
        </div>

        {/* Shooting stars animation */}
        <div className="relative h-32 mb-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-gold-accent to-transparent animate-[slide-in-right_3s_ease-out_infinite]" style={{ animationDelay: "0s" }} />
          <div className="absolute top-4 left-1/4 w-1 h-12 bg-gradient-to-b from-starlight-purple to-transparent animate-[slide-in-right_3s_ease-out_infinite]" style={{ animationDelay: "1s" }} />
          <div className="absolute top-8 left-1/2 w-1 h-20 bg-gradient-to-b from-cloud-pink to-transparent animate-[slide-in-right_3s_ease-out_infinite]" style={{ animationDelay: "2s" }} />
          <div className="absolute top-2 left-3/4 w-1 h-14 bg-gradient-to-b from-moon-glow to-transparent animate-[slide-in-right_3s_ease-out_infinite]" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Final message */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-aurora/20 border-2 border-gold-accent/30 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="font-romantic text-3xl md:text-4xl font-bold text-gold-accent mb-6">
              Wherever the stars take us...
            </h2>
            <p className="font-handwritten text-xl md:text-2xl text-moon-glow leading-relaxed mb-6">
              I'll be there — always your Rahul. Through every season, every adventure, every quiet moment and every grand celebration. You are my home, my heart, my forever person.
            </p>
            <p className="text-starlight-purple text-lg">
              Our love story is infinite, like the stars above us. 
              <span className="text-gold-accent"> ∞ </span>
            </p>
            
            {/* Heart constellation */}
            <div className="mt-8 relative h-20">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <Heart className="text-cloud-pink w-8 h-8 twinkle fill-current" />
              </div>
              <div className="absolute top-4 left-1/2 transform -translate-x-8 text-starlight-purple twinkle" style={{ animationDelay: "0.5s" }}><Star className="w-3 h-3 fill-current" /></div>
              <div className="absolute top-4 left-1/2 transform translate-x-6 text-gold-accent twinkle" style={{ animationDelay: "1s" }}><Sparkles className="w-3 h-3" /></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-12 text-moon-glow twinkle" style={{ animationDelay: "1.5s" }}><Zap className="w-2 h-2" /></div>
              <div className="absolute top-8 left-1/2 transform translate-x-10 text-cloud-pink twinkle" style={{ animationDelay: "2s" }}><Star className="w-2 h-2 fill-current" /></div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
  {/* Floating elements removed */}
      </div>
    </div>
  );
};

export default Forever;