/**
File Name : NewsSlide
Description : 카드뉴스 이미지 슬라이드
Author : 임지영

History
Date        Author   Status    Description
2024.07.16  임지영   Created
*/

import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = styled.img`
  width: 100%;
  height: auto;
`;

const NewsSlide = ({ num }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageList = [];
    let i = 1;

    while (true) {
      const imageUrl = `${process.env.PUBLIC_URL}/img/cardNews/news${num}_${i}.png`;
      const img = new Image();
      img.src = imageUrl;
      if (img.complete) {
        imageList.push(imageUrl);
      } else {
        break;
      }
      i += 1;
    }

    setImages(imageList);
  });

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <Card src={src} alt="카드 뉴스" />
        </div>
      ))}
    </Slider>
  );
};

export default NewsSlide;
