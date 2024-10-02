export const POSTELECTION_FAQCONTENT = [
  {
    question: "Traditional audits",
    answer: `Traditional audits use a predetermined fixed percentage or number of ballots or ballot types (mail, early, and Election Day), precincts or tabulators where ballots are hand counted and compared to the reported results from those system. In some states, various size discrepancies between the hand count and machine count can lead to additional ballots being selected for auditing, but this is not very common. In addition, requirements can vary as to whether all or only some types of ballots are included in the audit (e.g. provisional, uniform and overseas voters, cured absentee). These audits do not examine the entire ballot, but tend to look at specific contests. Most of these audit procedures are set forth in state statues and define who, how and when the audit is conducted.`,
    key: 1,
    defaultState: true,
  },
  {
    question: "Risk-limiting audit (RLA)",
    answer: `A risk-limiting audit (RLA) is a post-election tabulation auditing procedure that provides statistical assurance that voting hardware and software produced the correct winners. RLAs involve reviewing portions of the audit trail—voter-verified paper records including paper ballots themselves, paper audit trails produced by direct-recording electronic voting machines, or paper ballot records produced by ballot-marking devices —to identify and correct any erroneous electoral outcomes. RLAs first require a ballot counting audit to ensure that the correct number of ballots have been cast based upon the records in the audit trail. Second, because recounting all cast ballots is time-consuming and costly, RLAs assess only a random sample of ballots. The number of recounted or reviewed ballots increases incrementally until a predetermined “risk limit”—the highest probability that the audit will not correct an incorrect outcome—is met or election administrators conduct a full recount.

For example, at a 5% risk limit, there is at most a 5% chance that the audit will not identify an incorrect outcome. The number of ballots that must be hand-counted is a function of risk limit, vote margin, and (weakly) contest size. Lower risk limits entail examining more ballots, as do closer elections. RLAs escalate the number of ballots examined if the risk limit is not met; theoretically this could include a full hand count if necessary.`,
    key: 2,
    defaultState: false,
  },
  {
    question: "Transitive or machine audits",
    answer: `Transitive audits are re-tabulation audits that digitally rescan ballots on a different voting system or tabulator and the results of the two systems are compared. A transitive election audit, also known as a double-count audit, runs all the ballots through two independent tabulating systems. The ballots are first tabulated on the official tabulator used to record final votes and then run through a second tabulator from a different manufacturer with different hardware and software to confirm the vote totals. If both systems report the same election outcomes it provides evidence that the outcomes are correct, even if it finds some variation across systems. In this case, the post-election audit relies on the independence of the tabulation system’s software and hardware to demonstrate the veracity of the outcomes, not human confirmation.

Compared to other types of post-election audits, transitive audits of this type have the advantage of recounting all the ballots and 100% of the contests.`,
    key: 3,
    defaultState: false,
  },
];

export const FAQCONTENT = [
  {
    question: "Why look at ballots in this manner?",
    answer: `The purpose of postelection auditing is to promote confidence in the counting process by demonstrating that the tabulating machines count votes correctly. Leon County pioneered the transitive audit, which is a 100% retabualtion of all the ballots.

Compared to other types of audits, traditional and risk-limiting, transitive audits have the advantage of counting all the ballots, instead of a much smaller portion, and in every contest, as opposed to just particular contests.`,
    key: 1,
    defaultState: true,
  },
  {
    question: "What are the laws in Florida regarding post-election audits?",
    answer: `Election auditing is a critical component to election security and integrity. 45 states require some sort of post-election audit and two additional states have post-election audit pilot projects to ensure the accuracy of tabulators and the election outcomes.

Florida election officials are required by law to do a post-election audit (s. 101.591, Florida Statutes).  There are two types of post-election audits that are allowed:

A public manual audit that examines one randomly selected ballot contest for 1%-2% of randomly selected precincts in each jursidiction, or
An automated audit that consists of a tally of all the votes cast in each contest.  This audit includes 20% of precincts in a jurisdiction, chosen randomly.
Election Supervisors in several Florida counties have been experimenting with 100% retabulation audits that use a second tabulator from a different vendor to recount all the ballots. The results from the retabulation audit are then compared to the first tabulation to determine if there is any variation or difference between the two.`,
    key: 2,
    defaultState: false,
  },
  {
    question:
      "What happens if there is variation or differences between the two independent vote counts?",
    answer: ``,
    key: 3,
    defaultState: false,
  },
  {
    question:
      "Why does the postelection audit use two tabulators from different manufacturers?",
    answer: ``,
    key: 4,
    defaultState: false,
  },
  {
    question:
      "On the 2022 Primary election dashboard why are there 3 types of party contests?",
    answer: ``,
    key: 5,
    defaultState: false,
  },
  {
    question: "What is an undervote?",
    answer: ``,
    key: 6,
    defaultState: false,
  },
  {
    question: "What is an overvote?",
    answer: ``,
    key: 7,
    defaultState: false,
  },
  {
    question: "What does oval confidence mean and how is it determined?",
    answer: ``,
    key: 8,
    defaultState: false,
  },
  {
    question:
      "How can I view ballots cast in a specific precinct in the general election?",
    answer: ``,
    key: 9,
    defaultState: false,
  },
  {
    question:
      "Why doesn't the map work for the primary dashboard? Why isn't there a precinct column in the primary second table dashboard? Why have the precinct numbers in the top righthand corner of the primary ballots and the tick marks at the bottom of the primary ballots been removed?",
    answer: ``,
    key: 10,
    defaultState: false,
  },
  {
    question: "Are any ballots missing from the primary dashboard?",
    answer: ``,
    key: 11,
    defaultState: false,
  },
  {
    question: "Why are some ballots missing an oval confidence ranking?",
    answer: ``,
    key: 12,
    defaultState: false,
  },
  {
    question:
      "Why do some ballots say DUPLICATE in the upper right-hand corner?",
    answer: ``,
    key: 13,
    defaultState: false,
  },
  {
    question:
      "What is the difference between a vote center and a voting precinct?",
    answer: ``,
    key: 14,
    defaultState: false,
  },
  {
    question: "What are interesting ballots on the navigational tool bar?",
    answer: ``,
    key: 15,
    defaultState: false,
  },
  {
    question:
      "How did we calculate the difference between the official and audit vote counts?",
    answer: ``,
    key: 16,
    defaultState: false,
  },
  {
    question: "Who funded this project?",
    answer: ``,
    key: 17,
    defaultState: false,
  },
];
