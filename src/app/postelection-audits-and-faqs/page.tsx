import TextAccordion from "../_components/TextAccordion";

// https://www.radix-ui.com/primitives/docs/components/accordion

export default function Page() {
  return (
    <>
      <style>
        {`
          .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr); /* 3 columns */
            grid-template-rows: repeat(2, 1fr);    /* 2 rows */
            // gap: 10px; 
          }
          
          .grid-item {
            background-color: #ccc;
            padding: 20px;
            text-align: center;
          }
        `}
      </style>
      <div className="green-bg w-full h-screen flex flex-col justify-center items-center gap-24">
        <TextAccordion AccordionWide={true} />

        <div className="flex justify-center items-center gap-24">
          <div className="grid-container">
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
          </div>
          <div className="grid-container">
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
          </div>
          <div className="grid-container">
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
            <div className="grid-item">Grid Item</div>
          </div>
        </div>
      </div>
    </>
  );
}
