import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

// Sample story data
const storyData = {
  1: {
    title: 'The Magical Garden of Wishes',
    videos: ['./src/videos/V1.mp4', './src/videos/V2.mp4', './src/videos/V3.mp4', './src/videos/V4.mp4', './src/videos/V5.mp4'],
    content: [
      "One sunny day, Maya is exploring a meadow near her home...",
      "Nutty leads Maya to her first flower...",
      "As Maya explores more of the garden...",
      "One day, Maya has a big idea...",
      "With her final wish, the garden’s magic spreads through the town..."
    ]
  },
  2: { title: 'Placeholder Story 2', videos: [], content: ["Placeholder content for Story 2"] },
  3: { title: 'Placeholder Story 3', videos: [], content: ["Placeholder content for Story 3"] },
  4: { title: 'Placeholder Story 4', videos: [], content: ["Placeholder content for Story 4"] },
  5: { title: 'Placeholder Story 5', videos: [], content: ["Placeholder content for Story 5"] }
};

function StoryPage() {
  const { id } = useParams();
  const story = storyData[id];
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
      threshold: 0.5
    });

    videosRef.current.forEach((video) => observer.observe(video));

    return () => {
      videosRef.current.forEach((video) => observer.unobserve(video));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-4xl md:text-6xl font-light leading-tight mb-8">
            {story.title}
          </p>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      <main className="container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-serif font-semibold text-center mb-20 text-gray-800">
          {story.title}
        </h1>

        <div className="space-y-32">
          {story.content.map((text, index) => (
            <section key={index} className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                {story.videos[index] && (
                  <video
                    src={story.videos[index]}
                    className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover aspect-[4/3]"
                    autoPlay={false}
                    loop
                    muted
                    ref={(el) => (videosRef.current[index] = el)}
                  />
                )}
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-serif">
                  {text}
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

export default StoryPage;
