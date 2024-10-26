import React from 'react';
import { ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-3xl md:text-5xl font-light leading-tight mb-8">
            [Your text will go here]
          </p>
        </div>
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-20 text-gray-800">
          Stories That Matter
        </h1>

        {/* Story Sections */}
        <div className="space-y-32">
          {/* Story 1 */}
          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80&w=2000"
                alt="Story 1"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">[Story Title 1]</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                [Your story text will go here]
              </p>
            </div>
          </section>

          {/* Story 2 */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2000"
                alt="Story 2"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">[Story Title 2]</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                [Your story text will go here]
              </p>
            </div>
          </section>

          {/* Story 3 */}
          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000"
                alt="Story 3"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">[Story Title 3]</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                [Your story text will go here]
              </p>
            </div>
          </section>

          {/* Story 4 */}
          <section className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
                alt="Story 4"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">[Story Title 4]</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                [Your story text will go here]
              </p>
            </div>
          </section>

          {/* Story 5 */}
          <section className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=2000"
                alt="Story 5"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 object-cover aspect-[4/3]"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">[Story Title 5]</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                [Your story text will go here]
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;