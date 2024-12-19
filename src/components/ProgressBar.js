import React from "react";
import "./ProgressBar.css";

const steps = [
  { label: "Preliminary", completed: true },
  { label: "Your Details", completed: true },
  { label: "KYC", completed: true },
  { label: "Parties", completed: false },
  { label: "Claim", completed: false },
  { label: "Review", completed: false },
  { label: "Payment", completed: false },
];

const ProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div key={index} className="progress-step">
            <div className={`circle ${step.completed ? "completed" : ""}`}>
              {step.completed ? "✔" : index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`line ${
                  steps[index].completed && steps[index + 1].completed
                    ? "completed"
                    : ""
                }`}
              />
            )}
            <span className="step-label">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
