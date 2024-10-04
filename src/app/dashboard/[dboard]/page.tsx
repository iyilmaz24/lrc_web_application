import React from "react";

export default function Page() {
  return (
    <div className="green-bg flex flex-col justify-center items-center p-20 gap-4">
      <iframe
        className="min-w-[100%] min-h-[400px]"
        src={` https://leroy-collins-institute.shinyapps.io/LeonCounty2022General/`}
        width={700}
        height={400}
      ></iframe>
      <iframe
        className="min-w-[100%] min-h-[400px]"
        src={`https://leroy-collins-institute.shinyapps.io/LeonCounty2022Primary/?`}
        width={`w-screen`}
        height={400}
      ></iframe>
    </div>
  );
}
