import React from "react";
import "./index.css";
const TextArea = ({
  defaultValue,
  maxLength,
  onChange,
  isEmpty,
  currentStep,
}) => {
  const handleChange = (event) => {
    const { value } = event.target;

    if (onChange && currentStep == 1) {
      onChange(value);
    }
  };

  const isError = defaultValue?.trim() === "";
  return (
    <>
      {currentStep != 2 ? (
        <div className="textarea-container">
          <textarea
            className={`textarea ${isEmpty ? "error" : ""}`}
            defaultValue={defaultValue}
            maxLength={maxLength}
            onChange={handleChange}
            placeholder={`Type something (max ${maxLength} characters)`}
          ></textarea>
        </div>
      ) : (
        <div
          style={{
            width: "500px",
            height: "300px",
            border: "1px solid gray",
            overflow: "scroll",
          }}
        >
          {defaultValue}
        </div>
      )}
    </>
  );
};

export default TextArea;
