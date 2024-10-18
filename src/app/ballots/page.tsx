"use client";
import BallotSelection from "./_components/BallotSelection";
import { useState } from "react";

export default function Page() {
  const [ballot, setBallot] = useState(
    "/primary-ballots-with-signatures-replaced.pdf"
  );

  return (
    <div className="flex p-12 green-bg min-h-screen flex-col items-center justify-between gap-8">
      <BallotSelection selectBallot={setBallot} />
      <div className="w-[65%] h-[80%]">
        <embed
          key={ballot}
          className="w-full h-screen"
          src={ballot}
          type="application/pdf"
          width="60%"
          height="100%"
          title="Embedded PDF Viewer"
        />
      </div>
    </div>
  );
}
