"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Register = () => {
  const [timer, setTimer] = useState(10);
  const [payload, setPayload] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const registerUser = localStorage.getItem("registerPayload");
    if (registerUser) {
      const userData = JSON.parse(registerUser);
      setPayload(userData);
    } else {
      setTimeout(() => {
        router.push("/");
      }, 10000);
      setInterval(() => {
        setTimer((t) => t - 1 / 2);
      }, 1000);
    }
  }, [router]);

  return payload ? (
    // is registerd in auth dialog, if true then enter details else not-found error page
    <>
      <Navbar />

      <div className="space-y-8 bg-[#e8e9eb] p-5 md:p-10 flex flex-col items-center">
        <p className="text-3xl text-blue-700 text-center font-bold">
          Fill your Details
        </p>

        <p className="text-lg bg-white text-[#000081] md:text-xl ring-0 outline-0 border border-neutral-500 rounded-lg focus:ring-[#000081] w-2/3 focus:border-[#000081] p-2.5">
          {payload.displayName}
        </p>

        <p className="text-lg bg-white text-[#000081] md:text-xl ring-0 outline-0 border border-neutral-500 rounded-lg focus:ring-[#000081] w-2/3 focus:border-[#000081] p-2.5">
          {payload.email}
        </p>

        {/* Mobile No */}
        <input
          type="tel"
          id="mblNo"
          placeholder="Enter Mobile No..."
          required
          className="text-lg md:text-xl text-[#000081] ring-0 outline-0 border border-neutral-500 placeholder-[#000081] rounded-lg focus:ring-[#000081] w-2/3 focus:border-[#000081] p-2.5"
          // value={registerForm.name}
          // onChange={(e) =>
          //   setRegisterForm({ ...registerForm, name: e.target.value })
          // }
        />

        {/* Father Name */}
        <input
          type="text"
          id="fname"
          placeholder="Enter Father Name..."
          required
          className="text-lg md:text-xl text-[#000081] ring-0 outline-0 border border-neutral-500 placeholder-[#000081] rounded-lg focus:ring-[#000081] w-2/3 focus:border-[#000081] p-2.5"
          // value={registerForm.name}
          // onChange={(e) =>
          //   setRegisterForm({ ...registerForm, name: e.target.value })
          // }
        />

        {/* Service No */}
        <input
          type="text"
          id="serviceField"
          placeholder="Enter Service No..."
          required
          className="text-lg md:text-xl text-[#000081] ring-0 outline-0 border border-neutral-500 placeholder-[#000081] rounded-lg focus:ring-[#000081] w-2/3 focus:border-[#000081] p-2.5"
          // value={registerForm.name}
          // onChange={(e) =>
          //   setRegisterForm({ ...registerForm, name: e.target.value })
          // }
        />

        {/* current EMP */}
        <input
          type="text"
          id="currEMP"
          placeholder="Enter Current Employment..."
          required
          className="text-lg md:text-xl text-[#000081] ring-0 outline-0 border border-neutral-500 placeholder-[#000081] rounded-lg focus:ring-[#000081] w-2/3 focus:border-[#000081] p-2.5"
          // value={registerForm.name}
          // onChange={(e) =>
          //   setRegisterForm({ ...registerForm, name: e.target.value })
          // }
        />

        {/* Address */}
        <input
          type="text"
          id="address"
          placeholder="Enter Address..."
          required
          className="text-lg md:text-xl text-[#000081] ring-0 outline-0 border border-neutral-500 placeholder-[#000081] rounded-lg focus:ring-[#000081] w-2/3 focus:border-[#000081] p-2.5"
          // value={registerForm.name}
          // onChange={(e) =>
          //   setRegisterForm({ ...registerForm, name: e.target.value })
          // }
        />

        {/* Pan No */}
        <input
          type="text"
          id="panNo"
          placeholder="Enter Pan No..."
          required
          className="text-lg md:text-xl text-[#000081] ring-0 outline-0 border border-neutral-500 placeholder-[#000081] rounded-lg focus:ring-[#000081] w-2/3 focus:border-[#000081] p-2.5"
          // value={registerForm.name}
          // onChange={(e) =>
          //   setRegisterForm({ ...registerForm, name: e.target.value })
          // }
        />

        <button
          type="submit"
          className="w-full md:w-2/3 text-lg md:text-xl py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-md focus:outline-none transition duration-150 ease-in-out">
          Submit
        </button>
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
  ) : (
    // not found error page
    <div className="flex justify-center flex-col space-y-10 items-center h-screen w-screen">
      <p>
        Redirecting to Home Page in
        <span className="font-semibold text-xl">&nbsp;{timer}&nbsp;</span>
        seconds...
      </p>

      <Image
        src="https://ik.imagekit.io/xji6otwwkb/error.gif?updatedAt=1704300525441"
        alt="error-404"
        className="mx-auto md:block hidden"
        width={500}
        priority
        height={500}
      />
      <Image
        src="https://ik.imagekit.io/xji6otwwkb/error.gif?updatedAt=1704300525441"
        alt="error-404"
        className="mx-auto block md:hidden"
        width={175}
        priority
        height={175}
      />
      <p className="text-4xl text-center font-bold">Page Not Found !!</p>
      <p className="text-2xl font-semibold">Register yourself to Continue...</p>
    </div>
  );
};

export default Register;
