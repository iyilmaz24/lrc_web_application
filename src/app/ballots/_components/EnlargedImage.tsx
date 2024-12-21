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
            className="enlarged-image relative max-w-4xl max-h-[90vh] w-full h-full flex justify-evenly items-center"
            onClick={(e) => handleImageClick(e, index)}
          >
            {/* TODO 1: Add pagination support for mobile devices by moving the buttons to bottom of image instaed of on the side
                TODO 2: Change pagination button styling from it's currently added base styles 
                TODO 3: Fix the styling for the currently selected dashboard's title on the other page*/}
            <button
              className={`green-btn enlargedBallotButton `}
              onClick={(e) => handlePrevBallot(e)}
            >
              Previous
            </button>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={500}
              height={300}
            />
            <button
              className={`green-btn enlargedBallotButton `}
              onClick={(e) => handleNextBallot(e)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
