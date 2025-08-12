import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star, Zap } from "lucide-react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
  <div className="min-h-screen starry-bg flex items-center justify-center relative overflow-hidden">

      {/* Main content */}
      <div className={`text-center z-10 px-6 transition-all duration-1000 ${isVisible ? 'fade-in-up animate' : 'fade-in-up'}`}>
        {/* Main title */}
        <h1 className="font-romantic text-4xl md:text-6xl lg:text-7xl font-bold text-moon-glow text-glow mb-6 leading-tight">
          To Srinithi —
          <br />
          <span className="text-gold-accent text-gold-glow">
            The Brightest Star
          </span>
          <br />
          in My Universe
          <Heart className="text-cloud-pink ml-2 w-8 h-8 inline fill-current" />
        </h1>

        {/* Subtitle */}
        <p className="text-starlight-purple text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          A cosmic love story written in the stars, celebrating the light you bring to my world
        </p>

        {/* CTA Button */}
        <Link to="/constellation">
          <Button 
            size="lg" 
            className="bg-gold-accent hover:bg-gold-accent/90 text-midnight-blue font-semibold px-8 py-4 text-lg rounded-full shadow-gold hover:shadow-star transition-all duration-300 hover:scale-105 group"
          >
            <Sparkles className="mr-2 w-4 h-4 inline" />
            Start Our Journey
            <Zap className="ml-2 w-4 h-4 inline group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>

       
      </div>

      
    </div>
  );
};

export default Home;