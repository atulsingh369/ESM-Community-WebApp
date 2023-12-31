"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import Modal from "react-responsive-modal";

const Members = () => {
  const [isMember, setIsMember] = useState(false);

  const ediDetailsMem = () => {
    try {
      toast.success("Success");
      setIsMember(false);
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };

  const removeMem = () => {
    try {
      toast.success("Success");
      setIsMember(false);
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };
  return (
    <>
      <Navbar />

      <div className="bg-[#e8e9eb] mb-40 h-screen p-10">
        {/* Images */}
        <div className="my-12 flex justify-evenly items-center flex-wrap gap-10">
          <div
            onClick={() => setIsMember(true)}
            className="bg-white cursor-pointer p-5 w-72 rounded-xl space-y-6">
            <Image
              src="https://ik.imagekit.io/xji6otwwkb/Profile.png?updatedAt=1680849745697"
              alt="carousel-images"
              width={200}
              height={200}
              className="rounded-xl object-cover mx-auto"
            />
            <p className="text-center font-semibold text-2xl break-words">
              Atul Singh
            </p>
            <div className="flex font-semibold text-lg justify-between items-center">
              <span>Developer</span>
              <span>7518299883</span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={isMember}
        onClose={() => setIsMember(false)}
        center
        classNames={{
          modal: "rounded-xl w-1/2",
        }}>
        <div className="space-y-6 flex justify-center items-center flex-col">
          <div className="flex justify-evenly items-center w-full">
            <button
              onClick={() => removeMem()}
              className="bg-red-700 p-3 rounded-xl text-white outline-0">
              Remove Member
            </button>
            <button
              onClick={() => ediDetailsMem()}
              className="bg-green-700 p-3 rounded-xl text-white outline-0">
              Edit Details
            </button>
          </div>
        </div>
      </Modal>

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

export default Members;
