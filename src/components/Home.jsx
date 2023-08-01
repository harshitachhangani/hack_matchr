
import React, { useState, useEffect } from 'react';

import { Outlet, Link } from "react-router-dom";
const Home = () => {

  const [text, setText] = useState('');
  const targetText = 'Welcome to HackMatchr !';


  useEffect(() => {
    let currentIndex = 0;

    const typewriterInterval = setInterval(() => {
      // Check if we've reached the end of the target text
      if (currentIndex === targetText.length) {
        clearInterval(typewriterInterval);
      }

      // Append the next character to the current text
      setText(targetText.slice(0, currentIndex + 1));
      currentIndex++;
    }, 100); // Adjust the interval (in milliseconds) to control the typing speed

    // Clean up the interval on unmounting the component
    return () => clearInterval(typewriterInterval);
  }, [targetText]);




  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-3/6 flex flex-col justify-center items-center bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 mt-16">
        <div className="text-white text-center">
          <h1 className="typewriter text-4xl font-bold mb-6 animate-fade-in mt-16">{text}</h1>
          <p className="text-xl">Connect with talented coders and conquer hackathons together!</p>
        </div>
      </div>

      {/* Find Section */}
      <div className="bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950 py-16">
        <div className="container mx-auto">
          <FeatureSection
            title="Find - Search for the perfect teammate!"
            description=" Looking for a teammate with specific skills to complement your expertise? Search our diverse community of talented coders and find the perfect match for your hackathon team. Connect with individuals proficient in frontend, backend, UI/UX design, data science, and more. Browse through profiles, check past project contributions, and collaborate with your ideal teammate to conquer hackathons together."
            image="find.png"
            link="/Find"
          />
        </div>

        {/* Connect Section */}
        <div className="container mx-auto">
          <FeatureSection
            title="Connect - Connect with like-minded developers! "
            description="Beyond hackathons, HackMatchr offers a thriving community of like-minded developers. Join a diverse network of tech enthusiasts, students, and professionals from various backgrounds. Engage in meaningful discussions, exchange experiences, and foster new connections. Expand your horizons by connecting with peers from your college, attending tech events, or joining coding clubs. Together, we'll embrace the spirit of collaboration and learning in the world of technology."
            image="connect.png"
            link="/Connect"
            reversed
          />
        </div>

        {/* Collab Section */}
        <div className="container mx-auto">
          <FeatureSection
            title="Collab - Collaborate and create amazing projects!"
            description="Collaboration is key to success in hackathons. Embrace innovation and creativity by collaborating seamlessly with your teammates. Utilize our platform to brainstorm ideas, divide tasks, and stay organized throughout the project development process. Communicate efficiently, share resources, and bring your collective skills to life. Together, you can create exceptional projects that leave a lasting impact."
            image="collab.png"
            link="/Collab"
          />
        </div>



      </div>


      {/* Testimonial Carousel */}
      <div className="bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950  py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl text-white font-bold text-center mb-8">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center">
            <TestimonialCard
              name="Ayush Bulbule"
              testimonial="HackMatchr is incredible! I found my dream team and won the hackathon!"
            />
            <TestimonialCard
              name="Om Panchwate"
              testimonial="Thanks to HackMatchr, I met amazing developers and had a blast collaborating!"
            />
            <TestimonialCard
              name="Bhagyashree Tekade"
              testimonial="Great Place to Find a Befiiting Teammate with the same Vibes.. Thanks to HackMatchr"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join HackMatchr Today!</h2>
          <p className="text-xl mb-4">Sign up now and unleash your coding potential!</p>

          <a href="/Signup" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Sign Up
                </a>
        </div>
      </div>
    </div>


  );
};
const FeatureSection = ({ title, description, image, link, reversed }) => {
  const flexDirection = reversed ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`flex items-center ${flexDirection} justify-center`}>
      <div className="w-1/2 p-8">
        <h2 className="text-4xl text-white font-bold mb-4">{title}</h2>
        <p className="text-xl text-white mb-4 text-justify">{description}</p>
        <a href={link} className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Know More
                </a>
      
      </div>
      <div className="w-1/2 p-8">
        <img src={image} alt={title} className="w-80 h-80 mx-auto" />
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, testimonial }) => {
  return (
    <div className=" bg-white border-solid border-2 border-grey-200 hover:scale-105 rounded-lg p-6 m-4 shadow-lg w-96 max-w-full">
      <p className="text-xl">{testimonial}</p>
      <p className="text-gray-600 font-bold text-right mt-4">- {name}</p>
    </div>
  );
};

export default Home;
