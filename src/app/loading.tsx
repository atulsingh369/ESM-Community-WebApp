import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Image
        src="https://ik.imagekit.io/e5ixuxrlb/esm/logo.png?updatedAt=1685270347657"
        alt="logo"
        className="mx-auto md:block hidden"
        width={300}
        height={300}
      />
      <Image
        src="https://ik.imagekit.io/e5ixuxrlb/esm/logo.png?updatedAt=1685270347657"
        alt="logo"
        className="mx-auto block md:hidden"
        width={175}
        height={175}
      />
    </div>
  );
}
