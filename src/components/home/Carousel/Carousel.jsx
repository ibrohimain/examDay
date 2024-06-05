import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "./carousel_img/slider.png";

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

const HomeCarousel = () => {
  return (
    <div className=" w-[85%]  mx-auto px-5 bg-[#F5F5F5] homeSlide">
      <Slider {...settings}>
        <div className="">
          <div className=" bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center gap-[100px] p-8 rounded-lg  w-full ">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-[14px] sm:block hidden text-gray-500 font-medium">
                  WELCOME TO GREENSHOP
                </h2>
                <h1 className=" sm:block hidden text-[40px]  lg:text-[70px] font-bold text-gray-800">
                  LET’S MAKE A BETTER{" "}
                  <span className="text-green-500"> PLANET</span>{" "}
                </h1>
                <p className="text-gray-600 text-[13px] sm:block hidden sm:text-[15px] mt-4">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create a unique Urban Jungle.
                  Order your favorite plants!
                </p>
                <button className="mt-6 sm:block hidden bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600 transition duration-200">
                  SHOP NOW
                </button>
              </div>
              <div className="flex-1 mt-8 md:mt-0 flex relative justify-center items-end">
                <img
                  src={sliderImg1}
                  alt="Plant"
                  className="h-64 object-contain md:absolute hidden md:block -left-10 bottom-10"
                />
                <img
                  src={sliderImg1}
                  alt="Plant"
                  className="h-[400px] w-full md:h-[500px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" bg-gray-100 flex items-center justify-center">
            <div className="flex  items-center gap-[100px] p-8 rounded-lg  w-full ">
              <div className="flex-[.6] text-left">
                <h2 className="text-[14px]  text-gray-500 font-medium">
                  WELCOME TO GREENSHOP
                </h2>
                <h1 className="  text-[40px]  lg:text-[70px] font-bold text-gray-800">
                  LET’S MAKE A BETTER{" "}
                  <span className="text-green-500"> PLANET</span>{" "}
                </h1>
                <p className="text-gray-600 text-[13px]  sm:text-[15px] mt-4">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create a unique Urban Jungle.
                  Order your favorite plants!
                </p>
                <button className="mt-6  bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600 transition duration-200">
                  SHOP NOW
                </button>
              </div>
              <div className="flex-[.6] mt-0 flex relative justify-center items-end">
                <img
                  src={sliderImg1}
                  alt="Plant"
                  className="h-64 object-contain md:absolute md:block hidden  -left-10 bottom-10"
                />
                <img
                  src={sliderImg1}
                  alt="Plant"
                  className="h-[400px] w-full md:h-[500px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" bg-gray-100 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center gap-[100px] p-8 rounded-lg  w-full ">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-[14px] sm:block hidden text-gray-500 font-medium">
                  WELCOME TO GREENSHOP
                </h2>
                <h1 className=" sm:block hidden text-[40px]  lg:text-[70px] font-bold text-gray-800">
                  LET’S MAKE A BETTER{" "}
                  <span className="text-green-500"> PLANET</span>{" "}
                </h1>
                <p className="text-gray-600 text-[13px] sm:block hidden sm:text-[15px] mt-4">
                  We are an online plant shop offering a wide range of cheap and
                  trendy plants. Use our plants to create a unique Urban Jungle.
                  Order your favorite plants!
                </p>
                <button className="mt-6 sm:block hidden bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600 transition duration-200">
                  SHOP NOW
                </button>
              </div>
              <div className="flex-1 mt-8 md:mt-0 flex relative justify-center items-end">
                <img
                  src={sliderImg1}
                  alt="Plant"
                  className="h-64 object-contain md:absolute md:block hidden -left-10 bottom-10"
                />
                <img
                  src={sliderImg1}
                  alt="Plant"
                  className="h-[400px] w-full md:h-[500px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousel;
