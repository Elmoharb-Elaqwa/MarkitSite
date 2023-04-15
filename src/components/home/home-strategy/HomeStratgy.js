import React, { useState } from 'react';
import './homeStrategy.css';
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const HomeStratgy = () => {
  const data = [
    'DASTA is the ultimate Agency for companies to build, develop, and manage their brands.With our powerful tools and resources, you can create an amazing presence ',

    'We have everything you need to construct a powerful brand. From logo design, to website development and digital marketing campaigns',

    'With our help, you can create a strong connection with your customers by presenting them with an engaging and consistent brand message across all platforms',

    'In today’s competitive landscape it’s more important than ever for companies to stay ahead of their rivals when it comes to branding. With DASTA',
  ];
  const [counter, setCounter] = useState(data[0]);

  const handleSlider = (index) => {
    setCounter(data[index]);
  };
  return (
    <div className="str">
      <div className="strategy-background">
        <h2 className="strategy-header">
          Our <span>Strategy</span>
        </h2>
        <div className="description">
          <p>{counter}</p>
          <div className="slider-point">
            {data.map((data, index) => {
              return (
                <h1
                  key={index}
                  onClick={() => handleSlider(index)}
                  className="point"
                ></h1>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStratgy;
