import React from 'react';

const About = () => {
  return (
    <div className="relative min-h-screen mt-20">
      <div className="absolute inset-0">
        <img
          src="about.jpg"
          alt="About Us Background"
          className="w-full h-full object-cover opacity-70"
        />
        
      </div>
      <div className="relative container mx-auto px-4 py-20 z-10">
        <div className="bg-black opacity-70 text-white  text-justify p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-8">About HackMatchr</h2>
          <p className="text-lg  mb-4">
            HackMatchr is a platform designed to connect talented coders and
            tech enthusiasts from all around the world. Whether you're a student,
            a professional, or just a passionate coder, HackMatchr provides the
            perfect environment to find like-minded individuals and form teams
            for hackathons, projects, and collaborative learning.
          </p>
          <p className="text-lg  mb-4">
            Our mission is to foster a supportive community where developers can
            showcase their skills, collaborate on innovative projects, and make
            lasting connections. Whether you're a seasoned coder or just starting
            your coding journey, HackMatchr welcomes you to explore and expand
            your horizons in the world of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
