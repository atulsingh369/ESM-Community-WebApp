"use client";
import Image from "next/image";
import "./globals.css";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [clientError, setClientError] = useState<Error>();

  const moveToHome = () => {
    // setTimeout(() => {
    redirect("/");
    // }, 3000);
  };

  useEffect(() => {
    if (error) {
      setClientError(error);
    }
  }, [error]);
  return (
    <div className="flex justify-center flex-col space-y-10 items-center h-screen w-screen mb-40 pb-48">
      {/* <Link href={"/"}>
        <Button>Home</Button>
      </Link> */}

      <Image
        src="https://ik.imagekit.io/xji6otwwkb/Error%20-%20404.gif?updatedAt=1704115051846"
        alt="error-404"
        className="mx-auto md:block hidden"
        width={500}
        height={500}
      />
      <Image
        src="https://ik.imagekit.io/xji6otwwkb/Error%20-%20404.gif?updatedAt=1704115051846"
        alt="error-404"
        className="mx-auto block md:hidden"
        width={175}
        height={175}
      />
      {clientError?.message && (
        <p className="text-4xl text-center font-bold">{clientError?.message}</p>
      )}
      <p className="text-2xl font-semibold">Login to Continue...</p>
    </div>
  );
}
