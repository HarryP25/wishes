import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface HeroProps {
  onNext: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNext }) => {
  const [reason, setReason] = useState<string>("Click to see why you're amazing...");
  const [loading, setLoading] = useState(false);

  const generateReason = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: "Give a one-sentence, deeply heartwarming and unique reason why someone is a perfect best friend. Focus on loyalty, shared laughter, or being a good influence. STRICT RULE: DO NOT use 'babe', 'darling', 'sister', 'family', 'honey'. Keep it pure best friendship. Use 'bestie' or 'friend'.",
      });
      setReason(response.text || "You have a way of making the ordinary feel like a celebration.");
    } catch (e) {
      setReason("Your presence and talking to you makes me feel calmer and peacefull. You are the person whom i never want to lose from my life. The time we spent never feels enough and feels like time is moving really fast when we're together and is not enough.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial confetti
    // @ts-ignore
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#fb7185', '#fda4af', '#fff'] });
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-24 pb-12 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/30 blur-3xl rounded-full"></div>

      <div className="relative mb-12">
        <div className="absolute -inset-4 bg-rose-300 blur-2xl rounded-full opacity-20 animate-pulse"></div>
        <div className="relative p-3 bg-white rounded-[2rem] shadow-2xl floating transform -rotate-2">
          <img
            src="/images/hero.jpeg"
            alt="Us"
            className="w-56 h-56 md:w-72 md:h-72 rounded-[1.5rem] object-cover border-4 border-rose-50"
            onError={(e) => (e.target as HTMLImageElement).src = 'https://picsum.photos/400/400'}
          />
        </div>
      </div>
      
      <div className="max-w-3xl z-10">
        <h2 className="text-rose-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">A Celebration of You</h2>
        <h1 className="font-serif text-5xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">
          Happy Birthday, <br/>
          <span className="text-rose-600 italic">My Favorite Spirit</span>
        </h1>
        
        <div className="bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-white mb-10 shadow-sm transition-all hover:shadow-md">
          <p className="text-rose-700 font-medium italic text-xl mb-4">"{reason}"</p>
          <button 
            onClick={generateReason}
            disabled={loading}
            className="text-rose-400 text-xs font-bold uppercase tracking-widest hover:text-rose-600 transition-colors flex items-center justify-center mx-auto"
          >
            {loading ? 'Consulting the stars...' : '✨ Tell me another reason'}
          </button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={onNext}
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-5 px-14 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 text-lg"
          >
            Open My Letter ✉️
          </button>
        </div>
      </div>

      <div className="mt-16 flex space-x-8 opacity-60">
        {['🌸', '🕯️', '🍰', '✨'].map((emoji, i) => (
          <span key={i} className="text-4xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>{emoji}</span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
