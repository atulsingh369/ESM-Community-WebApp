import { Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-responsive-modal";

const Members = () => {
  const [uploadSrc, SetUploadSrc] = useState("");
  const [isMember, setIsMember] = useState(false);

  const ediDetailsMem = () => {
    try {
      toast.success("Success");
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };

  const removeMem = () => {
    try {
      toast.success("Success");
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };

  return (
    <div>
      <p className="text-[#9898A3] text-[16px]">Import / Export Members Data</p>

      <Modal
        open={isMember}
        onClose={() => setIsMember(false)}
        center
        classNames={{
          modal: "rounded-xl w-1/2",
        }}>
        <div className="space-y-6 flex justify-center items-center flex-col">
          <Image
            src={uploadSrc}
            alt="carousel-images"
            width={350}
            height={350}
            className="rounded-xl object-cover"
          />
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
    </div>
  );
};

export default Members;
