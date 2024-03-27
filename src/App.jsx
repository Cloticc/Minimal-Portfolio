// import React, { useState } from 'react';

import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";

import {CV} from './components/CV';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Shop from "./components/Shop";
import Time from "./components/Time";
import Title from "./components/Title";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>

      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
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
                  </>
                }
              />
              <Route path="/Minimal-Portfolio/projects" element={<>
                <Portfolio isDarkMode={isDarkMode} />
                <Time isDarkMode={isDarkMode} />
              </>} />

              <Route path="/Minimal-Portfolio/shop" element={<>
                <Shop isDarkMode={isDarkMode} />
              </>} />

              <Route path="/Minimal-Portfolio/cv" element={<>
                <CV isDarkMode={isDarkMode} />  
              </>} />

              {/* <Route path="/Minimal-Portfolio/contact" element={<>
                <Contact isDarkMode={isDarkMode} /> */}

              {/* </>} /> */}
            </Routes>
            <Footer isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;