import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Getcars from './components/Getcars';
import Mpesapayment from './components/MpesaPayment';
import Addcars from './components/Addcars';
import Chatbot from './components/Chatbot';
import { useState, useEffect } from "react";

function App() {

  // 🌙 Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // 💾 Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
    }
  }, []);

  // 💾 Save theme + apply to body
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <Router>
      <div className={darkMode ? "App dark" : "App"}>

        <div className='app-header'>
          <h1 className='text-warning'>Welcome To luxurycarVisit</h1>

          {/* 🌙 Dark mode toggle button (added only) */}
          <button
  className={`btn ms-3 ${darkMode ? "btn-dark" : "btn-light"}`}
  onClick={() => setDarkMode(prev => !prev)}
  aria-pressed={darkMode}
  aria-label="Toggle dark mode"
>
  {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
</button>
        </div>

        {/* Routing the components */}
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addcars' element={<Addcars />} />
          <Route path='/' element={<Getcars />} />
          <Route path='/Mpesapayment' element={<Mpesapayment />} />
          <Route path='Footer' element={<Footer />} />
        </Routes>

        <Footer />
        <Chatbot />

      </div>
    </Router>
  );
}

export default App;