import { FAQCONTENT, POSTELECTION_FAQCONTENT } from "../static-text/FAQContent";
import DropDown from "../_components/DropDown";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="green-bg w-full flex flex-col justify-center p-8 items-center gap-12 overflow-y-scroll">
        <div className="text-4xl font-extrabold min-w-full flex flex-col items-center justify-center text-center">
          Post-Election Audits and FAQs
          <h3 className="text-sm max-w-[80%] text-center p-4">
            <Link href={"additional-resources/post-election-audits"}>
              Click here for post-election audit resources
            </Link>
          </h3>
        </div>

        <DropDown DropDownItems={POSTELECTION_FAQCONTENT} />
        <DropDown DropDownItems={FAQCONTENT} />
      </div>
    </>
  );
}
