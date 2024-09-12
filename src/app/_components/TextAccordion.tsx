import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./TextAccordion.css";

const TextAccordion = () => (
  <Accordion.Root
    className="AccordionRoot AccordionWide"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>
        What does oval confidence mean and how is it determined?
      </AccordionTrigger>
      <AccordionContent>
        Bubbled in ovals or choices are rated from low to high confidence based
        upon density marks. Theoretically, the lightest marks within an oval are
        the least confident and may need further examination or adjudication,
        especially if the election is close. Ovals completely filled in are
        likely to score high in confidence and have a low chance of a vote count
        error, while an oval with only a dot or tiny ink mark or marks outside
        of the oval are likely to score lower in confidence. In the dashboard,
        ballots can be filtered by two oval confidence categories, either 1-20
        or all the ballots. A low confidence oval has a low ballot confidence
        score; the lowest score is 1. Using the 1-20 filter you can look at the
        20 ovals with the lowest confidence for a candidate or contest. Once you
        get past the first few low confidence ovals it is often hard to see any
        ballot differences with the human eye. This is why we only provide the
        filter for the lowest 20 ovals. However, you can click the column
        heading tab for oval confidence and see confidence rankings larger than
        20.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>
        What does oval confidence mean and how is it determined?
      </AccordionTrigger>
      <AccordionContent>
        Bubbled in ovals or choices are rated from low to high confidence based
        upon density marks. Theoretically, the lightest marks within an oval are
        the least confident and may need further examination or adjudication,
        especially if the election is close. Ovals completely filled in are
        likely to score high in confidence and have a low chance of a vote count
        error, while an oval with only a dot or tiny ink mark or marks outside
        of the oval are likely to score lower in confidence. In the dashboard,
        ballots can be filtered by two oval confidence categories, either 1-20
        or all the ballots. A low confidence oval has a low ballot confidence
        score; the lowest score is 1. Using the 1-20 filter you can look at the
        20 ovals with the lowest confidence for a candidate or contest. Once you
        get past the first few low confidence ovals it is often hard to see any
        ballot differences with the human eye. This is why we only provide the
        filter for the lowest 20 ovals. However, you can click the column
        heading tab for oval confidence and see confidence rankings larger than
        20.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>
        What does oval confidence mean and how is it determined?
      </AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          Bubbled in ovals or choices are rated from low to high confidence
          based upon density marks. Theoretically, the lightest marks within an
          oval are the least confident and may need further examination or
          adjudication, especially if the election is close. Ovals completely
          filled in are likely to score high in confidence and have a low chance
          of a vote count error, while an oval with only a dot or tiny ink mark
          or marks outside of the oval are likely to score lower in confidence.
          In the dashboard, ballots can be filtered by two oval confidence
          categories, either 1-20 or all the ballots. A low confidence oval has
          a low ballot confidence score; the lowest score is 1. Using the 1-20
          filter you can look at the 20 ovals with the lowest confidence for a
          candidate or contest. Once you get past the first few low confidence
          ovals it is often hard to see any ballot differences with the human
          eye. This is why we only provide the filter for the lowest 20 ovals.
          However, you can click the column heading tab for oval confidence and
          see confidence rankings larger than 20.
        </div>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionTrigger = React.forwardRef(
  (
    { children, className, ...props }: AccordionProps,
    forwardedRef: React.Ref<HTMLButtonElement>
  ) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  (
    { children, className, ...props }: AccordionProps,
    forwardedRef: React.Ref<HTMLDivElement>
  ) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";

export default TextAccordion;
