export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <div className="green-bg min-h-20 w-full text-3xl font-bold flex justify-center items-center">
        Leon County Postelection Audit Project
      </div>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="flex justify-between items-center py-16 gap-12">
          <section className="h-[100%] flex flex-col">
            <div className="max-w-lg text-center mt-6">
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
            </div>
          </section>
          <iframe
            className="min-w-[600px] min-h-[400px]"
            src={`https://www.youtube.com/embed/${"0lcWZA_9j-s"}?`}
            // src={`https://www.youtube.com/embed/${"0lcWZA_9j-s"}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
            width={600}
            height={400}
          ></iframe>
        </div>
      </div>
    </main>
  );
}
