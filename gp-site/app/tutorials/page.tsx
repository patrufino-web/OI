import React from 'react';

const TutorialsPage: React.FC = () => {
  return (
    <div className="bg-off-white min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Tutoriais</h1>
        <p className="text-lg text-gray-700 mb-6">
          Aprenda a usar e manter seus produtos com nossos tutoriais em vídeo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Tutorial 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Tutorial 1</h2>
              <p className="text-gray-600 mt-2">
                Este vídeo mostra como usar o produto X de forma eficaz.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Tutorial 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Tutorial 2</h2>
              <p className="text-gray-600 mt-2">
                Aprenda a manter o produto Y em perfeitas condições.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Tutorial 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">Tutorial 3</h2>
              <p className="text-gray-600 mt-2">
                Dicas e truques para otimizar o uso do produto Z.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;

