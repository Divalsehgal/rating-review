import React from "react";
import "./index.css";
import TextArea from "../TextArea/TextArea";

const Rating = ({
  value,
  onChange,
  error,
  currentStep,
  handleTextAreaChange,
  defaultValue,
  isEmpty,
}) => {
  const handleRatingClick = (newValue) => {
    if (currentStep == 0) {
      onChange(newValue);
    }
  };

  return (
    <div className="rating">
      {currentStep == 0 && <p>Please Provide your rating</p>}

      <div
        style={{
          display: "flex",
        }}
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <span
            key={index}
            className={`star ${index <= value ? "filled" : ""} ${
              error ? "error" : ""
            }`}
            onClick={() => handleRatingClick(index)}
          >
            <svg
              fill={index <= value ? "#ffd700" : "#eee"}
              stroke={error ? "#ff8787" : index <= value ? "#ffd700" : "#eee"}
              strokeWidth={error ? "12" : ""}
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="800px"
              height="800px"
              viewBox="0 0 940.688 940.688"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <g>
                  <path d="M885.344,319.071l-258-3.8l-102.7-264.399c-19.8-48.801-88.899-48.801-108.6,0l-102.7,264.399l-258,3.8 c-53.4,3.101-75.1,70.2-33.7,103.9l209.2,181.4l-71.3,247.7c-14,50.899,41.1,92.899,86.5,65.899l224.3-122.7l224.3,122.601 c45.4,27,100.5-15,86.5-65.9l-71.3-247.7l209.2-181.399C960.443,389.172,938.744,322.071,885.344,319.071z" />
                </g>
              </g>
            </svg>
          </span>
        ))}
      </div>
      
      {currentStep >= 1 && (
        <TextArea
          defaultValue={defaultValue}
          maxLength={100}
          isEmpty={isEmpty}
          currentStep={currentStep}
          onChange={handleTextAreaChange}
        />
      )}
    </div>
  );
};

export default Rating;
