import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, X, LucideIcon, MessageCircle, Phone, Cloud, Gift, Sparkles } from "lucide-react";

interface Milestone {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  position: { x: number; y: number };
}

const milestones: Milestone[] = [
  {
    id: "first-text",
    title: "First Text",
    icon: MessageCircle,
    description: "That magical moment when our story began with a simple hello",
    position: { x: 20, y: 30 }
  },
  {
    id: "first-call",
    title: "First Call",
    icon: Phone,
    description: "Hearing your voice for the first time made my heart skip a beat",
    position: { x: 40, y: 60 }
  },
  {
    id: "first-love",
    title: "First 'I Love You'",
    icon: Heart,
    description: "Three words that changed everything, spoken from the heart",
    position: { x: 70, y: 40 }
  },
  {
    id: "dream-talk",
    title: "Dream Talk",
    icon: Cloud,
    description: "Planning our future together under the starlit sky",
    position: { x: 60, y: 20 }
  },
  {
    id: "nicknames",
    title: "Our Special Names",
    icon: Gift,
    description: "Pattu, Thangoww, Kanmani - each name holds a universe of love",
    position: { x: 80, y: 70 }
  }
];

const Constellation = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<string | null>(null);
  const [connectedLines, setConnectedLines] = useState<string[]>([]);

  useEffect(() => {
    // Animate constellation connections on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate lines connecting milestones
            milestones.forEach((_, index) => {
              setTimeout(() => {
                setConnectedLines(prev => [...prev, milestones[index].id]);
              }, index * 500);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("constellation-container");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleMilestoneClick = (milestoneId: string) => {
    setSelectedMilestone(selectedMilestone === milestoneId ? null : milestoneId);
  };

  return (
    <div className="min-h-screen starry-bg pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="font-romantic text-4xl md:text-6xl font-bold text-gold-accent text-gold-glow mb-4">
            Our Constellation
          </h1>
          <p className="text-starlight-purple text-xl max-w-2xl mx-auto">
            Each star in our constellation marks a precious moment in our love story
          </p>
        </div>

        {/* Interactive Star Map */}
        <div 
          id="constellation-container"
          className="relative w-full h-96 md:h-[600px] bg-gradient-to-b from-midnight-blue/50 to-transparent rounded-3xl border border-starlight-purple/30 overflow-hidden"
        >
          {/* SVG for constellation lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {milestones.map((milestone, index) => {
              if (index === milestones.length - 1) return null;
              const current = milestone.position;
              const next = milestones[index + 1].position;
              const isConnected = connectedLines.includes(milestone.id) && connectedLines.includes(milestones[index + 1].id);
              
              return (
                <line
                  key={`line-${index}`}
                  x1={`${current.x}%`}
                  y1={`${current.y}%`}
                  x2={`${next.x}%`}
                  y2={`${next.y}%`}
                  stroke="hsl(var(--starlight-purple))"
                  strokeWidth="3"
                  opacity={isConnected ? "0.7" : "0"}
                  className="transition-opacity duration-1000"
                  strokeDasharray="8,8"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;16"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </line>
              );
            })}
          </svg>

          {/* Milestone Stars */}
          {milestones.map((milestone) => (
            <button
              key={milestone.id}
              onClick={() => handleMilestoneClick(milestone.id)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ 
                left: `${milestone.position.x}%`, 
                top: `${milestone.position.y}%` 
              }}
            >
              <div className={`
                w-12 h-12 md:w-16 md:h-16 bg-gold-accent rounded-full 
                flex items-center justify-center text-2xl md:text-3xl
                shadow-gold hover:shadow-star transition-all duration-300
                hover:scale-110 cursor-pointer
              `}>
                <milestone.icon className="w-6 h-6 md:w-8 md:h-8 text-midnight-blue" />
              </div>
              
              {/* Hover tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-popover text-moon-glow px-3 py-1 rounded-lg text-sm whitespace-nowrap shadow-lg border border-starlight-purple/30">
                  {milestone.title}
                </div>
              </div>
            </button>
          ))}

          {/* Selected milestone popup */}
          {selectedMilestone && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-midnight-blue/80 backdrop-blur-sm" onClick={() => setSelectedMilestone(null)} />
              <Card className="relative bg-card/95 border-starlight-purple/50 shadow-star max-w-md mx-4">
                <CardContent className="p-6 text-center">
                  <div className="mb-3 flex justify-center">
                    {(() => {
                      const Icon = milestones.find(m => m.id === selectedMilestone)?.icon;
                      return Icon ? <Icon className="w-10 h-10 text-gold-accent" /> : null;
                    })()}
                  </div>
                  <h3 className="font-romantic text-2xl font-bold text-gold-accent mb-3">
                    {milestones.find(m => m.id === selectedMilestone)?.title}
                  </h3>
                  <p className="text-moon-glow leading-relaxed">
                    {milestones.find(m => m.id === selectedMilestone)?.description}
                  </p>
                  <button
                    onClick={() => setSelectedMilestone(null)}
                    className="mt-4 text-starlight-purple hover:text-gold-accent transition-colors"
                  >
                    <X className="w-4 h-4 inline mr-1" /> Close
                  </button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

       
      </div>
    </div>
  );
};

export default Constellation;