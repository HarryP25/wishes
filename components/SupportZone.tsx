import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const SupportZone: React.FC = () => {
  const [message, setMessage] = useState<string>("Take a deep breath. I'm right here with you.");
  const [loading, setLoading] = useState<boolean>(false);
  const [hugged, setHugged] = useState(false);

  const getSupportMessage = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "The user's best friend is feeling low. Give a short, incredibly warm, and poetic message of support. Focus on being their anchor. STRICT RULE: DO NOT use 'babe', 'darling', 'sister', 'family'. Focus on best friendship.",
      });
      setMessage(response.text || "You are the strongest person I know, and even the strongest hearts need to rest sometimes. I'm here.");
    } catch (error) {
      setMessage("Whatever is on your mind, we'll face it together. Never think you are alone, i'm just a call away.");
    } finally {
      setLoading(false);
    }
  };

  const sendHug = () => {
    setHugged(true);
    // @ts-ignore
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffc0cb', '#ff69b4', '#ffffff'],
      shapes: ['circle']
    });
    setTimeout(() => setHugged(false), 2000);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-center relative">
      <div className="bg-white/60 backdrop-blur-xl rounded-[4rem] p-12 md:p-20 shadow-2xl border border-white relative overflow-hidden">
        {/* Soft Background heart */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-rose-100 rounded-full opacity-50 blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="inline-block p-6 bg-rose-50 rounded-full mb-10 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-16 w-16 text-rose-400 ${loading ? 'animate-pulse' : 'floating'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-8 italic">Your Safe Space</h2>
          <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto italic font-serif">
            When the world feels too loud or the day feels too long, this corner is yours. 
            I am always one call away, and always with you.
          </p>

          <div className="min-h-[160px] flex items-center justify-center p-10 bg-white/80 rounded-[3rem] mb-12 shadow-sm border border-rose-50 transition-all">
            <p className="text-2xl md:text-3xl text-rose-800 italic font-cursive leading-relaxed">
              "{message}"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <button
              onClick={getSupportMessage}
              disabled={loading}
              className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-5 px-8 rounded-3xl shadow-xl transition-all active:scale-95 disabled:opacity-50 text-lg"
            >
              {loading ? "Holding space..." : "I Need a Heartfelt Boost ✨"}
            </button>
            <button
              onClick={sendHug}
              className="bg-white border-2 border-rose-500 text-rose-500 hover:bg-rose-50 font-bold py-5 px-8 rounded-3xl shadow-md transition-all active:scale-95 flex items-center justify-center text-lg relative"
            >
              {hugged && <span className="absolute inset-0 bg-rose-200 rounded-3xl animate-ping opacity-25"></span>}
              🫂 Send Me a Virtual Hug
            </button>
          </div>
          
          <div className="mt-12">
            <a
              href="tel:9606227206"
              className="inline-flex items-center text-rose-600 font-bold hover:text-rose-800 transition-colors group"
            >
              <div className="p-3 bg-rose-100 rounded-full mr-3 group-hover:bg-rose-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              Or just call me right now.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportZone;
