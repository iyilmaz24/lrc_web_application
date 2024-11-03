import React from "react";

export default function Page() {
  return (
    <div className="green-bg flex flex-col justify-center items-center py-20 px-4 gap-4">
      <iframe
        className="min-w-[100%] min-h-[400px]"
        src={`https://leroy-collins-institute.shinyapps.io/general_2022_v2/`}
        width={`w-screen`}
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
