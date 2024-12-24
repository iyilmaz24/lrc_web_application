import Image from "next/image";

export default function EnlargedImage({
  src,
  alt,
  index,
  handleImageClick,
  enlarged,
  handleNextBallot,
  handlePrevBallot,
}: {
  src: string;
  alt: string;
  index: number;
  handleImageClick: (e: React.MouseEvent, index: number) => void;
  enlarged: boolean;
  handleNextBallot: (e: React.MouseEvent) => void;
  handlePrevBallot: (e: React.MouseEvent) => void;
}) {
  return (
    <>
      {enlarged && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => handleImageClick(e, index)}
        >
          <div
            className="enlarged-image relative max-w-4xl max-h-[90vh] w-full h-full flex justify-evenly items-center enlargedButtonWebShow"
            onClick={(e) => handleImageClick(e, index)}
          >
            <button
              className={`green-btn enlargedBallotButton enlargedButtonWebShow `}
              onClick={(e) => handlePrevBallot(e)}
            >
              Previous
            </button>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={450}
              height={300}
            />
            <button
              className={`green-btn enlargedBallotButton enlargedButtonWebShow `}
              onClick={(e) => handleNextBallot(e)}
            >
              Next
            </button>
          </div>

          <div
            className="enlarged-image relative max-w-4xl max-h-[95vh] w-full h-full flex flex-col justify-center items-center gap-5 enlargedButtonMobileShow"
            onClick={(e) => handleImageClick(e, index)}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={350}
              height={225}
            />
            <div className="flex items-center justify-evenly w-full enlargedButtonMobileShow">
              <button
                className={`green-btn enlargedBallotButton enlargedButtonMobileShow`}
                onClick={(e) => handlePrevBallot(e)}
              >
                Previous
              </button>
              <button
                className={`green-btn enlargedBallotButton enlargedButtonMobileShow`}
                onClick={(e) => handleNextBallot(e)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
