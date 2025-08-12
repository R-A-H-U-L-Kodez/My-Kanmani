import { useState, useEffect } from "react";
import { Heart, Sparkles, Star, Shield, Eye, Gift, Home, Smile, Zap, Sun, BookOpen, Music, Coffee, LucideIcon } from "lucide-react";

interface LoveMessage {
  text: string;
  icon: LucideIcon;
}

interface Star {
  id: string;
  x: number;
  y: number;
  message: LoveMessage;
  isClicked: boolean;
}

interface Meteor {
  id: string;
  message: LoveMessage;
  x: number;
  delay: number;
}

const loveMessages: LoveMessage[] = [
  { text: "Your kindness melts me", icon: Heart },
  { text: "You listen to my silence too", icon: Music },
  { text: "You make me feel at home", icon: Home },
  { text: "You're pure magic, Pattu", icon: Sparkles },
  { text: "Your laugh is my favorite sound", icon: Smile },
  { text: "You understand my heart", icon: Heart },
  { text: "You make ordinary moments extraordinary", icon: Star },
  { text: "You see the best in everyone", icon: Eye },
  { text: "You're my greatest adventure", icon: Zap },
  { text: "You are my safe haven", icon: Shield },
  { text: "Your hugs heal everything", icon: Heart },
  { text: "You see beauty everywhere", icon: Eye },
  { text: "You make me a better person", icon: Gift },
  { text: "You make my world brighter", icon: Sun },
  { text: "You're my favorite person", icon: Heart },
  { text: "You inspire me every day", icon: BookOpen },
  { text: "You make everything better", icon: Music },
  { text: "You're my perfect match", icon: Coffee },
  { text: "You are my everything", icon: Zap },
  { text: "Happy Birthday love", icon: Star }
];

const Stars = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [selectedStar, setSelectedStar] = useState<Star | null>(null);
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  // Generate random stars on component mount
  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      loveMessages.forEach((message, index) => {
        newStars.push({
          id: `star-${index}`,
          x: Math.random() * 90 + 5, // 5% to 95% to avoid edges
          y: Math.random() * 80 + 10, // 10% to 90% to avoid header/footer
          message,
          isClicked: false
        });
      });
      setStars(newStars);
    };

    generateStars();
  }, []);

  const handleStarClick = (star: Star) => {
    setSelectedStar(star);
    setStars(prev => prev.map(s => 
      s.id === star.id ? { ...s, isClicked: true } : s
    ));
  };

  const triggerStarfall = () => {
    const randomMessages = [...loveMessages].sort(() => Math.random() - 0.5).slice(0, 8);
    const newMeteors = randomMessages.map((message, index) => ({
      id: `meteor-${Date.now()}-${index}`,
      message,
      x: Math.random() * 100,
      delay: index * 0.5
    }));
    
    setMeteors(newMeteors);
    
    // Clear meteors after animation
    setTimeout(() => setMeteors([]), 5000);
  };

  return (
    <div className="min-h-screen starry-bg pt-20 pb-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h1 className="font-romantic text-4xl md:text-6xl font-bold text-gold-accent text-gold-glow mb-4">
            A Sky Full of Stars
          </h1>
          <p className="text-starlight-purple text-xl max-w-2xl mx-auto mb-8">
            Each star holds a reason why I love you. Click on them to discover the magic of our love.
          </p>
          
          {/* Starfall trigger button */}
          <button
            onClick={triggerStarfall}
            className="bg-gradient-aurora px-6 py-3 rounded-full text-midnight-blue font-semibold shadow-star hover:shadow-gold transition-all duration-300 hover:scale-105"
          >
            <Star className="w-4 h-4 inline mr-2" /> Random Starfall of Compliments
          </button>
        </div>

        {/* Interactive Star Field */}
        <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-b from-midnight-blue/30 to-transparent rounded-3xl border border-starlight-purple/20 overflow-hidden">
          {/* Stars */}
          {stars.map((star) => (
            <button
              key={star.id}
              onClick={() => handleStarClick(star)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: `${star.x}%`, top: `${star.y}%` }}
            >
              <div className={`
                w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer
                transition-all duration-300 hover:scale-150
                ${star.isClicked 
                  ? 'bg-gold-accent shadow-gold twinkle' 
                  : 'bg-starlight-purple shadow-star hover:bg-gold-accent hover:shadow-gold'
                }
              `} />
              
              {/* Star twinkle effect */}
              <div className="absolute inset-0 rounded-full bg-moon-glow opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </button>
          ))}

          {/* Meteors for starfall */}
          {meteors.map((meteor) => (
            <div
              key={meteor.id}
              className="absolute top-0 pointer-events-none"
              style={{
                left: `${meteor.x}%`,
                animationDelay: `${meteor.delay}s`
              }}
            >
              <div className="relative">
                {/* Meteor trail */}
                <div className="w-1 h-20 bg-gradient-to-b from-gold-accent to-transparent rounded-full animate-[slide-in-right_2s_ease-out]" />
                
                {/* Meteor message */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-popover text-moon-glow px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg border border-starlight-purple/30 animate-[fade-in_0.5s_ease-out] flex items-center">
                  <meteor.message.icon className="w-4 h-4 text-gold-accent mr-2" />
                  {meteor.message.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected star popup */}
        {selectedStar && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div 
              className="absolute inset-0 bg-midnight-blue/80 backdrop-blur-sm" 
              onClick={() => setSelectedStar(null)} 
            />
            <div className="relative bg-card/95 border-2 border-gold-accent/50 shadow-gold rounded-2xl p-6 max-w-md mx-4 text-center">
              <div className="flex items-center justify-center mb-4">
                <selectedStar.message.icon className="w-8 h-8 text-gold-accent" />
              </div>
              <p className="font-handwritten text-2xl md:text-3xl text-gold-accent mb-4">
                {selectedStar.message.text}
              </p>
              <button
                onClick={() => setSelectedStar(null)}
                className="text-starlight-purple hover:text-gold-accent transition-colors font-medium"
              >
                <Sparkles className="w-4 h-4 inline mr-1" /> Close
              </button>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-12 text-center">
          <div className="bg-card/50 border border-starlight-purple/30 rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="font-romantic text-xl text-gold-accent mb-4">Your Star Count</h3>
            <div className="flex justify-center items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-moon-glow">
                  {stars.filter(s => s.isClicked).length}
                </div>
                <div className="text-sm text-starlight-purple">Stars Discovered</div>
              </div>
              <div className="text-cloud-pink text-2xl"><Heart className="w-6 h-6 fill-current" /></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-moon-glow">
                  {stars.length}
                </div>
                <div className="text-sm text-starlight-purple">Total Reasons</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stars;