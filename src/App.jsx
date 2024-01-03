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
                  <Time />
                  <PortfolioItems />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route
              path="/Minimal-Portfolio/projects"
              element={<PortfolioItems />}
            />
            {/* other routes */}
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
