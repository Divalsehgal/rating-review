import React, { useEffect } from "react";
import "./index.css";

const BottomToast = ({ showToast, setShowToast, message, duration = 2000 }) => {
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [showToast, setShowToast, duration]);

  return (
    <>
      {showToast && (
        <div className="bottom-toast">
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default BottomToast;
