import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch('/list.json')
      .then((response) => response.json())
      .then((data) => {
        const freeItems = data.filter((item) => item.category === "Free");
        setFilterData(freeItems);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          These books cover everything from typography and design principles to
          the history of language and advanced literary analysis, making them
          perfect for anyone interested in the art and science of text.
        </p>
      </div>

      <div>
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
