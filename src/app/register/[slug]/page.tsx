"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { isAuthFlow } from "../../components/auth-modal";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Register = ({ params }: { params: { slug: string } }) => {
  const [timer, setTimer] = useState(10);
  const userEmail = decodeURIComponent(params.slug);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthFlow) {
      setTimeout(() => {
        router.push("/");
      }, 10000);
      setInterval(() => {
        setTimer((t) => t - 1 / 2);
      }, 1000);
    }
  }, [router]);

  // is registerd in auth dialog, if true then enter details else not found error page
  return isAuthFlow ? (
    <>
      <Navbar />
      <p>Register</p>
      <p>Email : {userEmail}</p>
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
