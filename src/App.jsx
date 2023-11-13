// import React, { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Time from "./components/Time";
import Title from "./components/Title";

// import CvIndex from "./pages/CvIndex.jsx";


// import Home from "./pages/Home";





function App() {
  return (
    <>
      <Navbar />

      <div className="bg-white dark:bg-gray-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Routes>
            <Route
              path="/Minimal-Portfolio/"
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
            {/* <Route path="/cv" element={<Cv />} /> */}

            {/* <Route path="/Minimal-Portfolio/cv" element={<CvIndex />} /> */}

            {/* <Route path="/Home" element={<Home />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

// function App() {
//   const isProduction = process.env.NODE_ENV === "production";
//   const basename = isProduction ? "/Minimal-Portfolio" : "";

//   return (
//     <>
//       <Navbar />

//       <div className="bg-white dark:bg-gray-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
//         <div className="max-w-5xl w-11/12 mx-auto">
//           {/* <Router basename={process.env.PUBLIC_URL}> */}
//           {/* <Router basename={basename}> */}
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Header />
//                   <Title />
//                   <Portfolio />
//                   <Time />
//                   <Contact />
//                   <Footer />
//                 </>
//               }
//             />
//             <Route path="/cv" element={<Cv />} />
//           </Routes>
//           {/* </Router> */}
//         </div>
//       </div>
//     </>
//   );
// }
