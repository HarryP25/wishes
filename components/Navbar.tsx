
import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: '✨' },
    { id: 'letter', label: 'Wishes', icon: '✉️' },
    { id: 'gallery', label: 'Memories', icon: '📸' },
    { id: 'support', label: 'Comfort', icon: '💖' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-4 py-3 bg-white/50 backdrop-blur-md border-b border-rose-100">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="font-cursive text-2xl text-rose-500 font-bold">Bestie's Birthday</h1>
        <div className="flex space-x-2 md:space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-all text-sm md:text-base ${
                activeTab === tab.id
                  ? 'bg-rose-100 text-rose-600 font-semibold'
                  : 'text-gray-500 hover:text-rose-400'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
