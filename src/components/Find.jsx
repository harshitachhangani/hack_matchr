import React, { useState } from 'react';

// Mock data for demonstration (Replace this with your actual data from the backend)
const mockProfiles = [
    {
        id: 1,
        name: 'Harshita Chhagani',
        college: 'VIT',
        course: 'BTech',
        branch: 'Computer Science',
        skills: ['JavaScript', 'React', 'Node.js'],
        img: "harshita.png",
      },
      {
        id: 2,
        name: 'Ayush Bulbule',
        college: 'PICT',
        course: 'BTech',
        branch: 'Information Technology',
        skills: ['Python', 'Next.js', 'Flutter'],
        img: "ayush.png",
      },
      {
        id: 3,
        name: 'Vaidehi Ligde',
        college: 'VIT',
        course: 'BTech',
        branch: 'Artificial Intelligence & Data Science',
        skills: ['Python', 'Data Science', 'Machine Learning'],
        img: "vaidehi.png",
      },
      {
        id: 4,
        name: 'Om Panchwate',
        college: 'PICT',
        course: 'BTech',
        branch: 'Computer Science',
        skills: ['Android', 'Data Structures', 'Java'],
        img: "om.png",
      },
];

const FindPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [skillsQuery, setSkillsQuery] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState(mockProfiles);

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    filterProfiles(query, skillsQuery);
  };

  const handleSkillsChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSkillsQuery(query);
    filterProfiles(searchQuery, query);
  };

  const filterProfiles = (search, skills) => {
    const filtered = mockProfiles.filter((profile) => {
      const name = profile.name.toLowerCase();
      const skillMatch = profile.skills.some((skill) =>
        skill.toLowerCase().includes(skills)
      );
      return name.includes(search) && skillMatch;
    });
    setFilteredProfiles(filtered);
  };

  return (
    <div className='bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950'>
      <div className="container mx-auto py-8 mt-20">
        <h2 className="text-4xl text-center text-white font-bold mb-4">Find the Perfect Teammate!</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <div className="w-96 bg-white rounded-md p-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a7 7 0 017 7c0 2.07-.84 3.945-2.197 5.303l4.327 4.327a1 1 0 11-1.414 1.414l-4.328-4.328A7 7 0 119 2zm0 2a5 5 0 100 10A5 5 0 009 4z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for coders..."
              className="flex-1 border-none focus:ring-0"
            />
          </div>
         
          <div className="w-96 bg-white rounded-md p-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L4 5.414V17a1 1 0 11-2 0V3a1 1 0 011-1zM15.293 8.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 9H2a1 1 0 010-2h12a1 1 0 011 1z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              value={skillsQuery}
              onChange={handleSkillsChange}
              placeholder="Filter by skills..."
              className="flex-1 border-none focus:ring-0"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={profile.img} // Replace with actual path to profile pictures
                  alt={profile.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h2 className="text-xl font-bold">{profile.name}</h2>
              </div>
              <p className="text-gray-600 mb-2">College: {profile.college}</p>
              <p className="text-gray-600 mb-2">
                {profile.course} - {profile.branch}
              </p>
              <div className="flex flex-wrap">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
                View Full Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindPage;
