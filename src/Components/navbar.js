import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, Link, useNavigate } from "react-router-dom";
import home from "../../home.json";
import "./navbar.css";

// const Navbar = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
//   const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const toggleMobileMenu = () => {
//     setIsMobile(!isMobile);
//     setAboutDropdownOpen(false);
//     setServicesDropdownOpen(false);
//   };

//   const handleRefreshOrNavigate = (path) => {
//     if (location.pathname === path) {
//       window.location.href = path;
//     } else {
//       navigate(path);
//     }
//     setIsMobile(false);
//   };

//   const handleAboutToggle = () => {
//     setAboutDropdownOpen(!aboutDropdownOpen);
//     setServicesDropdownOpen(false);
//   };

//   const handleServicesToggle = () => {
//     setServicesDropdownOpen(!servicesDropdownOpen);
//     setAboutDropdownOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <img src={require("../../logo.jpeg")} alt="Logo" className="logo" />
//       <div className={`nav-links ${isMobile ? "nav-links-mobile active" : ""}`}>
//         <ul>
//           <li className="dropdown">
//             <span onClick={() => handleRefreshOrNavigate("/")}>Home</span>
//           </li>
//           <li className="dropdown">
//             <span onClick={handleAboutToggle}>
//               About Us{" "}
//               <IoIosArrowDown
//                 className={`arrow-icon ${aboutDropdownOpen ? "open" : ""}`}
//               />
//             </span>
//             {aboutDropdownOpen && (
//               <ul className="dropdown-menu">
//                 <li onClick={() => handleRefreshOrNavigate("/about")}>
//                   About Nikhil Warankar & Co
//                 </li>
//                 <li onClick={() => handleRefreshOrNavigate("/clientSpread")}>
//                   Client's Spread
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="dropdown">
//             <span onClick={handleServicesToggle}>
//               Services{" "}
//               <IoIosArrowDown
//                 className={`arrow-icon ${servicesDropdownOpen ? "open" : ""}`}
//               />
//             </span>
//             {servicesDropdownOpen && (
//               <ul className="dropdown-menu">
//                 {home.services.slice(0, 5).map((service) => (
//                   <li key={service.title}>
//                     <Link
//                       to={`/services/${service.title
//                         .toLowerCase()
//                         .replace(/\s+/g, "-")}`}
//                     >
//                       {service.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//           <li className="dropdown">
//             <span onClick={() => handleRefreshOrNavigate("/blogs")}>Blogs</span>
//           </li>
//           <li className="dropdown">
//             <span onClick={() => handleRefreshOrNavigate("/gallery")}>
//               Gallery
//             </span>
//           </li>
//           <button
//             className="btn"
//             onClick={() => handleRefreshOrNavigate("/contact")}
//           >
//             Contact
//           </button>
//         </ul>
//       </div>
//       <div className="hamburger-menu" onClick={toggleMobileMenu}>
//         {isMobile ? <FaTimes /> : <FaBars />}
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
    setHoveredDropdown(null);
  };

  const handleRefreshOrNavigate = (path) => {
    if (location.pathname === path) {
      window.location.href = path;
    } else {
      navigate(path);
    }
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <img src={require("../../mainlogo.png")} alt="Logo" className="logo" />
      <div className={`nav-links ${isMobile ? "nav-links-mobile active" : ""}`}>
        <ul>
          <li className="dropdown">
            <span onClick={() => handleRefreshOrNavigate("/")}>Home</span>
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setHoveredDropdown("about")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <span>
              About Us{" "}
              <IoIosArrowDown
                className={`arrow-icon ${
                  hoveredDropdown === "about" ? "open" : ""
                }`}
              />
            </span>
            {hoveredDropdown === "about" && (
              <ul className="dropdown-menu">
                <li onClick={() => handleRefreshOrNavigate("/about")}>
                  About Nikhil Warankar & Co
                </li>
                <li onClick={() => handleRefreshOrNavigate("/clientSpread")}>
                  Client's Spread
                </li>
              </ul>
            )}
          </li>
          <li
            className="dropdown"
            onMouseEnter={() => setHoveredDropdown("services")}
            onMouseLeave={() => setHoveredDropdown(null)}
          >
            <span>
              Services{" "}
              <IoIosArrowDown
                className={`arrow-icon ${
                  hoveredDropdown === "services" ? "open" : ""
                }`}
              />
            </span>
            {hoveredDropdown === "services" && (
              <ul className="dropdown-menu">
                {home.services.slice(0, 5).map((service, index) => (
                  <li key={index}>
                    <Link
                      to={`/services/${service.title
                        .toLowerCase()
                        .replace(/ /g, "-")}`}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="dropdown">
            <span onClick={() => handleRefreshOrNavigate("/blogs")}>Blogs</span>
          </li>
          <li className="dropdown">
            <span onClick={() => handleRefreshOrNavigate("/gallery")}>
              Gallery
            </span>
          </li>
          <li>
            <button
              className="btn"
              onClick={() => handleRefreshOrNavigate("/contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};
export default Navbar;
