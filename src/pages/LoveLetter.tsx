import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Zap, FileText } from "lucide-react";

const LoveLetter = () => {
  const [typedContent, setTypedContent] = useState("");
  const letterParagraphs = [
    "Ammu Kutty ,",
    "As I write this letter under the vast canvas of stars, I'm reminded that among all the celestial bodies in the universe, you shine the brightest in my world. You are my North Star, guiding me through life's journey with your gentle light and unwavering love.",
    "When I first met you, I never imagined that someone could change my entire universe with just a smile. But you did. You brought color to my monochrome world, music to my silence, and meaning to my existence. Every day with you feels like discovering a new constellation in the sky of our love.",
    "Your kindness melts even the coldest corners of my heart. The way you listen to my dreams, support my ambitions, and love me unconditionally makes me believe in magic again. You see beauty in the ordinary and find joy in the simplest moments – that's the gift you bring to my life.",
    "I love how you laugh at my terrible jokes, how you make everything better just by being there, and how you've turned our ordinary moments into extraordinary memories. Whether we're talking about our dreams or sitting in comfortable silence, every moment with you feels like home.",
    "My darling Pattu, my sweet Thangoww, my precious Kanmani – you are all these beautiful names and so much more. You are my today, my tomorrow, and all my tomorrows after that. You are my forever person, and I can't wait to write more chapters of our cosmic love story together."
  ];

  useEffect(() => {
    let fullText = letterParagraphs.map((p, i) => (i === 0 ? p + "\n\n" : p + "\n\n")).join("");
    let idx = 0;
    setTypedContent("");
    const interval = setInterval(() => {
      setTypedContent(fullText.slice(0, idx + 1));
      idx++;
      if (idx >= fullText.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  // isTyping state and effect removed, handled by typedContent now

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen starry-bg flex flex-col items-center pt-20 pb-16" style={{overflowY: 'auto'}}>
      <div className="w-full max-w-4xl px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h1 className="font-romantic text-4xl md:text-6xl font-bold text-[#bfa14a] drop-shadow mb-4">
            From Me to You
          </h1>
          <p className="text-[#7c5e99] text-xl">
            A letter written with all the love in my heart
          </p>
        </div>

        {/* Love Letter Scroll */}
        <div className="relative">
          {/* Parchment background effect */}
          <div className="bg-[#fffbe9] rounded-2xl shadow-2xl border-4 border-[#e6c97a]/40 p-6 md:p-10 relative overflow-hidden max-h-[80vh] md:max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#e6c97a] scrollbar-track-[#fffbe9]">
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-[#bfa14a] rounded-tl-2xl bg-[#fffbe9]"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-[#bfa14a] rounded-tr-2xl bg-[#fffbe9]"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-[#bfa14a] rounded-bl-2xl bg-[#fffbe9]"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-[#bfa14a] rounded-br-2xl bg-[#fffbe9]"></div>

            {/* Letter content */}
            <div className="font-handwritten text-[#3a2c1a] leading-relaxed whitespace-pre-line min-h-[400px]">
              <div className="text-right mb-8">
                <p className="text-lg text-[#7c5e99]">
                  Written under the stars <Sparkles className="w-4 h-4 inline ml-1" />
                </p>
              </div>
              <div className="space-y-6 text-lg md:text-xl">
                {typedContent}
                {typedContent.length >= letterParagraphs.map((p, i) => (i === 0 ? p + "\n\n" : p + "\n\n")).join("").length && (
                  <>
                    <p className="font-romantic text-xl md:text-2xl text-[#bfa14a] font-bold mt-8">
                      Forever yours, with all the love in the universe,
                    </p>
                    <p className="font-romantic text-2xl md:text-3xl text-[#bfa14a] font-bold">
                      Rahul <Heart className="w-6 h-6 inline ml-1 fill-current text-[#f7b6c2]" />
                    </p>
                    <div className="text-center mt-8">
                      <div className="inline-block">
                        <div className="w-16 h-16 bg-[#bfa14a] rounded-full flex items-center justify-center text-[#3a2c1a] text-2xl font-bold shadow-lg">
                          R
                        </div>
                        <p className="text-sm text-[#7c5e99] mt-2">Sealed with love</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Print button */}
          {/* Print button removed */}
        </div>

        {/* No floating elements inside the letter */}
      </div>
    </div>
  );
};

export default LoveLetter;