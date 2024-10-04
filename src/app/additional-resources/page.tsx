import ResourceBoard from "../_components/ResourceBoard";
import Link from "next/link";

export default function Page() {
  return (
    <div className="green-bg w-full flex flex-col justify-center items-center gap-12 overflow-y-scroll p-12">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-3xl">Leon County 2022 Election Data</h1>
        <h3 className="text-sm max-w-[60%] text-center">
          Below we include links to the following Leon County primary and
          general election documents that may be helpful to you:
        </h3>
      </div>

      <section className="flex w-full flex-col justify-center items-center gap-6">
        <div className="flex w-full justify-center items-center gap-12">
          <div>
            <ResourceBoard ListType="general" Title="General" />
          </div>
          <div>
            <ResourceBoard ListType="primary" Title="Primary" />
          </div>
        </div>
        <h3 className="text-sm max-w-[80%] text-center">
          In addition, Supervisor Mark Earley has additional data and reports
          about the primary and general election.
        </h3>
      </section>

      <section className="flex w-full flex-col justify-center items-center gap-6">
        <h1 className="font-bold text-xl">
          Florida Secretary of State 2022 Election Data
        </h1>
        <div className="flex w-full justify-center items-center gap-12">
          <div>
            <ResourceBoard ListType="sec-of-state-2022" Title="Primary" />
          </div>
        </div>
        <h3 className="text-sm max-w-[80%] text-center">
          The Florida Department of State has additional information on the 2022
          election.
        </h3>
      </section>
      <h1 className="font-bold text-xl">
        <Link href={"/additional-resources/post-election-audits"}>
          Learn more about Post-election audits
        </Link>
      </h1>

      {/* <section className="flex w-full flex-col justify-center items-center gap-6">
        <h1 className="font-bold text-xl">
          Learn more about Post-election audits
        </h1>
        <div className="flex flex-col w-[50%] justify-center items-center gap-12">
          <ResourceBoard
            ListType="audit-resources"
            Title="For further information on election auditing:"
          />

          <ResourceBoard
            ListType="other-dashboards"
            Title="View other ballot image and audit dashboards:"
          />
        </div>
        <h3 className="text-sm max-w-[80%] text-center">
          The Florida Department of State has additional information on the 2022
          election.
        </h3>
      </section> */}
    </div>
  );
}
