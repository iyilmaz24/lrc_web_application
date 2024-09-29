import TextAccordion from "../_components/TextAccordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { FAQCONTENT, POSTELECTION_FAQCONTENT } from "../static-text/FAQContent";
import DropDown from "../_components/DropDown";

// https://www.radix-ui.com/primitives/docs/components/accordion

export default function Page() {
  return (
    <>
      <div className="green-bg w-full h-screen flex flex-col justify-center items-center gap-24 overflow-y-scroll">
        <TextAccordion AccordionWide={true} />

        <div className="text-4xl font-extrabold min-w-full flex flex-col items-center justify-center">
          Post-Election Audits and FAQs
        </div>

        <DropDown DropDownItems={POSTELECTION_FAQCONTENT} />
        <DropDown DropDownItems={FAQCONTENT} />
      </div>
    </>
  );
}
