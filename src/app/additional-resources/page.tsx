import React from "react";
import ScrollList from "../_components/ScrollList";

export default function Page() {
  return (
    <div className="green-bg w-full h-screen flex flex-col justify-center items-center gap-12">
      {/* <div>
        <h1 className="text-black">Leon County 2022 Election Data</h1>
        <h3 className="text-black">
          Below we include links to the following Leon County primary and
          general election documents that may be helpful to you:
        </h3>
      </div> */}

      <div className="flex w-full justify-evenly items-center">
        <div>
          General
          <ScrollList ListType="general" />
        </div>

        <div>
          Primary
          <ScrollList ListType="primary" />
        </div>
      </div>
      <h3>
        In addition, Supervisor Mark Earley has additional data and reports
        about the primary and general election.
      </h3>

      <div>
        <h1>Florida Secretary of State 2022 Election Data</h1>

        <div>
          Primary
          <ScrollList ListType="sec-of-state-2022" />
        </div>
        <h3>
          The Florida Department of State has additional information on the 2022
          election.
        </h3>
      </div>

      <h1>Learn more about Post-election audits</h1>
      <div className="flex w-full justify-evenly items-center">
        <div>
          For further information on election auditing see the following:
          <ScrollList ListType="audit-resources" />
        </div>

        <div>
          View other ballot image and audit dashboards:
          <ScrollList ListType="other-dashboards" />
        </div>
      </div>
    </div>
  );
}
