import { Heart, Calendar, Headphones, Mail, Heart as HeartIcon, MessageCircle, Cake, Lock } from "lucide-react";

const eventData = [
  {
    date: "April 17",
    title: "First Chat",
    icon: Calendar,
    description: "The day destiny brought us together."
  },
  {
    date: "April 19",
    title: "First Voice Call",
    icon: Headphones,
    description: "Her voice made everything feel real."
  },
  {
    date: "April 22",
    title: "Confessed Love",
    icon: Mail,
    description: "I told her I love her — and I meant it deeply."
  },
  {
    date: "April 29",
    title: "She Said “I Love You”",
    icon: HeartIcon,
    description: "The first time she said it… still gives me chills."
  },
  {
    date: "May 4",
    title: "First Cute Fight",
    icon: MessageCircle,
    description: "We argued about who says 'I love you' first."
  },
  {
    date: "May 22",
    title: "One Month Anniversary",
    icon: Cake,
    description: "A month of magic, memories, and real love."
  },
  {
    date: "June 21",
    title: "A Tough Moment",
    icon: Lock,
    description: "A hard day, but we held on through it together."
  },
  {
    date: "August 13",
    title: "Baby girl's Birthday",
    icon: Cake,
    description: "The most special day, celebrating my love's birthday!"
  },
];



const Timeline = () => {
  return (
    <div className="min-h-screen starry-bg pt-24 pb-16 relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-gold-accent text-glow mb-12 text-center tracking-wide animate-fade-in-up">
          Our Timeline
        </h1>
        <div className="relative border-l-4 border-gold-accent/40 pl-8 space-y-16">
          {eventData.map((event, idx) => {
            // Special style for the first event
            const isFirst = idx === 0;
            return (
              <div
                key={idx}
                className={`relative group bg-gradient-to-r from-starlight-purple/20 to-cloud-pink/10 border border-gold-accent/20 rounded-2xl p-6 shadow-lg transition-transform duration-500 hover:scale-105 fade-in-up animate ${isFirst ? 'ring-2 ring-gold-accent/60 ring-offset-2 ring-offset-midnight-blue scale-[1.03]' : ''}`}
                style={{ animationDelay: `${idx * 0.18}s` }}
              >
                {/* Dot and icon */}
                <div className="absolute -left-12 top-6 flex flex-col items-center">
                  <span className={`w-10 h-10 flex items-center justify-center rounded-full bg-gold-accent shadow-gold border-2 border-starlight-purple animate-bounce-slow ${isFirst ? 'scale-110' : ''}`}>
                    <event.icon className="w-6 h-6 text-midnight-blue" />
                  </span>
                  {idx !== eventData.length - 1 && (
                    <span className="w-1 h-20 bg-gold-accent/30 block mt-1"></span>
                  )}
                </div>
                <div className="mb-2">
                  <span className="text-2xl md:text-3xl font-bold tracking-wide font-romantic text-moon-glow">
                    {event.date}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-wide animate-fade-in-up font-romantic text-moon-glow">
                  {event.title}
                </h2>
                <p className="text-starlight-purple text-xl md:text-2xl font-medium animate-fade-in-up">
                  {event.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Timeline;
