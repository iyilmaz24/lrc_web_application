"use client";
import React from "react";
import DashboardSelection from "@/app/_components/DashboardSelection";

export default function Page({ params }: { params: { dboard: string } }) {
  const { dboard } = params;

  const dashboards: { [key: string]: string } = {
    "general-2022": "https://lci-dashboards.duckdns.org/dashboard/",
    "primary-2022": "https://lci-dashboards.duckdns.org/primary-dashboard/",
  };

  const dashboardUrl =
    dashboards[dboard as keyof typeof dashboards] || dashboards["general-2022"];

  return (
    <main className="min-h-screen">
      <div className="min-h-[125px] flex flex-col items-center justify-center green-bg">
        <DashboardSelection greenBackground={true} />
        {/* <div className="">{dboard}</div> */}
      </div>

      <div className="green-bg flex flex-col justify-center items-center py-8 px-4">
        {/* <div className="min-w-[85%] max-h-[90%] min-h-96 bg-gray-200 text-black flex flex-col items-center justify-center gap-12">
          <div className="max-w-[80%] text-center">
            Embedded Dashboard Currently Unavailable
          </div>
          <div className="max-w-[80%] text-center font-bold">
            Please Use Full Screen Button
          </div>
        </div> */}
        <iframe
          className="min-w-[95%] max-h-[90%]"
          src={dashboardUrl}
          width={`w-screen`}
          height={750}
        ></iframe>
      </div>

      <div className="w-full flex items-center justify-center green-bg">
        <button
          onClick={() => window.open(dashboardUrl, "_blank")}
          className="p-4 white-btn"
        >
          Open Dashboard In Full Screen
        </button>
      </div>

      <div className="min-w-[95%] max-h-[90%] min-h-80 green-bg"></div>
    </main>
  );
}
