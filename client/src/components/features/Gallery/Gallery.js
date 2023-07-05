import React, { useState } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styles from './Gallery.module.scss';

const Gallery = ({ photos }) => {
  const [value, setValue] = useState(0);

  let slides = [];
  photos.map((photo) => {
    const photoImg = (
      <img
        src={`${process.env.PUBLIC_URL}/images/products/${photo}`}
        alt="product"
      />
    );
    return slides.push(photoImg);
  });
  // const slides = [
  //   <img src={imageOne} />,
  //   <img src={imageTwo} />,
  //   <img src={imageThree} />,
  // ];

  let thumbnails = [];

  photos.map((photo) => {
    const photoImg = (
      <div className={styles.photo_thumbnail}>
        <img
          src={`${process.env.PUBLIC_URL}/images/products/${photo}`}
          alt="product"
        />
      </div>
    );
    return thumbnails.push(photoImg);
  });
  //   const thumbnails = [
  //     <img src={thumbnailOne} />,
  //     <img src={thumbnailTwo} />,
  //     <img src={thumbnailThree} />,
  //   ];

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <Carousel
        value={value}
        slides={slides}
        onChange={onChange}
        className={styles.carousel}
      />
      <Dots
        number={thumbnails.length}
        thumbnails={thumbnails}
        value={value}
        onChange={onChange}
        // number={slides.length}
      />
    </div>
  );
};

export default Gallery;
