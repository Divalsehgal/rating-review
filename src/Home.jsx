import React, { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import List from "./List";
import Error from "./components/Error/Error";
import Review from "./components/Review/Review";
import BottomToast from "./components/Toast/Toast";

function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState({
    state: false,
    msg: "",
  });
  const [showReview, setShowReview] = useState(false);
  const [current, setCurrent] = useState("");
  const [prev, setPrev] = useState("");
  const [showToast, setShowToast] = useState(false);

  const toggleHandler = (value) => {
    setPrev(value);
    if (prev === value) {
      setShowReview(!showReview);
    } else {
      setShowReview(true);
    }

    setCurrent(value);
  };

  async function fetchProducts() {
    try {
      const response = await fetch(
        "https://65e60da8d7f0758a76e8083a.mockapi.io/api/products"
      );
      const result = await response.json();
      setProducts(result);
      setError({
        state: false,
        msg: "",
      });
    } catch (error) {
      setError({
        state: true,
        msg: error.message,
      });
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  
  if (error.state === true) {
    return (
      <div className="main-loader">
        <Error />
      </div>
    );
  }

  if (products.length == 0) {
    return (
      <div className="main-loader">
        <Loader />
      </div>
    );
  }
  return (
    <div className="main-container">
      <List
        products={products}
        toggleHandler={toggleHandler}
        showReview={showReview}
      />
      {showReview ? (
        <Review
          id={current}
          showReview={showReview}
          setShowReview={setShowReview}
          setShowToast={setShowToast}
        />
      ) : (
        ""
      )}
      <BottomToast
        showToast={showToast}
        setShowToast={setShowToast}
        message={"Review for Product is submitted succesfully"}
      />
    </div>
  );
}

export default Home;
