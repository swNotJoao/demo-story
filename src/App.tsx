import React from 'react';
import { Link } from 'react-router-dom';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoryPage from './StoryPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/story/:id" element={<StoryPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

const stories = [
  { id: 1, title: 'The Magical Garden of Wishes', thumbnail: './src/images/story1-thumbnail.jpg' },
  { id: 2, title: 'Placeholder Story 2', thumbnail: './src/images/story2-thumbnail.jpg' },
  { id: 3, title: 'Placeholder Story 3', thumbnail: './src/images/story3-thumbnail.jpg' },
  { id: 4, title: 'Placeholder Story 4', thumbnail: './src/images/story4-thumbnail.jpg' },
  { id: 5, title: 'Placeholder Story 5', thumbnail: './src/images/story5-thumbnail.jpg' }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <section className="container mx-auto px-6 py-20">
        <h1 className="text-5xl font-serif font-semibold text-center mb-10 text-gray-800">
          Stories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stories.map(story => (
            <Link
              to={`/story/${story.id}`}
              key={story.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full text-center">
                  <h2 className="text-lg font-bold">{story.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;