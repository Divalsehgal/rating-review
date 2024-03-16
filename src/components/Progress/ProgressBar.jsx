import React from "react";
import "./index.css";
const ProgressStepBar = ({ steps, currentStep }) => {
  const totalSteps = steps.length - 1; // Total steps excluding the last one

  return (
    <div className="progress-step-bar">
      {steps?.map((step, index) => (
        <React.Fragment key={index}>
          <div className={`step ${index === currentStep ? "active" : ""}`}>
            {step?.id}
            <div className="step-name">{step?.name}</div>
          </div>

          {index < totalSteps && <div className="line"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProgressStepBar;
