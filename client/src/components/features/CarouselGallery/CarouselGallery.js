import Carousel, {
  Dots,
  slidesToShowPlugin,
  autoplayPlugin,
} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './CarouselGallery.module.scss';

const CarouselGallery = () => {
  const [value, setValue] = useState(0);

  const slides = [
    <a href="/products/8d3dcd52-e923-4b57-8821-5a040fb3f51d">
      <img
        src={`${process.env.PUBLIC_URL}/images/carousel/theodore1.jpg`}
        alt="john theodore"
        className={styles.img}
      />
    </a>,
    <a href="/products/337ae709-ddb4-4e3f-bfc0-0eb1ff52682a">
      <img
        src={`${process.env.PUBLIC_URL}/images/carousel/chad2.jpg`}
        alt="chad smiths"
        className={styles.img}
      />
    </a>,
    <a href="/products/32b311a7-7173-48a0-ade6-e9e8effcc91b">
      <img
        src={`${process.env.PUBLIC_URL}/images/carousel/hawkins.jpg`}
        alt="taylor hawkins"
        className={styles.img}
      />
    </a>,
  ];

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div className="py-3">
      <Carousel
        value={value}
        slides={slides}
        onChange={onChange}
        // className={styles.carousel}
        // offset={20}
        animationSpeed={1000}
        // itemWidth={20}
        plugins={
          ([
            'infinite',
            'centered',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 6000,
              },
            },
          ],
          [
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 1,
              },
            },
          ])
        }
        className={styles.carousel}
      />
      <Dots value={value} onChange={onChange} number={slides.length} />
    </div>
  );
};

export default CarouselGallery;
