import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import React from "react";
import home from "../../home.json";
import servicesPages from "../pages/servicesPages.json";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import {
  AiFillSetting,
  AiOutlineGlobal,
  AiOutlineSafety,
  AiOutlineSolution,
  AiOutlineTeam,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import "./home.css";

const slidesData = [
  {
    title: "Adding Value to your Success",
    text: "We believe in being a trusted partner who consistently adds value to our clients.'",
    img: "https://fmpglobal.com/wp-content/uploads/2022/06/Hiring-International-Employees-1.jpg",
  },
  {
    title: "Driving Business Growth",
    text: "By understanding our clients' unique business needs, we offer valuable advice and innovative ideas.",
    img: "https://www.redtechgroup.com/it-project-management/wp-content/uploads/sites/4/2014/11/our-services-background.jpg",
  },
  {
    title: "Tailored Financial Solutions",
    text: "Our approach focuses on creating long-term partnerships with customized and reliable solutions.",
    img: "https://images.inc.com/uploaded_files/image/1920x1080/getty_637367232_405067.jpg",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const totalSlides = slidesData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLastSlide) {
        setTimeout(() => {
          setActiveIndex(0);
          setIsLastSlide(false);
        }, 2000);
      } else {
        setActiveIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % totalSlides;
          if (nextIndex === 0) setIsLastSlide(true);
          return nextIndex;
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides, isLastSlide]);

  const handleRadioClick = (index) => {
    setActiveIndex(index);
    setIsLastSlide(false);
  };

  return (
    <div className="container">
      <div className="main-container">
        <div className="slider-container">
          <div className="slides-wrapper">
            <div
              className="slides-track"
              style={{
                transform: `translateX(${-activeIndex * 100}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              {slidesData.map(({ title, text, img }, i) => (
                <div
                  key={i}
                  className="slide"
                  style={{
                    backgroundImage: `url(${img})`,
                  }}
                >
                  <div className="content">
                    <h2 className="heading">{title}</h2>
                    <p>{text}</p>
                    <button className="learn-more">Learn More →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="radio-buttons">
          {slidesData.map((_, index) => (
            <label key={index}>
              <input
                type="radio"
                name="slider"
                checked={activeIndex === index}
                onChange={() => handleRadioClick(index)}
              />
              {index + 1}
            </label>
          ))}
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

const Section1 = () => {
  // const [stats, setStats] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [heading, setHeading] = useState("");
  useEffect(() => {
    // setStats(home.stats || []);
    setImageUrl(home.image);
    setParagraph(home.paragraph);
    setHeading(home.heading);
  }, []);

  return (
    <div className="Section1">
      <div className="home-container">
        <div className="home-image">
          <img src={imageUrl} alt="Assurance & Solutions" />
        </div>
        <div className="home-content">
          <span className="home-label">Nikhil Warankar & Co</span>
          <h3>{heading}</h3>
          <p>{paragraph}</p>

          <Link to="/about" className="learn-more">
            Learn More <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Section2 = () => {
  const [header, setHeader] = useState({});
  const [sections, setSections] = useState([]);

  const iconMap = {
    AiOutlineSolution: <AiOutlineSolution />,
    AiOutlineSafety: <AiOutlineSafety />,
    AiOutlineTeam: <AiOutlineTeam />,
    AiFillSetting: <AiFillSetting />,
    AiOutlineGlobal: <AiOutlineGlobal />,
  };

  useEffect(() => {
    setHeader(home.header);
    setSections(home.sections);
  }, []);

  return (
    <section className="Section2">
      <div className="header-section">
        <h2 className="heading">{header.title}</h2>
        <div className="divider" />

        <p>{header.paragraph}</p>
        {/* <a href="#learn-more" className="learn-more">
          Learn More &rarr;
        </a> */}
      </div>
      <div className="cards-section">
        {(() => {
          const cards = [];
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            cards.push(
              <div key={i} className="card">
                <div className="icon">{iconMap[section.icon]}</div>

                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            );
          }
          return cards;
        })()}
      </div>
    </section>
  );
};
// const Section3 = () => {
//   const [visibleServices, setVisibleServices] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     setVisibleServices(home.services.slice(0, 3));
//   }, []);

//   return (
//     <div className="services-container">
//       <h2 className="services-heading">Our Services</h2>
//       <div className="services-page">
//         {visibleServices.map((service) => (
//           <div
//             key={service.title}
//             className="service-card"
//             style={{ backgroundImage: `url(${service.image})` }}
//           >
//             <Link to={`/service/${service.title}`} className="learn-more-btn">
//               Learn More
//             </Link>
//             <div className="servicescard-header">
//               <h2>{service.title}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* <div className="all-services-btn">
//         <Link to="/all-services" className="view-all-btn">
//           View All Services
//         </Link>
//       </div> */}
//     </div>
//   );
// };

const Section3 = () => {
  const [visibleServices, setVisibleServices] = useState([]);

  useEffect(() => {
    setVisibleServices(home.services.slice(0, 3));
  }, []);

  const formatTitleForURL = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <div className="services-container">
      <h2 className="heading">Our Services</h2>
      <div className="services-page">
        {visibleServices.map((service) => (
          <div
            key={service.title}
            className="service-card"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <div className="servicescard-header">
              <Link to={`/services/${formatTitleForURL(service.title)}`}>
                <h2>{service.title}</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
