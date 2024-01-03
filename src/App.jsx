import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import PortfolioItems from "./components/PortfolioItems";
import Time from "./components/Time";
import Title from "./components/Title";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
      <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="bg-white dark:bg-gray-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Routes>
            <Route
              path="/Minimal-Portfolio/"
              element={
                <>
                  <Header isDarkMode={isDarkMode} />
                  <Title isDarkMode={isDarkMode} />
                  <Time isDarkMode={isDarkMode} />
                  <Contact isDarkMode={isDarkMode} />
                  <Footer isDarkMode={isDarkMode} />
                </>
              }
            />
            <Route path="/Minimal-Portfolio/projects" element={<Portfolio isDarkMode={isDarkMode} />} />

            {/* other routes */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;