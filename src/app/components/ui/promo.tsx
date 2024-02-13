import Image from "next/image";

function Promo() {
  return (
    <div className="flex items-center justify-center">
      <div className="font-inter w-96 rounded-3xl bg-[#FFFCBE] p-8 text-center lg:w-1/2">
        <div className="flex items-center justify-center text-center">
          <Image
            src={"/Party_Popper_Emojipedia.png"}
            alt={"partyhat"}
            height={140}
            width={130}
          />
          <h1 className="font-5xl mb-4 text-[50px] font-medium text-red-500">
            PROMO BANNER
          </h1>
          <div style={{ transform: "scaleX(-1)" }}>
            <Image
              src={"/Party_Popper_Emojipedia.png"}
              alt={"partyhat"}
              height={140}
              width={130}
            />
          </div>
        </div>

        <p className="text-10xl text-[30px] font-light text-[#5E5959]">
          Unlock the world of photography with an exclusive offer! Enjoy a
          delightful <span className="text-red-500 underline">20% off</span> on
          your purchases. Simply use code '
          <span className="text-red-500">CAMERA</span>' at checkout and capture
          the moments, seize the savings!
        </p>
      </div>
    </div>
  );
}

export default Promo;
