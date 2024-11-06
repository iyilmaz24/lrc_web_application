import PdfButton from "./_components/PdfButton";
import DashboardSelection from "./_components/DashboardSelection";
import Image from "next/image";

export default function Home() {
  const lorem_ipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  return (
    <>
      <div className="home-page">
        <div className="green-top-border">
          Florida Postelection Audit Project
        </div>

        <Image
          alt="home page art"
          className="mt-6 mobile-iframe "
          height={400}
          width={500}
          src={"/home-art.jpeg"}
        ></Image>

        <div className="max-w-2xl text-center px-6 py-3 mt-4">
          In this project we provide information to the public about the
          accuracy of ballot counting by presenting the data from two
          independent vote tabulators along with the ballot images from the 100%
          retabulation postelection audit done in Leon County, Florida for the
          2022 state primary and general elections.
        </div>
        <div className="flex flex-col justify-center items-center py-4">
          <PdfButton
            buttonText={"Our Technical Report"}
            filePath={"/23-LCI-002-Audit-Technical-Report-V1_4_LA2.pdf"}
          />
          <span className="text-xs font-bold">Opens PDF in new tab*</span>
        </div>
        <div className="max-w-2xl text-center px-6 py-3">
          The purpose is to promote election transparency and improve voter
          confidence by providing the public with easily accessible information
          about the audit, its conclusions, and the ballots associated with the
          election. The data can be viewed and reviewed to help you better
          understand the election processes that ensure the accuracy of our
          vote.
        </div>

        {/* <span className=" w-[500px] h-[350px] flex justify-center items-center m-4 mobile-iframe">
          <iframe
            className="flex align-self-center"
            src={`https://www.youtube.com/embed/${"0lcWZA_9j-s"}?`}
            width={`100%`}
            height={`100%`}
          ></iframe>
        </span> */}
        <span className="m-4 mt-8 mb-20 w-full">
          <DashboardSelection />
        </span>
      </div>
    </>
  );
}
