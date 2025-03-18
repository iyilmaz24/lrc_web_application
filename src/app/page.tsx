import PdfButton from "./_components/PdfButton";
import DashboardSelection from "./_components/DashboardSelection";
import Image from "next/image";
import DashboardFilterSelect from "./_components/DashboardFilterSelect";

export default function Home() {
  const lorem_ipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  return (
    <>
      <div className="home-page">
        <div className="green-top-border">
          Florida Postelection Audit Project
        </div>

        {/* <Image
          alt="home page art"
          className="mt-6 mobile-iframe "
          height={400}
          width={500}
          src={"/home-art.jpeg"}
        ></Image> */}

        <Image
          className="bg-white bg-opacity-15 m-4 mt-10"
          alt="FSU Election Law Program Logo"
          height={85}
          width={350}
          src={
            "https://lrci-main-web-app.s3.us-east-1.amazonaws.com/FSU-ELC-Horizontal-Logo.png"
          }
        />

        <div className="max-w-3xl text-center px-6 py-3">
          All Florida counties are required by law to complete a postelection
          audit. In this project we provide information to the public about the
          accuracy of Florida ballot counting by presenting the results of each
          county’s post-election audit and where available the ballot images.
        </div>
        <div className="flex flex-col justify-center items-center py-4">
          <PdfButton
            buttonText={"Our Technical Report"}
            filePath={
              "https://lrci-main-web-app.s3.us-east-1.amazonaws.com/23-LCI-002-Audit-Technical-Report-V1_4_LA2.pdf"
            }
          />
          <span className="text-xs font-bold">Opens PDF in new tab*</span>
        </div>
        <div className="max-w-2xl text-center px-6 py-3">
          The purpose is to promote election transparency and improve voter
          confidence by providing the public with easily accessible information
          about the audit, its conclusions, and the ballots associated with the
          election. The data can be viewed and reviewed to help you better
          understand the election processes that ensure the accuracy of our
          vote. We provide a user friendly interface to view the audit results
          and view the cast ballots that can be sorted by contest, candidate, or
          precinct. <br /> <br />
          Importantly our system protects voter privacy by ensuring that there
          are no identifying marks located on the ballot images or that data
          from other sources could be used to identify a voter’s ballot.
        </div>

        {/* <span className=" w-[500px] h-[350px] flex justify-center items-center m-4 mobile-iframe">
          <iframe
            className="flex align-self-center"
            src={`https://www.youtube.com/embed/${"0lcWZA_9j-s"}?`}
            width={`100%`}
            height={`100%`}
          ></iframe>
        </span> */}

        <span className="m-4 mt-8 w-full flex justify-center">
          <DashboardFilterSelect />
        </span>

        <div></div>
        <h1 className="text-lg font-bold text-center mt-8">
          Streamlining Public Records Requests
        </h1>
        <div className="max-w-3xl text-center px-6 py-3 mb-20 ">
          The ballot images provided here are downloadable and available for
          anyone to view. Counties that participate in the Florida post election
          audit project will refer all public records requests relating to the
          cast vote record and ballot images to the data presented herein.
        </div>
      </div>
    </>
  );
}
