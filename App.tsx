
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Letter from './components/Letter';
import Gallery from './components/Gallery';
import SupportZone from './components/SupportZone';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'letter' | 'gallery' | 'support'>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gradient-soft text-gray-800">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pb-24">
        {activeTab === 'home' && <Hero onNext={() => setActiveTab('letter')} />}
        {activeTab === 'letter' && <Letter />}
        {activeTab === 'gallery' && <Gallery />}
        {activeTab === 'support' && <SupportZone />}
      </main>

      {/* Persistent Call-to-Action for Low Moods */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setActiveTab('support')}
          className="bg-rose-500 hover:bg-rose-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group relative"
        >
          <span className="absolute -top-12 right-0 bg-white text-rose-500 text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Feeling low? I'm here.
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
