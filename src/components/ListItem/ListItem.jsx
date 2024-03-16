import React from "react";
import "./index.css";

function extractImageUrl(url) {
  const startIndex = url.indexOf("{@height}/") + "{@height}/".length;
  const endIndex = url.indexOf("?q=");

  if (startIndex !== -1 && endIndex !== -1) {
    const extractedPart = url.substring(startIndex, endIndex);
    return extractedPart;
  }
  return null;
}

function ListItem({ title, subTitle, price, image, rating, onClickHandler }) {
  const width = 150;
  const height = 150;
  const quality = 100;

  const extractedPart = extractImageUrl(image);

  const imageUrl = `https://rukminim1.flixcart.com/image/${width}/${height}/${extractedPart}?q=${quality}&crop=false"`;

  return (
    <div className="item-container" key={title}>
      <div
        style={{
          display: "flex",
          gap:"1rem"
        }}
        onClick={()=>onClickHandler(title)}
      >
        <div className="left">
          <img src={imageUrl} alt="image-link" />
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="subTitle">
            {subTitle?.map((m) => {
              return <React.Fragment key={m}>{m}</React.Fragment>;
            })}
          </div>
          <div className="description">{"Lorem Ipsum"}</div>
          <div className="price-rating">
            <div className="rating">{rating}</div>
            <div className="price"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
