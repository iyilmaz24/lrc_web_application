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
  const contactStyle = "font-bold text-center text-sm";

  return (
    <>
      <div className="green-bg min-h-20 text-4xl font-extrabold flex justify-center items-center">
        Meet The Team
      </div>
      <div className="flex justify-center items-center px-32 py-4 bg-slate-200 gap-12">
        <span className="flex justify-center items-center flex-col w-[50%] text-sm gap-3 m-6">
          <div className="font-bold text-xl w-full text-center">
            For Additional Information
          </div>
          <div>
            Visit our website -{" "}
            <a
              href="https://lci.fsu.edu/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              https://lci.fsu.edu/about/
            </a>
          </div>
        </span>
      </div>
      <div className="flex justify-center items-center h-80 bg-white gap-12 mx-8">
        <Image
          src={LonnaImage}
          alt=""
          className="AvatarRoot"
          width={135}
          height={135}
        />
        <span className="w-[50%] text-sm overflow-hidden overflow-y-scroll max-h-[90%]">
          {Bios.Lonna}
        </span>
      </div>
      <div className="flex justify-center items-center h-72 bg-slate-50 gap-12">
        <Image
          src={YimengImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className="w-[50%] overflow-auto max-h-full py-8">
          {Bios.Yimeng}
        </span>
      </div>
      <div className="flex justify-center items-center h-72 bg-white gap-12">
        <Image
          src={AustinImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className="w-[50%] overflow-auto max-h-full py-8">
          {Bios.Austin}
        </span>
      </div>
      <div className="flex justify-center items-center h-72 bg-slate-50 gap-12">
        <Image
          src={CarsonImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className="w-[50%] overflow-auto max-h-full py-8">
          {Bios.Carson}
        </span>
      </div>
      <div className="flex justify-center items-center h-72 bg-white gap-12">
        <Image
          src={IrfanImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className="w-[50%] overflow-auto max-h-full py-8">
          {Bios.Irfan}
        </span>
      </div>
      <div className="flex justify-center items-center h-72 bg-slate-50 gap-12">
        <Image
          src={BillImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className="w-[50%] overflow-auto max-h-full py-8">
          {Bios.Bill}
        </span>
      </div>
    </>
  );
}
