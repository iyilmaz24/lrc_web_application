import { FAQCONTENT, POSTELECTION_FAQCONTENT } from "../static-text/FAQContent";
import DropDown from "../_components/DropDown";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="green-top-border">Post-Election Audits and FAQs</div>
      <div className="green-bg faq-content">
        <DropDown DropDownItems={POSTELECTION_FAQCONTENT} />

        <div className="m-8" />

        <DropDown DropDownItems={FAQCONTENT} />
      </div>
    </>
  );
}
