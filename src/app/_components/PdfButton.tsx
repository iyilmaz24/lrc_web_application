"use client";

export default function PdfButton({
  buttonText,
  filePath,
}: {
  buttonText: string;
  filePath: string;
}) {
  return (
    <button
      onClick={() => window.open(filePath, "_blank")}
      className="p-4 green-btn"
    >
      {buttonText}
    </button>
  );
}
