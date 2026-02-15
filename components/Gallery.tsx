import React from 'react';

const Gallery: React.FC = () => {
  const photos = [
    { 
      id: 1, 
      src: "/images/input_file_0.jpeg", 
      caption: "Our unshakeable bond.",
      rotate: "-3deg"
    },
    { 
      id: 2, 
      src: "/images/input_file_1.jpeg", 
      caption: "Vibrant colors of life.",
      rotate: "2deg"
    },
    { 
      id: 3, 
      src: "/images/input_file_2.jpeg", 
      caption: "Matching souls & vibes.",
      rotate: "-1deg"
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">
      <div className="text-center mb-20">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6 italic">Memory Lane</h2>
        <p className="text-gray-500 text-xl font-serif italic max-w-2xl mx-auto">
          Every picture tells a story of a day you made brighter just by being there.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 px-4">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="relative flex justify-center"
            style={{ transform: `rotate(${photo.rotate})` }}
          >
            <div className="tape"></div>
            <div className="polaroid w-full max-w-[320px]">
              <div className="overflow-hidden mb-4 bg-gray-100 aspect-square">
                <img 
                  src={photo.src} 
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700"
                  onError={(e) => (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${photo.id}/400/400`}
                />
              </div>
              <p className="font-cursive text-3xl text-gray-700 text-center">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-32 text-center">
        <div className="inline-block relative">
          <div className="absolute -inset-1 bg-rose-200 blur rounded-full opacity-30"></div>
          <p className="relative font-serif italic text-2xl text-rose-800 bg-white/40 px-8 py-4 rounded-full border border-rose-100">
            "We didn't realize we were making memories, we just knew we were having fun."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
