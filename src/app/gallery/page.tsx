"use client";
import React from "react";
import Navbar from "../components/navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <Navbar />

      <p>Gallery</p>

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
};

export default Gallery;
