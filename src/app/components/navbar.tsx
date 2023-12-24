import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Auth from "./auth-modal";
import "./auth.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // opening and closing of nav
  const [open, setOpen] = useState(false); // opening and closing of modal
  const [user, setUser] = useState(null); // store User after Auth

  //Handles the opening and closing of nav in mobile
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      let user: any = window.localStorage.getItem("user");
      setUser(JSON.parse(user));
      setOpen(false);
    }
  });

  return (
    <nav className="grid relative items-center h-fit grid-cols-2 md:grid-cols-6 gap-x-4 font-bold text-xl">
      <Link href="/">
        <Image
          src="https://ik.imagekit.io/e5ixuxrlb/esm/logo.png?updatedAt=1685270347657"
          alt="logo"
          className="mx-auto md:block hidden"
          width={125}
          height={125}
        />
        <Image
          src="https://ik.imagekit.io/e5ixuxrlb/esm/logo.png?updatedAt=1685270347657"
          alt="logo"
          className="mx-auto block md:hidden"
          width={75}
          height={75}
        />
      </Link>

      <button className="border-0 outline-0 md:block hidden w-fit">
        ABOUT US
      </button>
      <button className="border-0 outline-0 md:block hidden w-fit">
        MEMBERS
      </button>
      <button className="border-0 outline-0 md:block hidden w-fit">
        GALLERY
      </button>
      <button className="border-0 outline-0 md:block hidden w-fit">
        NOTICES
      </button>

      {!user && (
        <button
          onClick={() => setOpen(true)}
          className="outline-0 border-2 border-black rounded-md p-2 w-fit md:block hidden">
          LOGIN
        </button>
      )}

      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        onClick={handleClick}
        className="md:hidden border-0 outline-0 mx-auto flex flex-col justify-center items-center">
        <span
          className={`bg-[#000081] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-md ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}></span>
        <span
          className={`bg-[#4bc9fc] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-md my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}></span>
        <span
          className={`bg-[#da1d00] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-md ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}></span>
      </button>

      <div
        id="dropdown"
        className={`z-10 absolute top-14 right-0 h-48 block md:hidden bg-red-500 divide-y transition-all duration-300 ease-out divide-gray-100 rounded-l-lg shadow ${
          isOpen ? "w-32" : "w-0"
        }`}
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,129,1) 0%, rgba(75,201,252,1) 0%, rgba(218,29,0,1) 100%)",
        }}>
        <ul className="py-2 text-sm text-white">
          <Link href="/">
            <li
              onClick={() => setOpen(true)}
              className="block whitespace-nowrap px-4 py-2 hover:bg-gray-400">
              LOGIN
            </li>
          </Link>
          <Link href="/">
            <li className="block whitespace-nowrap px-4 py-2 hover:bg-gray-400">
              About Us
            </li>
          </Link>
          <Link href="/">
            <li className="block whitespace-nowrap px-4 py-2 hover:bg-gray-400">
              Gallery
            </li>
          </Link>
          <Link href="/">
            <li className="block whitespace-nowrap px-4 py-2 hover:bg-gray-400">
              Members
            </li>
          </Link>
          <Link href="/">
            <li className="block whitespace-nowrap px-4 py-2 hover:bg-gray-400">
              Press Release
            </li>
          </Link>
        </ul>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          modal: "authModal",
        }}>
        <Auth {...{ setOpen }} />
      </Modal>
    </nav>
  );
};

export default Navbar;
