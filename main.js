import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import About from "./src/Components/about";
import Home from "./src/Components/home";
import Navbar from "./src/Components/navbar";
import LaunchButton from "./src/pages/launch";
import "/index.css";
import ClientSpread from "./src/pages/client-spread";
import Footer from "./src/Components/footer";
import { Routes, Route } from "react-router-dom";
import Blogs from "./src/pages/blogs";
import Article from "./src/pages/articles";
import ArticleDetail from "./src/pages/articleDetail";
import Section3 from "./src/Components/home";
import ServiceDetail from "./src/pages/serviceDetail";
// import AllServices from "./src/pages/allServices";
import Careers from "./src/Components/careers";
import ContactPage from "./src/Components/contact";
import ApplyJob from "./src/pages/careersApply";
// const Main = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/launch" element={<LaunchButton />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         {/* <Route path="/" element={Home} /> */}
//       </Routes>
//     </>
//   );
// };

const Main = () => {
  return (
    <>
      <Routes>
        {/* <Navbar /> */}
        <Route path="/launch" element={<LaunchButton />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />

              <About />

              <Footer />
            </>
          }
        />
        <Route
          path="/clientSpread"
          element={
            <>
              <Navbar />
              <ClientSpread />
              <Footer />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Navbar />
              <Blogs />
              <Footer />
            </>
          }
        />

        <Route
          path="/services/:serviceTitle"
          element={
            <>
              <Navbar />
              <ServiceDetail />
              <Footer />
            </>
          }
        />
        {/* <Route path="/all-services" element={<AllServices />} /> */}
        <Route path="/blogs" element={<Blogs />} />
        <Route exact path="/articles" component={<Article />} />
        <Route
          path="/articles/:id/:title"
          element={
            <>
              <Navbar />
              <ArticleDetail />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/careers"
          element={
            <>
              <Navbar />
              <Careers />
              <Footer />
            </>
          }
        />
        <Route
          path="/apply/:title"
          element={
            <>
              <Navbar />
              <ApplyJob />
              <Footer />
            </>
          }
        />

        <Route
          exact
          path="/contact"
          element={
            <>
              <Navbar />
              <ContactPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Main;
