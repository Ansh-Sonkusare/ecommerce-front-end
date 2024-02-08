import Image from "next/image";

function Title() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 gap-14">
        <div className="mt-15 flex flex-col items-start justify-center">
          <h1 className="font-inter mb-4 text-left text-6xl font-bold">
            Camera
          </h1>
          <p className="font-kdam-thmor text-543131 mb-4 text-left text-2xl">
            we guarantee to bring the best quality <br />
            cameras for your needs.{" "}
          </p>
          <button className="rounded-3xl border border-black bg-gray-900 px-4 py-2 text-2xl text-white hover:bg-white hover:text-black hover:underline">
            Shop now
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-14">
          <div className="grid grid-cols-1 gap-10">
            <Image
              src={"/cam1.png"}
              alt={"whitecamera"}
              height={280}
              width={360}
            ></Image>
            <Image
              src={"/cam4.png"}
              alt={"lenscamera"}
              height={210}
              width={260}
            ></Image>
          </div>

          <div className="grid grid-cols-1 gap-10">
            <div className="mr-20">
              <Image
                src={"/cam2.png"}
                alt={"blackcamera"}
                height={210}
                width={260}
              ></Image>
            </div>
            <Image
              src={"/cam3.png"}
              alt={"sidecamera"}
              height={280}
              width={360}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
