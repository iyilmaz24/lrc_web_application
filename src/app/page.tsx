import BackgroundPattern from "./_components/BackgroundPattern";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundPattern />
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold">
          Leon County Postelection Audit Project
        </h1>
        <div className="flex justify-center items-center">
          <div>
            <div className="w-fit green-bg">
              In this project we provide information to the public about the
              accuracy of ballot counting by presenting the data from two
              independent vote tabulators along with the ballot images from the
              100% retabulation postelection audit done in Leon County, Florida
              for the 2022 state primary and general elections.
            </div>
            <div className="w-fit green-bg">
              The purpose is to promote election transparency and improve voter
              confidence by providing the public with easily accessible
              information about the audit, its conclusions, and the ballots
              associated with the election. The data can be viewed and reviewed
              to help you better understand the election processes that ensure
              the accuracy of our vote.
            </div>
          </div>

          <iframe
            className="min-w-[600px] min-h-[400px]"
            src="https://www.youtube.com/watch?v=0lcWZA_9j-s&t=1s&ab_channel=LeRoyCollinsInstitute"
            width={600}
            height={400}
          ></iframe>
        </div>
      </div>
    </main>
  );
}
