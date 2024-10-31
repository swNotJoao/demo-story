import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

function App() {
  const videosRef = useRef([]);

  useEffect(() => {
    const handleVideoPlay = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleVideoPlay, {
      threshold: 0.5, // Play video when 50% of it is visible
    });

    videosRef.current.forEach((video) => observer.observe(video));

    return () => {
      videosRef.current.forEach((video) => observer.unobserve(video));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-4xl md:text-6xl font-light leading-tight mb-8">
            [Your prompt UI will be here]
          </p>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-serif font-semibold text-center mb-20 text-gray-800">
          The Magical Garden of Wishes
        </h1>

        {/* Story Sections */}
        <div className="space-y-32">
          {/* Story 1 */}
          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <video
                src="./src/videos/V1.mp4"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover aspect-[4/3]"
                autoPlay={false}
                loop
                muted
                ref={(el) => videosRef.current[0] = el}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-serif">
                One sunny day, Maya is exploring a meadow near her home when she spots a shimmering gate hidden behind a big bush. Curiosity sparkles in her eyes, and she tiptoes closer. She peeks through the gate and finds a magical garden filled with beautiful, glowing flowers of all colors. As she steps inside, a friendly squirrel named Nutty scurries up to her and introduces her to the garden of wishes. Nutty explains that each flower grants a special wish if you can solve its riddle.
              </p>
            </div>
          </section>

          {/* Story 2 */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <video
                src="./src/videos/V2.mp4"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover aspect-[4/3]"
                autoPlay={false}
                loop
                muted
                ref={(el) => videosRef.current[1] = el}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-serif">
                Nutty leads Maya to her first flower, a bright purple one that asks, “What’s small, round, and fills you with joy?” Maya thinks hard, then giggles, “A hug!” The flower glows brightly and grants her a wish. Maya wishes for a basket of fresh fruit for her grandma, who loves fruit but hasn’t been able to buy any lately. With a flash, the basket appears, and Maya feels her heart fill with happiness.
              </p>
            </div>
          </section>

          {/* Story 3 */}
          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <video
                src="./src/videos/V3.mp4"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover aspect-[4/3]"
                autoPlay={false}
                loop
                muted
                ref={(el) => videosRef.current[2] = el}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-serif">
                As Maya explores more of the garden, she meets other talking animals who each need a little help. Bella the bunny wants a patch of fresh carrots, and Benny the bird wants a nest safe from the rain. With Nutty’s help, Maya finds a flower for each friend. She solves the flowers’ simple riddles and wishes for exactly what each friend needs. The garden grows more colorful and sparkly with each act of kindness.
              </p>
            </div>
          </section>

          {/* Story 4 */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <video
                src="./src/videos/V4.mp4"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover aspect-[4/3]"
                autoPlay={false}
                loop
                muted
                ref={(el) => videosRef.current[3] = el}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-serif">
                One day, Maya has a big idea: What if she could bring joy to her whole town? Nutty cheers and takes her to the biggest, brightest flower of all. This flower’s riddle is the hardest yet: “What grows bigger and brighter the more you share it?” Maya thinks and thinks, then whispers, “Kindness!” The flower glows brighter than any she’s seen, and it grants her wish. Maya wishes for everyone in the town to be happy and kind to one another.
              </p>
            </div>
          </section>

          {/* Story 5 */}
          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <video
                src="./src/videos/V5.mp4"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover aspect-[4/3]"
                autoPlay={false}
                loop
                muted
                ref={(el) => videosRef.current[4] = el}
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-serif">
                With her final wish, the garden’s magic spreads through the town. People share, laugh, and help each other, and every little act of kindness makes the garden bloom even more. Nutty tells Maya she’s now the garden’s friend forever, and anytime she visits, there will be a new flower and a riddle waiting just for her. Maya smiles, knowing she’s found a magical place she’ll treasure always, where kindness truly makes wishes come true.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;