import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Letter: React.FC = () => {
  const [poem, setPoem] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPoem = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: "Write a short, soulful and deeply heartwarming 6-line poem for a best friend's birthday. Focus on her being my safe place and our shared journey. STRICT RULE: NO 'sister', 'family', 'babe', 'honey'. Pure best friendship.",
        });
        setPoem(response.text || "You've seen all my shadows, the parts I can't show. \nThrough storms that have broken me, \nyou helped me grow. \nIn moments I'm shattered, when nothing feels right, \nYou're the hand that I'm holding, \nmy anchor, my light.");
      } catch (error) {
        setPoem("A bond like ours is rare and true,\nA light that shines in all you do.\nThrough every high and every low,\nI'll be the one to help you grow.");
      } finally {
        setLoading(false);
      }
    };
    fetchPoem();
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <div className="letter-paper p-10 md:p-20 shadow-2xl relative border-t-8 border-rose-400">
        <div className="absolute top-8 right-10 text-rose-300 font-serif italic text-sm md:text-base">
          February 2026
        </div>
        
        <h2 className="font-cursive text-5xl md:text-6xl text-rose-600 mb-12 italic leading-tight">My Dearest Friend,</h2>
        
        <div className="space-y-10 text-gray-800 leading-relaxed text-xl md:text-2xl font-serif italic relative z-10 pr-4">
          <p>
            First of all, Happiest Birthday to you 🎉🎂. I wish you all the happiness in the world 🌍✨ and more success to your future 🚀. May all your dreams come true 💫.
          </p>
          <p>
            I sat to write some words for you 📝, where I couldn’t get how to summarise the bond we share 🤝 that helped me through my bad times 😔❤️. Even though we met a little late ⏳ but I'm very thankfull that you are in my life 💖 (even though I wish we’d met sooner 🙈). You helped me upgrade myself, in terms of emotions 💕, where I wasn’t able to express in front of others. We laughed together 😂 and had some fights 😅, which can’t break us, and shared things I thought I’d never share with anyone 🤗. You are the friend some people wish for, and some people get(like me 😁🥰).
          </p>
          <p className="border-l-4 border-rose-200 pl-8 py-2">
            <strong>Today is about you 🎉, but my promise is for every day after:</strong> I will always, always be in your corner 🤝❤️.
            If you feel like you're falling, I'll be there to catch you 🤗✨ and help you climb ⛰️.
            If you feel like you're lost, I'll be the home you come back to 🏡💖. You can count on me always and at anytime.
          </p>
          <p>
            You are a light that this world desperately needs ✨. Never doubt your magic 🌟. Never think you are alone in anything, I'm just a call away 📞. And don’t hesitate to call thinking that what he might think if I say this — it doesn’t matter ❤️. I'll always be right here 🤗.
          </p>
        </div>

        <div className="mt-20 pt-12 border-t border-rose-100 flex flex-col items-center">
          <span className="bg-white px-6 -mt-16 text-rose-400 text-sm tracking-widest font-bold uppercase mb-8">A Birthday Verse</span>
          {loading ? (
            <div className="flex space-x-3 justify-center py-4">
              {[0, 0.2, 0.4].map((delay, i) => (
                <div key={i} className="w-3 h-3 bg-rose-200 rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }}></div>
              ))}
            </div>
          ) : (
            <p className="text-gray-900 whitespace-pre-wrap font-cursive text-4xl text-center leading-relaxed">
              {poem}
            </p>
          )}
        </div>

        <div className="mt-20 flex justify-end">
          <div className="text-right">
            <p className="font-serif italic text-gray-500 mb-2">Forever your person,</p>
            <p className="font-cursive text-5xl text-rose-600">Bestie</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
