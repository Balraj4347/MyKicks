import React from "react";
import { useState } from "react";
import { IconButton } from "@mui/material";

const ImageDisplayer = ({ images, id }) => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className='ImageDisplayer-wrapper'>
      <div className='current-image'>
        <img
          src={images[currImg].url}
          alt={currImg}
          style={{ width: "100%" }}
        />
      </div>
      <div className='image-side-showcase'>
        {images.map((ele, index) => {
          return (
            <div className='sideimg-container' key={index}>
              <IconButton
                disableRipple
                onClick={() => {
                  setCurrImg(index);
                }}
              >
                <img src={ele.url} alt={index} />
              </IconButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageDisplayer;
