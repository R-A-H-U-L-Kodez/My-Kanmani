import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const Nicknames = () => {
  const [nicknames, setNicknames] = useState<string[]>([]);

  useEffect(() => {
    const allNicknames = [
      "Pattu", "Thangoww", "Kanmani", "Ammu", "Chelloww", "Papa", "Maylu", "Kutty", "Vairaoww", "Vaiduriyam",
      "Angel", "Babyboo", "Dollface", "Sugarplum", "Lovebug", "Cutiepie", "Sunshine", "Babe", "Honeybun", "Snugglebabe",
      "Queen", "My Lady", "Baby Princess", "My Star", "Love of My Life", "Cuddle Queen", "Honey", "Sugar", "Angel Baby",
      "Sweetheart", "Beloved", "Lovergirl", "Soulmate", "Wifey", "Babygirl", "My Princess", "Queenie", "Goddess", 
      "My Empress", "Baby Empress", "Royal Babe", "Duchess", "Heaven’s Princess", "Angel Queen"
    ];
    const uniqueNicknames = [...new Set(allNicknames)];
    const shuffledNicknames = uniqueNicknames.sort(() => 0.5 - Math.random());
    setNicknames(shuffledNicknames);
  }, []);

  return (
    <div className="min-h-screen starry-bg pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="font-romantic text-4xl md:text-6xl font-bold text-gold-accent text-gold-glow mb-4">
            My Favourite Words to Call You
          </h1>
          <p className="text-starlight-purple text-xl max-w-2xl mx-auto">
            Every name is a star in the constellation of my affection.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {nicknames.map((nickname, index) => (
            <div
              key={nickname}
              className="bg-gradient-aurora px-6 py-3 rounded-full text-midnight-blue font-semibold text-lg slow-glow hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {nickname}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nicknames;
