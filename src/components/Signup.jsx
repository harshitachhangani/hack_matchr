import React, { useState } from 'react';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    course: '',
    branch: '',
    age: '',
    city: '',
    mobileNumber: '',
    email: '',
    skills: '',
    profilePic: null,
    resume: null,
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? e.target.files[0] : value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const renderStepOne = () => {
    return (
      <div>
        <div className="mb-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="college" className="block text-gray-700 font-semibold mb-2">
            College
          </label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your college name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="course" className="block text-gray-700 font-semibold mb-2">
            Course
          </label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            required
          >
            <option value="">Select Course</option>
            <option value="btech">B.Tech</option>
            <option value="diploma">Diploma</option>
            <option value="mtech">M.Tech</option>
            <option value="mba">MBA</option>
          </select>
        </div>
        {/* More fields for Step One */}
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Next
        </button>
      </div>
    );
  };

  const renderStepTwo = () => {
    return (
      <div>
        <div className="mb-4">
          <label htmlFor="branch" className="block text-gray-700 font-semibold mb-2">
            Branch
          </label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your branch"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your age"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your city"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-gray-700 font-semibold mb-2">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        {/* More fields for Step Two */}
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Next
        </button>
      </div>
    );
  };

  const renderStepThree = () => {
    return (
      <div>
       
        <div className="mb-4">
          <label htmlFor="skills" className="block text-gray-700 font-semibold mb-2">
            Skills
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your skills"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profilePic" className="block text-gray-700 font-semibold mb-2">
            Upload Profile Picture
          </label>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="resume" className="block text-gray-700 font-semibold mb-2">
            Upload Resume
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="Confirm your password"
            required
          />
        </div>
        {/* More fields for Step Three */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={handlePrevious}
          className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Back
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 mt-20">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        {step === 1 && renderStepOne()}
        {step === 2 && renderStepTwo()}
        {step === 3 && renderStepThree()}
      </form>
    </div>
  );
};

export default SignUp;
