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
            className="enlarged-image relative max-w-4xl max-h-[90vh] w-full h-full flex justify-center items-center"
            onClick={(e) => handleImageClick(e, index)}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={500}
              height={300}
            />
          </div>
          <button onClick={(e) => handleNextBallot(e)}>Next</button>
          <button onClick={(e) => handlePrevBallot(e)}>Prev</button>
        </div>
      )}
    </>
  );
}
