import ResourceBoard from "@/app/_components/ResourceBoard";

export default function Page() {
  return (
    <>
      <div className="green-bg w-full flex flex-col justify-center items-center gap-12 overflow-y-scroll p-12">
        {/* <section className="flex w-full flex-col justify-center items-center gap-6"> */}
        <h1 className="font-bold text-3xl">
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
        {/* </section> */}
      </div>
    </>
  );
}
