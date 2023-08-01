import React from 'react';

const HackathonPage = () => {
  // Sample data for user-posted hackathons
  const userPostedHackathons = [
    {
      name: 'User Hackathon 1',
      date: 'March 20, 2024',
      location: 'Online',
      description: 'Join our virtual hackathon and showcase your coding skills!',
      image: "hackathon_image.png",
    },
    {
      name: 'User Hackathon 2',
      date: 'April 5, 2024',
      location: 'City Hall, New York',
      description: 'Calling all developers to participate in our city-wide hackathon!',
      image: "hackathon_image.png",
    },
    {
      name: 'User Hackathon 3',
      date: 'May 15, 2024',
      location: 'Virtual Event',
      description: 'Hackathon for a social cause. Build solutions that matter!',
      image: "hackathon_image.png",
    },
  ];

  return (
    <div className="container mx-auto py-16 mt-20">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">User-Posted Hackathons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {userPostedHackathons.map((hackathon) => (
          <div
            key={hackathon.name}
            className="bg-white p-8 rounded-lg shadow-lg transition-all hover:shadow-xl"
          >
            <img
              src={hackathon.image}
              alt={hackathon.name}
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {hackathon.name}
            </h3>
            <p className="text-lg text-gray-800 mb-4">
              Date: {hackathon.date}
            </p>
            <p className="text-lg text-gray-800 mb-4">
              Location: {hackathon.location}
            </p>
            <p className="text-lg text-gray-800 mb-4">
              {hackathon.description}
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonPage;
