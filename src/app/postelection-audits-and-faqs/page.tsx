import TextAccordion from "../_components/TextAccordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { FAQCONTENT, POSTELECTION_FAQCONTENT } from "../static-text/FAQContent";

// https://www.radix-ui.com/primitives/docs/components/accordion

export default function Page() {
  return (
    <>
      <div className="green-bg w-full h-screen flex flex-col justify-center items-center gap-24">
        <TextAccordion AccordionWide={true} />

        <div className="text-4xl font-extrabold min-w-full flex flex-col items-center justify-center gap-8">
          Post-Election Audits and FAQs
          <div className="divide-y divide-black min-w-full flex flex-col items-center justify-center">
            {POSTELECTION_FAQCONTENT.map(
              (FAQ: { question: string; answer: string }, i: number) => (
                <div
                  key={i}
                  className="bg-white p-4 font-semibold text-lg text-black w-[50%] min-w-96 flex justify-between"
                >
                  {FAQ.question}
                  <span className="flex items-center justify-center rounded-full w-8 h-8 border border-green-800">
                    <ChevronDownIcon />
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
