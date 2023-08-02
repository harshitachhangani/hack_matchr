import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Hackathons from './components/Hackathons';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Find from './components/Find';
import Collab from './components/Collab';
import Connect from './components/Connect';
import Team from './components/Team';

function App() {
  return (
    <div>

   <Navbar/>
    <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Hackathons" element={<Hackathons />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element= {<Signup />} />
        <Route path="/Contact" element= {<Contact />} />
        <Route path="/Find" element= {<Find />} />
        <Route path="/Connect" element= {<Connect />} />
        <Route path="/Collab" element= {<Collab />} />
        <Route path="/Team" element= {<Team />} />
        
      
    </Routes>
    <Footer/>
    </div>
  
  );
}

export default App;
