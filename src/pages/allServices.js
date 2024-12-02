// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import home from "../../home.json";
// import "../Components/home.css";
// const AllServices = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     setServices(home.services);
//   }, []);

//   return (
//     <div className="all-services">
//       <h2 className="services-heading">All Services</h2>
//       <div className="services-page">
//         {services.map((service) => (
//           <div
//             key={service.title}
//             className="service-card"
//             style={{ backgroundImage: `url(${service.image})` }}
//           >
//             <Link
//               to={`/service/${encodeURIComponent(service.title)}`}
//               className="learn-more-btn"
//             >
//               Learn More
//             </Link>
//             <div className="servicescard-header">
//               <h2>{service.title}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllServices;
