import React from "react";
import Sidebar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";
import FormSection from "./components/FormSection";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="main-content">
        {/* Progress Bar */}
        <div className="progress-bar-container">
          <ProgressBar currentStep={4} totalSteps={7} />
        </div>

        {/* Form Section */}
        <FormSection />
      </div>
    </div>
  );
};

export default App;
