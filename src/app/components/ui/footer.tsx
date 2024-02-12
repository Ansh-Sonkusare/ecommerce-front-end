import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-row gap-10 p-14">
      <p>Terms of Services </p>
      <p>Privacy Policy</p>
      <input
        className=" type-'email id-'input-9' class-'w-full' h-10 rounded rounded-r-none border border-r-0 px-3 text-sm  text-gray-700 focus:outline-none "
        placeholder="user@mail.com"
      />
      <button className="rounded-lg bg-[#2F2E2E] px-4 py-2 text-white h-10">
        Subscribe
      </button>
      <Image
        src={"/facebook-logo-498.jpg"}
        alt={"facebook"}
        height={40}
        width={40}
        className="h-10"
      ></Image>
      <Image
        src={"/logo-ig-png-32464.png"}
        alt={"instagram"}
        height={40}
        width={40}
        className="h-10"
      ></Image>
      <Image
        src={"/logo-twitter-png-5860.png"}
        alt={"twitter"}
        height={40}
        width={40}
        className="h-10"
      ></Image>
    </div>
  );
}

export default Footer;
