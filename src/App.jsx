// import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Contact from "./components/Contact";
import Cv from "./pages/Cv";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Time from "./components/Time";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Navbar />

      <div className="bg-white dark:bg-gray-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Title />
                  <Portfolio />
                  <Time />
                  <Contact />
                  <Footer />
                </>
              }
            />

            <Route path="/cv" element={<Cv />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
