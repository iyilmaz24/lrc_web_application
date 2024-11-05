"use client";
import BallotSelection from "./_components/BallotSelection";
import { useState } from "react";
import ImageDisplay from "./_components/ImageDisplay";

export default function Page() {
  const pbwSigReplacedCount = 20;
  const pbwStrayMarksCount = 29;
  const pbwNoVoteCount = 52;
  const govOverInPrimCount = 22;
  const gewSigReplacedCount = 24;
  const gewStrayMarksCount = 20;

  const [ballot, setBallot] = useState(
    "/primary-ballots-with-signatures-replaced.pdf"
  );

  const [pageNum, setPageNum] = useState(0);
  const [totalImages, setTotalImages] = useState(pbwSigReplacedCount);
  const imagesPerPage = 6;

  const imageFolder = "/primary-ballots-with-signatures-replaced";

  const startIndex = pageNum * imagesPerPage;
  const endIndex = Math.min(startIndex + imagesPerPage, totalImages);

  const handleNext = () => {
    if (endIndex < totalImages) {
      setPageNum(pageNum + 1);
    }
  };

  const handlePrevious = () => {
    if (pageNum > 0) {
      setPageNum(pageNum - 1);
    }
  };

  const imageSrcs = Array.from(
    { length: endIndex - startIndex },
    (_, index) =>
      `${imageFolder}/primary-ballots-with-signatures-replaced -images-${
        startIndex + index
      }.jpg`
  );

  return (
    <div className="flex p-8 green-bg min-h-screen flex-col items-center gap-8">
      <BallotSelection selectBallot={setBallot} />

      <div className="flex flex-col">
        <div className="imageDisplayParent">
          {imageSrcs.map((src, index) => (
            <ImageDisplay key={index} src={src} alt={`Image ${index + 1}`} />
          ))}
          <div className="ballotButtonParent">
            <button
              className="green-btn ballotButton"
              onClick={handlePrevious}
              disabled={pageNum === 0}
            >
              Previous
            </button>
            <button
              className="green-btn ballotButton"
              onClick={handleNext}
              disabled={endIndex >= totalImages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
