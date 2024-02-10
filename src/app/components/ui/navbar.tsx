import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <>
      <div className="font mt-6 flex w-full items-center justify-center gap-[40%]">
        <div className="logo text-5xl font-extrabold"> Logo </div>
        <div className="Links flex flex-row gap-9 text-lg ">
          <Link
            className="rounded-lg px-4 py-2  underline transition duration-300 hover:bg-black hover:text-white"
            href="/"
          >
            Home
          </Link>
          <Link
            className="rounded-lg px-4 py-2  transition duration-300 hover:bg-black hover:text-white"
            href="/"
          >
            Products
          </Link>
          <Link
            className="rounded-lg px-4 py-2  transition duration-300 hover:bg-black hover:text-white"
            href="/"
          >
            Services
          </Link>
          <Link
            className="rounded-lg px-4 py-2  transition duration-300 hover:bg-black hover:text-white"
            href="/"
          >
            Contact us
          </Link>
          <Link className="" href="/">
            <Image
              alt="Shopping Cart"
              src="/grocery-store.png"
              height={40}
              width={30}
            ></Image>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
