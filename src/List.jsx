import React from "react";
import ListItem from "./components/ListItem/ListItem";

function List({ products, toggleHandler, showReview }) {
  
  return (
    <div className={`list-container ${showReview ? "split" :""}`}>
      {products?.map((list, index) => {
        return (
          <ListItem key={list.title} {...list} onClickHandler={toggleHandler} />
        );
      })}
    </div>
  );
}

export default List;
