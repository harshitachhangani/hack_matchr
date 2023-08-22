import React from 'react';

// Mock data for demonstration (Replace this with your actual data from the backend)
const mockProfiles = [
  {
    id: 1,
    name: 'Harshita Chhangani',
    jobTitle: 'Web Developer',
    location: 'Pune, Maharashtra',
    skills: ['JavaScript', 'React', 'Node.js'],
    img: 'harshita.png',
  },
  // ... (More profiles)
];

const ConnectPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 mt-20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl text-center text-white font-bold mb-4">Connect with Talented Professionals !</h2>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                className="h-49 w-full object-cover"
                src={profile.img} // Assuming images are in the "images" folder in your project directory
                alt={profile.name}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{profile.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{profile.jobTitle}</p>
                <p className="text-sm text-gray-600 mb-4">{profile.location}</p>
                <div className="flex flex-wrap">
                  {profile.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded-md w-full">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
