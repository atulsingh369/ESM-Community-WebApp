import { Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-responsive-modal";

const Gallery = () => {
  const [uploadSrc, SetUploadSrc] = useState("");
  const [isSrc, setIsSrc] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const imgUpload = (e: any) => {
    try {
      if (!e.target.files[0]) return;
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (!reader.result) return;
        SetUploadSrc(reader.result as string);
        setIsSrc(true);
      };
    } catch (error) {
      toast.error("Image not Uploaded");
    }
  };

  const uploadGallery = () => {
    if (!uploadSrc) return;
    toast.success("Image Uploaded");
    setIsSrc(false);
  };

  const deleteGallery = () => {
    if (!isDelete) return;
    SetUploadSrc("");
    toast.success("Image Deleted");
    setIsDelete(false);
  };

  return (
    <div>
      <p className="text-[#9898A3] text-[16px]">Add / Delete Gallery Images</p>

      {/* Images */}
      <div className="my-12 flex justify-evenly items-center flex-wrap gap-10">
        <div className="bg-white p-5 rounded-xl space-y-6">
          <Image
            src="https://ik.imagekit.io/xji6otwwkb/default-image.jpg?updatedAt=1680849653455"
            alt="carousel-images"
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <div className="flex justify-between items-center">
            <span>IMG_12</span>
            <button onClick={() => setIsDelete(true)}>
              <Trash color="#f10e0e" />
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl space-y-6">
          <Image
            src="https://ik.imagekit.io/xji6otwwkb/default-image.jpg?updatedAt=1680849653455"
            alt="carousel-images"
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <div className="flex justify-between items-center">
            <span>IMG_12</span>
            <button onClick={() => setIsDelete(true)}>
              <Trash color="#f10e0e" />
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl space-y-6">
          <Image
            src="https://ik.imagekit.io/xji6otwwkb/default-image.jpg?updatedAt=1680849653455"
            alt="carousel-images"
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <div className="flex justify-between items-center">
            <span>IMG_12</span>
            <button onClick={() => setIsDelete(true)}>
              <Trash color="#f10e0e" />
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl space-y-6">
          <Image
            src="https://ik.imagekit.io/xji6otwwkb/default-image.jpg?updatedAt=1680849653455"
            alt="carousel-images"
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <div className="flex justify-between items-center">
            <span>IMG_12</span>
            <button onClick={() => setIsDelete(true)}>
              <Trash color="#f10e0e" />
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl space-y-6">
          <Image
            src="https://ik.imagekit.io/xji6otwwkb/default-image.jpg?updatedAt=1680849653455"
            alt="carousel-images"
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <div className="flex justify-between items-center">
            <span>IMG_12</span>
            <button onClick={() => setIsDelete(true)}>
              <Trash color="#f10e0e" />
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl space-y-6">
          <Image
            src="https://ik.imagekit.io/xji6otwwkb/default-image.jpg?updatedAt=1680849653455"
            alt="carousel-images"
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <div className="flex justify-between items-center">
            <span>IMG_12</span>
            <button onClick={() => setIsDelete(true)}>
              <Trash color="#f10e0e" />
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl space-y-6">
          <Image
            src="https://ik.imagekit.io/xji6otwwkb/default-image.jpg?updatedAt=1680849653455"
            alt="carousel-images"
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <div className="flex justify-between items-center">
            <span>IMG_12</span>
            <button onClick={() => setIsDelete(true)}>
              <Trash color="#f10e0e" />
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl space-y-6">
          <Image
            src="https://ik.imagekit.io/xji6otwwkb/default-image.jpg?updatedAt=1680849653455"
            alt="carousel-images"
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <div className="flex justify-between items-center">
            <span>IMG_12</span>
            <button onClick={() => setIsDelete(true)}>
              <Trash color="#f10e0e" />
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl space-y-6">
          <Image
            src="https://ik.imagekit.io/xji6otwwkb/default-image.jpg?updatedAt=1680849653455"
            alt="carousel-images"
            width={200}
            height={200}
            className="rounded-xl object-cover"
          />
          <div className="flex justify-between items-center">
            <span>IMG_12</span>
            <button onClick={() => setIsDelete(true)}>
              <Trash color="#f10e0e" />
            </button>
          </div>
        </div>
      </div>

      {/* Upload Image */}
      <label
        htmlFor="uploadIMG"
        className="w-full flex justify-center items-center">
        <div className="my-10 rounded-2xl w-2/3 bg-white border-4 border-dashed border-[#9898A3] p-24 cursor-pointer">
          <p className="text-center text-[20px] text-[#333]">
            Upload more Images to
          </p>
          <p className="text-center text-[20px] text-[#333]">
            add in Photo Gallery
          </p>
        </div>
      </label>
      <input
        type="file"
        id="uploadIMG"
        onChange={(e) => imgUpload(e)}
        className="hidden"
        accept="image/x-png,image/gif,image/jpeg"
      />

      <Modal
        open={isDelete}
        onClose={() => setIsDelete(false)}
        center
        classNames={{
          modal: "rounded-xl w-96",
        }}>
        <div className="space-y-6 flex justify-center items-center flex-col">
          <p className="text-xl text-black text-center font-bold mt-3">
            Are you sure, You want to delete the Image
          </p>
          <div className="flex justify-evenly items-center w-full">
            <button
              onClick={() => setIsDelete(false)}
              className="bg-red-700 p-3 rounded-xl text-white outline-0">
              Cancel
            </button>
            <button
              onClick={() => deleteGallery()}
              className="bg-green-700 p-3 rounded-xl text-white outline-0">
              Delete
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        open={isSrc}
        onClose={() => setIsSrc(false)}
        center
        classNames={{
          modal: "rounded-xl w-96",
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
              onClick={() => setIsSrc(false)}
              className="bg-red-700 p-3 rounded-xl text-white outline-0">
              Cancel
            </button>
            <button
              onClick={() => uploadGallery()}
              className="bg-green-700 p-3 rounded-xl text-white outline-0">
              Upload
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
