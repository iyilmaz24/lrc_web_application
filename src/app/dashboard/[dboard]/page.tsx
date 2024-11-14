"use client";
import React from "react";
import DashboardSelection from "@/app/_components/DashboardSelection";

export default function Page({ params }: { params: { dboard: string } }) {
  const { dboard } = params;

  const dashboards = {
    "general-2022":
      "https://leroy-collins-institute.shinyapps.io/general_2022_v2/",
    "primary-2022":
      "https://leroy-collins-institute.shinyapps.io/LeonCounty2022Primary/?",
  };

  const dashboardUrl = dashboards[dboard] || dashboards["general-2022"];

  return (
    <main className="min-h-screen">
      <div className="min-h-[125px] flex flex-col items-center justify-center green-bg">
        <DashboardSelection greenBackground={true} />
        {/* <div className="">{dboard}</div> */}
      </div>

      <div className="green-bg flex flex-col justify-center items-center py-8 px-4">
        <iframe
          className="min-w-[95%] max-h-[90%]"
          src={dashboardUrl}
          width={`w-screen`}
          height={750}
        ></iframe>
      </div>
    </main>
  );
}
