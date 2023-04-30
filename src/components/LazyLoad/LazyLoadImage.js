import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ src }) => (
  <LazyLoadImage
    alt="Image"
    effect="blur"
    src={src}
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
);

export default LazyImage;
