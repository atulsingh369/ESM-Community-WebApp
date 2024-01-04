"use client";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import Navbar from "./components/navbar";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../config";
import { Dot } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [carouselData, setCarouselData] = useState<any>();
  const [announcements, setAnnouncements] = useState<any[]>([]);

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

  // Getting Carousel Data
  const getNotices = async () => {
    try {
      onSnapshot(collection(db, "notices"), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setAnnouncements((announcements: any) => [
            ...announcements,
            doc.data(),
          ]);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarousel();
    getNotices();
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-[#e8e9eb] md:py-20 py-12">
        {/* Carousel */}
        <div className="slider">
          <div className="slider-track">
            {/* Slides */}
            {carouselData?.map((item: any, index: any) => (
              <div key={index} className="slide bg-white rounded-xl p-2 md:p-5">
                <Image
                  src={item.URL}
                  alt="carousel-image"
                  width={500}
                  height={500}
                  priority
                  className="rounded-xl md:object-cover object-contain md:h-[25rem] md:w-[25rem] h-[15rem] w-fit"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white p-5 rounded-xl m-5 my-12 md:my-20">
          <p className="text-black font-semibold underline underline-offset-4 text-xl md:text-2xl text-center">
            Announcements
          </p>

          <Link href="/press">
            <p className="text-right mt-8 md:mt-4 text-[#000081] text-lg cursor-pointer">
              See More..
            </p>
          </Link>
          <div className="slider-Y mt-6 h-96 overflow-hidden">
            <div className="slider-track space-y-6 ">
              {announcements?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="slide flex items-center antialiased">
                  <Dot />
                  <span className="font-semibold">
                    &nbsp; {item?.Date} &nbsp; : &nbsp;
                  </span>
                  <span className="whitespace-nowrap overflow-hidden w-24 md:w-10/12 text-ellipsis">
                    {item?.Notice}
                  </span>
                </div>
              ))}
            </div>
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
