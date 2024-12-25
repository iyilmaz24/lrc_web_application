"use client";
import DashboardSelection from "@/app/_components/DashboardSelection";
import { useState } from "react";

export default function Page({ params }: { params: { dboard: string } }) {
  const { dboard } = params;
  const [dashboardLoading, setDashboardLoading] = useState(true);

  const dashboards: { [key: string]: string } = {
    "Leon-2022-General": "https://lci-dashboards.duckdns.org/dashboard/",
    "Leon-2022-Primary":
      "https://lci-dashboards.duckdns.org/primary-dashboard/",
  };

  const dashboardUrl =
    dashboards[dboard as keyof typeof dashboards] ||
    dashboards["Leon-2022-General"];

  return (
    <main className="min-h-screen">
      <div className="min-h-[125px] flex flex-col items-center justify-center green-bg">
        <DashboardSelection greenBackground={true} />
      </div>

      <div className="text-3xl font-bold flex items-center justify-center green-bg">
        {dboard.split("-").join(" ")}
      </div>

      <div className="green-bg flex flex-col justify-center items-center py-8 px-4 ">
        {dashboardLoading && (
          <div className="min-w-[90%] h-[90%] bg-gray-200 text-black flex flex-col items-center justify-center gap-12 absolute">
            <div className="max-w-[80%] text-center">
              Dashboard Also Available In Full Screen Using Button
            </div>
            <div className="max-w-[80%] text-center font-bold">
              Dashboard Loading...
            </div>
          </div>
        )}

        <iframe
          className="min-w-[95%] max-h-[90%]"
          src={dashboardUrl}
          width={`w-screen`}
          height={750}
          onLoad={() => setDashboardLoading(false)}
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
    </main>
  );
}
