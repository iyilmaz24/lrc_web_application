import PdfButton from "./_components/PdfButton";
import DashboardSelection from "./_components/DashboardSelection";

export default function Home() {
  const lorem_ipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <div className="green-top-border">Florida Postelection Audit Project</div>
      <div className="home-page">
        <div className="home-content">
          <section className="flex flex-col gap-8">
            {/* <div className="max-w-lg text-center mt-6">
              In this project we provide information to the public about the
              accuracy of ballot counting by presenting the data from two
              independent vote tabulators along with the ballot images from the
              100% retabulation postelection audit done in Leon County, Florida
              for the 2022 state primary and general elections.
            </div>
            <div className="mb-auto mt-12 max-w-lg text-center">
              The purpose is to promote election transparency and improve voter
              confidence by providing the public with easily accessible
              information about the audit, its conclusions, and the ballots
              associated with the election. The data can be viewed and reviewed
              to help you better understand the election processes that ensure
              the accuracy of our vote.
            </div> */}
            <div className="max-w-lg text-center">
              In this project we provide information to the public about the
              accuracy of ballot counting by presenting the data from two
              independent vote tabulators along with the ballot images from the
              100% retabulation postelection audit done in Leon County, Florida
              for the 2022 state primary and general elections.
            </div>
            <div className="mb-auto max-w-lg text-center">
              The purpose is to promote election transparency and improve voter
              confidence by providing the public with easily accessible
              information about the audit, its conclusions, and the ballots
              associated with the election. The data can be viewed and reviewed
              to help you better understand the election processes that ensure
              the accuracy of our vote.
            </div>
            <div className="flex flex-col justify-center items-center">
              <PdfButton
                buttonText={"Our Technical Report"}
                filePath={"/23-LCI-002-Audit-Technical-Report-V1_4_LA2.pdf"}
              />
              <span className="m-1 text-xs font-bold">
                Opens PDF in new tab*
              </span>
            </div>
          </section>

          <iframe
            className="w-[600px] h-[400px] mobile-iframe"
            src={`https://www.youtube.com/embed/${"0lcWZA_9j-s"}?`}
            width={600}
            height={400}
          ></iframe>
        </div>

        <div className="mt-4">
          Select one of our dashboards and click &quot;View Dashboard&quot;
        </div>

        <DashboardSelection />
      </div>
    </main>
  );
}
