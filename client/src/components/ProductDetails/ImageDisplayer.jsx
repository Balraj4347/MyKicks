import React from "react";
import { useState } from "react";
import { IconButton } from "@mui/material";

const ImageDisplayer = ({ images, id }) => {
  const [currImg, setCurrImg] = useState(0);

  console.log(images);
  return (
    <div className='ImageDisplayer-wrapper'>
      ImageDisplayer
      <div className='current-image'>
        <img
          src={images[currImg].url}
          alt={currImg}
          style={{ width: "20vmin" }}
        />
      </div>
      <div className='image-side-showcase'>
        <ol>
          {images.map((ele, index) => {
            // console.log(ele.url);
            return (
              <li>
                <IconButton
                  onClick={() => {
                    setCurrImg(index);
                  }}
                >
                  <img src={ele.url} alt={index} />
                </IconButton>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ImageDisplayer;
