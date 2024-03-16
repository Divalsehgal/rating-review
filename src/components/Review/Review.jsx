import React, { useEffect, useState } from "react";
import "./index.css";
import ProgressStepBar from "../Progress/ProgressBar";
import Rating from "../Rating/Rating";
function Review({ id, setShowReview, setShowToast, showReview }) {
  const steps = [
    { id: "1", name: "Rating" },
    { id: "2", name: "Review" },
    { id: "3", name: "Summary" },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [rating, setRating] = useState(0);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleTextAreaChange = (value) => {
    setText(value);
    setIsEmpty(value.trim() === "");
  };

  useEffect(() => {
    const storedObjectString = localStorage.getItem(id);
    const storedObject = JSON.parse(storedObjectString);
    setRating(storedObject?.ratingNo);
    setText(storedObject?.ratingText);
  }, [id]);

  const submitHandler = () => {
    const myObject = {
      ratingNo: rating,
      ratingText: text,
    };

    localStorage.setItem(id, JSON.stringify(myObject));
    setShowReview(false);
    setShowToast(true);
  };
  
  const nextStep = () => {
    if (currentStep === 0 && rating == 0) {
      setError(true);
      return;
    }
    if (currentStep === 1 && text == "") {
      setIsEmpty(true);
      return;
    }
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleRatingChange = (value) => {
    if (value === 0) {
      setError(true);
    } else {
      setError(false);
    }
    setRating(value);
  };

  return (
    <div className="review-container">
      {id}
      <ProgressStepBar steps={steps} currentStep={currentStep} />
      <Rating
        value={rating}
        onChange={handleRatingChange}
        error={error}
        currentStep={currentStep}
        defaultValue={text}
        maxLength={100}
        isEmpty={isEmpty}
        handleTextAreaChange={handleTextAreaChange}
      />
      <div className="button-cta">
        {currentStep < 2 ? (
          <>
            {" "}
            {currentStep > 0 && (
              <button onClick={prevStep} disabled={currentStep === 0}>
                Previous
              </button>
            )}
            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
            >
              Next
            </button>
          </>
        ) : (
          <button onClick={submitHandler}>Submit</button>
        )}
      </div>
    </div>
  );
}

export default Review;
