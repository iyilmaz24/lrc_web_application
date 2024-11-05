"use client";
import BallotSelection from "./_components/BallotSelection";
import { useState } from "react";
import ImageDisplay from "./_components/ImageDisplay";

export default function Page() {
  const [ballot, setBallot] = useState(
    "/primary-ballots-with-signatures-replaced.pdf"
  );

  const imageFolder = "/primary-ballots-with-signatures-replaced";
  const imageCount = 20; // Adjust this number to the actual count of images

  const imageSrcs = Array.from(
    { length: imageCount },
    (_, index) =>
      `${imageFolder}/primary-ballots-with-signatures-replaced -images-${index}.jpg`
  );

  return (
    <div className="flex p-8 green-bg min-h-screen flex-col items-center gap-8">
      <BallotSelection selectBallot={setBallot} />

      <div className="flex flex-col">
        <div className="imageDisplayParent">
          {imageSrcs.map((src, index) => (
            <ImageDisplay key={index} src={src} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
