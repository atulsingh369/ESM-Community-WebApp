"use client";
import Image from "next/image";
import "./globals.css";

export default function Error() {
  return (
    <div className="flex justify-center flex-col space-y-10 items-center h-screen w-screen mb-40 pb-24">
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
    </div>
  );
}
