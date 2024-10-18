import AvatarCircle from "@/app/_components/Avatar";
import "@/app/_components/CSS/Avatar.css";
import LonnaImage from "./_headshots/LonnaAtkeson-Headshot.jpg";
import AustinImage from "./_headshots/AustinC-Headshot.jpg";
import BillImage from "./_headshots/BillRoyal-Headshot.jpg";
import CarsonImage from "./_headshots/CarsonCary-Headshot.jpeg";
import YimengImage from "./_headshots/YimengLi-Headshot.jpg";
import IrfanImage from "./_headshots/Irfan-Headshot.jpeg";
import Image from "next/image";
import { Bios } from "./_bios/team-static";

export default function Page() {
  const lorem_ipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  return (
    <>
      <div className="green-bg min-h-40 text-4xl font-extrabold flex justify-center items-center">
        Meet The Team
      </div>
      <div className="flex justify-center items-center h-80 bg-slate-200 gap-12">
        <Image
          src={LonnaImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className="w-[50%] text-sm">{Bios.Lonna}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-white gap-12">
        <Image
          src={YimengImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className="w-[50%]">{Bios.Yimeng}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-slate-200 gap-12">
        <Image
          src={AustinImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className="w-[50%]">{Bios.Austin}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-white gap-12">
        <Image
          src={CarsonImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className="w-[50%]">{Bios.Carson}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-slate-200 gap-12">
        <Image
          src={IrfanImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className="w-[50%]">{Bios.Irfan}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-white gap-12">
        <Image
          src={BillImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className="w-[50%]">{Bios.Bill}</span>
      </div>
    </>
  );
}
