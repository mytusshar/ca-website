import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import home from "../../home.json";
import "../Components/home.css";
import { FiCheckCircle } from "react-icons/fi";

const ServiceDetail = () => {
  const { serviceTitle } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const foundService = home.services.find(
      (service) =>
        service.title.toLowerCase().replace(/ /g, "-") === serviceTitle
    );
    setService(foundService);
  }, [serviceTitle]);

  if (!service) {
    return <p>Service not found...</p>;
  }

  return (
    <div className="servicesList-mainContainer">
      <div className="servicesList-container">
        <img src={service.image} alt={service.title} />

        <div className="servicesList-header">
          <h2 className="heading">{service.title}</h2>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

// const ServiceDetail = () => {
//   const { title } = useParams();
//   const [service, setService] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const formatTitleForComparison = (title) => {
//       return title.toLowerCase().replace(/\s+/g, "-");
//     };

//     const selectedService = home.services.find(
//       (service) => formatTitleForComparison(service.title) === title
//     );

//     if (selectedService) {
//       setService(selectedService);
//     } else {
//       setError("Service not found.");
//     }
//     setLoading(false);
//   }, [title]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <div className="servicesList-mainContainer">
//       <div className="servicesList-container">
//         <img src={service.image} alt={service.title} />
//         <div className="servicesList-header">
//           <h2 className="heading">{service.title}</h2>
//           <p>{service.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
export default ServiceDetail;
