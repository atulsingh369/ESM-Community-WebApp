import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "भूतपूर्व सैनिक जन कल्याण समिति, उ.प्र .",
  description: "A ESM Community WebApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-stretch overflow-hidden w-screen h-3 items-center">
          <span className="w-1/5 h-full bg-[#ff671f]"></span>
          <span className="w-1/5 h-full bg-[#000081]"></span>
          <span className="w-1/5 h-full bg-[#da1d00]"></span>
          <span className="w-1/5 h-full bg-[#4bc9fc]"></span>
          <span className="w-1/5 h-full bg-[#046a38]"></span>
				</div>
				
        <nav className="grid items-center h-fit grid-cols-6 gap-x-4 font-bold text-xl">
          <Link href="/">
            <Image
              src="https://ik.imagekit.io/e5ixuxrlb/esm/logo.png?updatedAt=1685270347657"
              alt="logo"
              className="mx-auto"
              width={125}
              height={125}
            />
          </Link>
          <span>ABOUT US</span>
          <span>MEMBERS</span>
          <span>GALLERY</span>
          <span>NOTICES</span>
          <button className="border-2 border-black rounded-md p-2 w-fit ">
            SIGN UP
          </button>
				</nav>
				
				{children}
				
        <footer className="fixed bottom-0 bg-[#323e48] text-white">
          <div className="flex justify-stretch overflow-hidden w-screen h-3 items-center">
            <span className="w-1/5 h-full bg-[#ff671f]"></span>
            <span className="w-1/5 h-full bg-[#000081]"></span>
            <span className="w-1/5 h-full bg-[#da1d00]"></span>
            <span className="w-1/5 h-full bg-[#4bc9fc]"></span>
            <span className="w-1/5 h-full bg-[#046a38]"></span>
          </div>

          <span className="flex justify-center items-center my-2 text-2xl">
            भूतपूर्व सैनिक जन कल्याण समिति उ.प्र.
          </span>
          <span className="flex justify-center items-center my-2 text-2xl">
            ❤️ Built by Atul Singh ❤️
          </span>
        </footer>
      </body>
    </html>
  );
}
