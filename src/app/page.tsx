"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import Navbar from "./components/navbar";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  return (
    <>
      <Navbar />
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
