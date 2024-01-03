"use client";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import Navbar from "./components/navbar";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config";

export default function Home() {
  const [carouselData, setCarouselData] = useState<any>();

  // Getting Carousel Data
  const getCarousel = async () => {
    const docRef = doc(db, "carousel", "images");
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setCarouselData(docSnap.data().images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarousel();
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-[#e8e9eb] py-20">
        {/* Carousel */}
        <div className="slider">
          <div className="slider-track">
            {/* Slides */}
            {carouselData?.map((item: any, index: any) => (
              <div key={index} className="slide bg-white rounded-xl p-5">
                <Image
                  src={item.URL}
                  alt="carousel-image"
                  width={500}
                  height={500}
                  priority={true}
                  className="rounded-xl object-cover h-[25rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
