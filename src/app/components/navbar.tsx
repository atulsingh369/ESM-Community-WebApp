import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Auth from "./auth-modal";
import "./auth.scss";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // opening and closing of nav
  const [open, setOpen] = useState(false); // opening and closing of modal
  const [user, setUser] = useState({}); // store User after Auth

  const router = useRouter();

  //Handles the opening and closing of nav in mobile
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    window.localStorage.removeItem("user");
    toast.success("Logged Out Succesfully");
    setIsOpen(false);
    setUser({});
    router.push("/");
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, []);

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

      <Link href="/about">
        <button className="border-0 outline-0 md:block hidden w-fit">
          About Us
        </button>
      </Link>

      <Link href="/members">
        <button className="border-0 outline-0 md:block hidden w-fit">
          Our Members
        </button>
      </Link>

      <Link href="/gallery">
        <button className="border-0 outline-0 md:block hidden w-fit">
          Gallery
        </button>
      </Link>

      <Link href="/press">
        <button className="border-0 outline-0 md:block hidden w-fit">
          Press Release
        </button>
      </Link>

      {/* user state */}
      {!("email" in user) ? (
        <button
          onClick={() => setOpen(true)}
          className="outline-0 border-2 border-black rounded-md p-2 w-fit md:block hidden">
          Login
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="outline-0 border-2 border-black rounded-md p-2 w-fit md:block hidden">
          Profile
        </button>
      )}

      {/* Login	Dropdown  */}
      <div
        className={`z-10 absolute top-24 w-40 right-32 md:block hidden divide-y transition-all duration-300 ease-out divide-gray-100 rounded-l-lg shadow overflow-hidden ${
          isOpen ? "h-32" : "h-0"
        }`}>
        <ul className="text-gray-700" aria-labelledby="dropdownHoverButton">
          <li className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
            <Link href="/admin">Admin Panel</Link>
          </li>

          <li className="block px-4 py-2 cursor-pointer hover:bg-gray-100">
            Edit Profile
          </li>
          <li
            className="block px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={logout}>
            Logout
          </li>
        </ul>
      </div>

      {/* hamburger button */}
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

      {/* nav dropdown */}
      <div
        id="dropdown"
        className={`z-10 absolute top-14 right-0 h-48 block md:hidden divide-y transition-all duration-300 ease-out divide-gray-100 rounded-l-lg shadow ${
          isOpen ? "w-32" : "w-0"
        }`}
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,129,1) 0%, rgba(75,201,252,1) 0%, rgba(218,29,0,1) 100%)",
        }}>
        <ul className=" text-white">
          {!("email" in user) && (
            <Link href="/">
              <li
                onClick={() => setOpen(true)}
                className="block whitespace-nowrap px-4 py-2 hover:bg-gray-400">
                LOGIN
              </li>
            </Link>
          )}
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
