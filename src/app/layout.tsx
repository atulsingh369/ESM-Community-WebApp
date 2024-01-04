import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${inter.className} antialiased overflow-x-hidden scrollbar-hidden`}>
        <div className="flex justify-stretch overflow-hidden w-screen h-2 md:h-3 items-center">
          <span className="w-1/5 h-full bg-[#ff671f]"></span>
          <span className="w-1/5 h-full bg-[#000081]"></span>
          <span className="w-1/5 h-full bg-[#da1d00]"></span>
          <span className="w-1/5 h-full bg-[#4bc9fc]"></span>
          <span className="w-1/5 h-full bg-[#046a38]"></span>
        </div>

        {children}

        <footer className="bg-[#323e48] text-white text-center space-y-12 text-2xl">
          <div className="flex justify-stretch overflow-hidden w-screen h-2 md:h-3 items-center">
            <span className="w-1/5 h-full bg-[#ff671f]"></span>
            <span className="w-1/5 h-full bg-[#000081]"></span>
            <span className="w-1/5 h-full bg-[#da1d00]"></span>
            <span className="w-1/5 h-full bg-[#4bc9fc]"></span>
            <span className="w-1/5 h-full bg-[#046a38]"></span>
          </div>

          <p className="break-words">भूतपूर्व सैनिक जन कल्याण समिति उ.प्र.</p>
          <p className="md:text-lg text-sm">
            <a
              href="https://bit.ly/atulsingh"
              target="_blank"
              rel="noopener noreferrer">
              ❤️ Built by Atul Singh ❤️
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
