import Image from 'next/image';
import React from 'react';

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch('http://localhost:3000/data.json'); 
  const dataObject = await res.json();

  const findPhoto = dataObject.find(data => String(data.id) === String(id));

  const { title, imageUrl, category, likes, downloads, prompt, resolution } = findPhoto;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 p-6 mdLp-12 lg:p-16 xl:p-24">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          
          {/* Image Section */}
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg group">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900">{title}</h1>
            <p className="text-gray-700 leading-relaxed">{prompt}</p>

            <div className="grid grid-cols-2 gap-6 text-sm md:text-base">
              <p><span className="font-semibold text-gray-800">Category:</span> {category}</p>
              <p><span className="font-semibold text-gray-800">Resolution:</span> {resolution}</p>
              <p><span className="font-semibold text-gray-800">Likes:</span> ❤️ {likes}</p>
              <p><span className="font-semibold text-gray-800">Downloads:</span> ⬇️ {downloads}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="cursor-pointer px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Download
              </button>
              <button className="cursor-pointer px-5 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
