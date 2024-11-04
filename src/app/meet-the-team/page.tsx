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
  return (
    <>
      <div className="green-top-border">Meet The Team</div>
      <div className="flex flex-col justify-center items-center bg-slate-200 p-4">
        <div className="font-bold w-full text-center">
          For Additional Information
        </div>
        <div>
          <a
            href="https://lci.fsu.edu/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm"
          >
            https://lci.fsu.edu/about/
          </a>
        </div>
      </div>
      <div className={"mttDivWhite"}>
        <Image
          src={LonnaImage}
          alt=""
          className="AvatarRoot"
          width={135}
          height={135}
        />
        <span className={"bioStyle longBioStyle text-sm"}>{Bios.Lonna}</span>
      </div>
      <div className={"mttDivSlate"}>
        <Image
          src={YimengImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className={"bioStyle text-sm"}>{Bios.Yimeng}</span>
      </div>
      <div className={"mttDivWhite"}>
        <Image
          src={AustinImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className={"bioStyle text-sm"}>{Bios.Austin}</span>
      </div>
      <div className={"mttDivSlate"}>
        <Image
          src={CarsonImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className={"bioStyle"}>{Bios.Carson}</span>
      </div>
      <div className={"mttDivWhite"}>
        <Image
          src={IrfanImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className={"bioStyle"}>{Bios.Irfan}</span>
      </div>
      <div className={"mttDivSlate"}>
        <Image
          src={BillImage}
          alt=""
          className="AvatarRoot "
          width={135}
          height={135}
        />
        <span className={"bioStyle"}>{Bios.Bill}</span>
      </div>
    </>
  );
}
