import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./CSS/TextAccordion.css";

const TextAccordion = ({ AccordionWide }: { AccordionWide: boolean }) => (
  <Accordion.Root
    className={`AccordionRoot ${
      AccordionWide == true ? "AccordionWide" : "AccordionNarrow"
    }`}
    type="single"
    defaultValue=""
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>Traditional audits</AccordionTrigger>
      <AccordionContent>
        Traditional audits use a predetermined fixed percentage or number of
        ballots or ballot types (mail, early, and Election Day), precincts or
        tabulators where ballots are hand counted and compared to the reported
        results from those system. In some states, various size discrepancies
        between the hand count and machine count can lead to additional ballots
        being selected for auditing, but this is not very common. In addition,
        requirements can vary as to whether all or only some types of ballots
        are included in the audit (e.g. provisional, uniform and overseas
        voters, cured absentee). These audits do not examine the entire ballot,
        but tend to look at specific contests. Most of these audit procedures
        are set forth in state statues and define who, how and when the audit is
        conducted.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Risk-limiting audit (RLA)</AccordionTrigger>
      <AccordionContent>
        A risk-limiting audit (RLA) is a post-election tabulation auditing
        procedure that provides statistical assurance that voting hardware and
        software produced the correct winners. RLAs involve reviewing portions
        of the audit trail—voter-verified paper records including paper ballots
        themselves, paper audit trails produced by direct-recording electronic
        voting machines, or paper ballot records produced by ballot-marking
        devices —to identify and correct any erroneous electoral outcomes. RLAs
        first require a ballot counting audit to ensure that the correct number
        of ballots have been cast based upon the records in the audit trail.
        Second, because recounting all cast ballots is time-consuming and
        costly, RLAs assess only a random sample of ballots. The number of
        recounted or reviewed ballots increases incrementally until a
        predetermined “risk limit”—the highest probability that the audit will
        not correct an incorrect outcome—is met or election administrators
        conduct a full recount. For example, at a 5% risk limit, there is at
        most a 5% chance that the audit will not identify an incorrect outcome.
        The number of ballots that must be hand-counted is a function of risk
        limit, vote margin, and (weakly) contest size. Lower risk limits entail
        examining more ballots, as do closer elections. RLAs escalate the number
        of ballots examined if the risk limit is not met; theoretically this
        could include a full hand count if necessary.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>Transitive or machine audits</AccordionTrigger>
      <Accordion.Content className="AccordionContent">
        <div className="AccordionContentText">
          Transitive audits are re-tabulation audits that digitally rescan
          ballots on a different voting system or tabulator and the results of
          the two systems are compared. A transitive election audit, also known
          as a double-count audit, runs all the ballots through two independent
          tabulating systems. The ballots are first tabulated on the official
          tabulator used to record final votes and then run through a second
          tabulator from a different manufacturer with different hardware and
          software to confirm the vote totals. If both systems report the same
          election outcomes it provides evidence that the outcomes are correct,
          even if it finds some variation across systems. In this case, the
          post-election audit relies on the independence of the tabulation
          system’s software and hardware to demonstrate the veracity of the
          outcomes, not human confirmation. Compared to other types of
          post-election audits, transitive audits of this type have the
          advantage of recounting all the ballots and 100% of the contests.
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
