"use client";
import DashboardSelection from "@/app/_components/DashboardSelection";
import LoadingSpinner from "@/app/_components/LoadingSpinner";
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
            <div className="max-w-[80%] text-center font-bold">
              Dashboard Loading...
            </div>
            <LoadingSpinner />
            <div className="max-w-[80%] text-center flex items-center gap-1">
              For full screen dashboard - use button below
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
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
