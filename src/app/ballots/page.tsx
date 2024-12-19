"use client";
import BallotSelection from "./_components/BallotSelection";
import { useState, useEffect, useMemo, useCallback } from "react";
import ImageDisplay from "./_components/ImageDisplay";
import EnlargedImage from "./_components/EnlargedImage";

export default function Page() {
  const pbwSigReplacedCount = 20;
  const pbwStrayMarksCount = 29;
  const pbwNoVoteCount = 52;
  const govOverInPrimCount = 22;
  const gewSigReplacedCount = 24;
  const gewStrayMarksCount = 20;

  const imageCounts = useMemo(
    () => ({
      "primary-ballots-with-signatures-replaced": pbwSigReplacedCount,
      "primary-ballots-with-no-votes": pbwNoVoteCount,
      "primary-ballots-with-stray-marks": pbwStrayMarksCount,
      "governor-overvotes-in-primary": govOverInPrimCount,
      "general-election-ballots-with-signatures-replaced": gewSigReplacedCount,
      "ge-ballots-with-stray-marks": gewStrayMarksCount,
    }),
    [
      pbwSigReplacedCount,
      pbwStrayMarksCount,
      pbwNoVoteCount,
      govOverInPrimCount,
      gewSigReplacedCount,
      gewStrayMarksCount,
    ]
  );

  const [imageFolder, setImageFolder] = useState(
    "primary-ballots-with-signatures-replaced"
  );
  const [totalImages, setTotalImages] = useState(
    imageCounts[imageFolder as keyof typeof imageCounts]
  );
  const [pageNum, setPageNum] = useState(0);
  const imagesPerPage = 6;

  const startIndex = pageNum * imagesPerPage;
  const endIndex = Math.min(startIndex + imagesPerPage, totalImages);

  useEffect(() => {
    setTotalImages(imageCounts[imageFolder as keyof typeof imageCounts] - 2);
    setPageNum(0);
  }, [imageFolder, imageCounts]);

  const [currIndex, setCurrIndex] = useState(0);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const [enlargedImage, setEnlargedImage] = useState("");

  const handleImageClick = useCallback(
    (index: number) => {
      setIsEnlarged((prev) => !prev);
      setCurrIndex(index);
      setEnlargedImage(
        `${process.env.NEXT_PUBLIC_BALLOT_S3_URL}/${imageFolder}/${imageFolder}-images-${index}.jpg`
      );
    },
    [imageFolder]
  );

  const handleCloseClick = useCallback(() => {
    setIsEnlarged(false);
  }, []);

  // const toggleImageEnlargement = useCallback(() => {
  //   setIsEnlarged((prev) => !prev);
  // }, []);

  // const handleEnlargedImageClick = useCallback((e: React.MouseEvent) => {
  //   e.stopPropagation();
  // }, []);

  const changeEnlargedImage = useCallback(
    (index: number) => {
      setEnlargedImage(
        `${process.env.NEXT_PUBLIC_BALLOT_S3_URL}/${imageFolder}/${imageFolder}-images-${index}.jpg`
      );
    },
    [imageFolder]
  );

  const handleNextBallot = (e: React.MouseEvent) => {
    if (currIndex <= totalImages) {
      e.stopPropagation(); // prevents the view from closing when clicking the next button
      setCurrIndex(currIndex + 1);
      changeEnlargedImage(currIndex + 1);
    }
  };

  const handlePrevBallot = (e: React.MouseEvent) => {
    if (currIndex > 2) {
      e.stopPropagation(); // prevents the view from closing when clicking the prev button
      setCurrIndex(currIndex - 1);
      changeEnlargedImage(currIndex - 1);
    }
  };

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
      `${
        process.env.NEXT_PUBLIC_BALLOT_S3_URL
      }/${imageFolder}/${imageFolder}-images-${startIndex + index + 2}.jpg`
  );

  return (
    <div className="flex p-8 green-bg min-h-screen flex-col items-center gap-8">
      <BallotSelection selectBallot={setImageFolder} />

      <div className="flex flex-col">
        <div className="imageDisplayParent">
          {imageSrcs.map((src, index) => (
            <ImageDisplay
              key={`${imageFolder}-${index}`}
              src={src}
              alt={`Image ${index + 1}`}
              handleImageClick={() => handleImageClick(pageNum * 6 + index + 2)}
              enlarged={false}
              index={index}
            />
          ))}
          <div className="ballotButtonParent">
            {/* <Image src={src} alt={alt} fill={true} objectFit="contain" /> */}
            {/* <ImageDisplay
              src={enlargedImage}
              alt={`Image ${currIndex + 1}`}
              index={currIndex}
              handleImageClick={handleCloseClick}
              enlarged={isEnlarged}
            /> */}

            <EnlargedImage
              src={enlargedImage}
              alt={`Image ${currIndex + 1}`}
              index={currIndex}
              handleImageClick={handleCloseClick}
              enlarged={isEnlarged}
              handleNextBallot={handleNextBallot}
              handlePrevBallot={handlePrevBallot}
            />

            <button
              className={`green-btn ballotButton `}
              onClick={handlePrevious}
              disabled={pageNum === 0}
            >
              Previous
            </button>
            <button
              className={`green-btn ballotButton `}
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
