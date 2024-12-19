import Image from "next/image";

export default function ImageDisplay({
  src = "/placeholder.svg?height=400&width=600",
  alt = "Enlargeable PDF-like image",
  index,
  handleImageClick,
  enlarged,
}: {
  src?: string;
  alt?: string;
  index: number;
  handleImageClick: (e: React.MouseEvent, index: number) => void;
  enlarged: boolean;
}) {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-100">
        <div
          className={`relative w-[170px] h-[220px] cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300 mobile-image-display `}
        >
          <Image
            src={src}
            alt={alt}
            fill={true}
            onClick={(e) => handleImageClick(e, index)}
            className="rounded image-fit"
          />
        </div>
      </div>
    </>
  );
}
