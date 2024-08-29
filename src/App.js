import React from "react";
import ProfileCard from "./components/ProfileCard";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <ProfileCard />
      </div>
      <div className="main-content">
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
