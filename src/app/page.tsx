"use client";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Home() {
  return (
    // <CarouselProvider
    //   naturalSlideWidth={100}
    //   naturalSlideHeight={125}
    //   totalSlides={3}>
    //   <Slider>
    //     <Slide index={0}>I am the first Slide.</Slide>
    //     <Slide index={1}>I am the second Slide.</Slide>
    //     <Slide index={2}>I am the third Slide.</Slide>
    //   </Slider>
    //   <ButtonBack>Back</ButtonBack>
    //   <ButtonNext>Next</ButtonNext>
    // </CarouselProvider>

    <div className="overflow-hidden">
      <div id="pot" className="flex justify-evenly items-center w-full">
        <div className="h-24 w-24 rounded-xl mx-5 bg-red-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-amber-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-blue-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-green-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-purple-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-violet-900"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-blue-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-green-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-purple-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-violet-900"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-blue-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-green-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-purple-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-violet-900"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-blue-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-green-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-purple-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-violet-900"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-orange-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-lime-700"></div>
        <div className="h-24 w-24 rounded-xl mx-5 bg-pink-700"></div>
      </div>
    </div>
  );
}
