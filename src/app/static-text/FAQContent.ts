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
  //   {
  //     question: "Why look at ballots in this manner?",
  //     answer: `The purpose of postelection auditing is to promote confidence in the counting process by demonstrating that the tabulating machines count votes correctly. Leon County pioneered the transitive audit, which is a 100% retabualtion of all the ballots.

  // Compared to other types of audits, traditional and risk-limiting, transitive audits have the advantage of counting all the ballots, instead of a much smaller portion, and in every contest, as opposed to just particular contests.`,
  //     key: 1,
  //     defaultState: true,
  //   },
  {
    question: "What are the laws in Florida regarding post-election audits?",
    answer: `Florida election officials are required by law to complete a post-election audit (s. 101.591, Florida Statutes). There are two types of post-election audits that are allowed by law and a third option that many counties complete recounts all the ballots with a second independent tabulator:

a. A public manual audit that examines one randomly selected ballot contest for 1%-2% of randomly selected precincts in each jurisdiction, or

b. An automated audit that consists of a tally of all the votes cast in each contest. This audit includes 20% of precincts in a jurisdiction, chosen randomly.

c. Election Supervisors in several Florida complete their postelection audit with a 100% retabulation of all the ballots using a second tabulator from a different vendor. The results from the second machine count are then compared to the first machine count to determine if there are any discrepancies.`,
    key: 1,
    defaultState: false,
  },
  // {
  //   question:
  //     "What happens if there is variation or differences between the two independent vote counts?",
  //   answer: ``,
  //   key: 3,
  //   defaultState: false,
  // },
  // {
  //   question:
  //     "Why does the postelection audit use two tabulators from different manufacturers?",
  //   answer: ``,
  //   key: 4,
  //   defaultState: false,
  // },
  {
    question:
      "On the primary election dashboard why are there 3 types of party contests?",
    answer: `Florida’s primary elections are “closed” meaning that only registered members of a political party are able to cast ballots for that party’s nominees. In Florida primary elections there are separate ballots given to members of each political party. In other words, the ballot that a registered Democrat receives will include primary contests between Democratic candidates, but would not include primary contests between Republican candidates. This way, only Democrats are voting for which nominee they wish to represent their party in the general election, and respectively, only Republicans are voting for their party’s nominee. 
    In the primary election, those voters with No Party Affiliation (NPA) or a non major party affiliation are not allowed to vote in either party’s primary elections but they are allowed to vote in any nonpartisan races or contests in the city and the county.
    In the primary dashboard the Party of Contest button is in the top middle and refers to the partisan ballot that was issued to the voter and has four possible selections: 1) All, 2) Republican (REP), 3) Democrat (DEM), 4) Nonpartisan Race (NPR). If you select the filter for “Democrat (DEM)” both dashboard data tables will filter Democratic ballot contests. Similarly, if you filter “Republican (REP)” both dashboard data tables will filter Republican ballot contests and if you filter “Nonpartisan race”

  both dashboard data tables will filter nonpartisan contests in the city and county. Of course, both Republican and Democratic ballots also include the nonpartisan contests. Therefore, if you select the filter for “Democrat Party” you will see ballots completed by registered Democrats, which will include partisan primary contests, as well as non-partisan contests where candidates have no declared political affiliation.
  In Florida elections contests that only have one candidate running are not put on the ballot and win by acclamation.`,
    key: 2,
    defaultState: false,
  },
  {
    question: "What is an undervote?",
    answer: `An undervote is when a voter does not cast a vote for any candidate in a given contest. In other words, if voters leave a particular contest blank and do not “bubble in” or “mark” any candidate’s name, they have “undervoted” in that contest.

Undervoting can be purposeful or accidental. A voter may intentionally avoid voting in a particular contest or may miss it. Undervotes are more common in “down-ballot” contests, such as retention votes for judges, and are less common for statewide races, such as for the Florida Governor.`,
    key: 3,
    defaultState: false,
  },
  {
    question: "What is an overvote?",
    answer: `An overvote is when a person casts votes for more than one candidate in a given contest. In other words, if a person “bubbles in” more than one person for the same contest, they have overvoted. Overvotes are not counted. In other words, if a person voted for competitors Charlie Crist and Nikki Fried for Florida Governor, neither candidate would receive a vote for that ballot. While overvoting on a particular contest does not count for that contest, valid votes cast for all other contests on that ballot will continue to be counted.`,
    key: 4,
    defaultState: false,
  },
  {
    question: "What does oval confidence mean and how is it determined?",
    answer: `Bubbled in ovals or choices are rated from low to high confidence based upon density marks. Theoretically, the lightest marks within an oval are the least confident and may need further examination or adjudication, especially if the election is close. Ovals completely filled in are likely to score high in confidence and have a low chance of a vote count error, while an oval with only a dot or tiny ink mark or marks outside of the oval are likely to score lower in confidence.

In the dashboard, ballots can be filtered by two oval confidence categories, either 1-20 or all the ballots. A low confidence oval has a low ballot confidence score; the lowest score is 1. Using the 1-20 filter you can look at the 20 ovals with the lowest confidence for a candidate or contest. Once you get past the first few low confidence ovals it is often hard to see any ballot differences with the human eye. This is why we only provide the filter for the lowest 20 ovals. However, you can click the column heading tab for oval confidence and see confidence rankings larger than 20.`,
    key: 5,
    defaultState: false,
  },
  {
    question:
      "How can I view ballots cast in a specific precinct in the general election?",
    answer: `To view ballots cast within a specific precinct, you can either click on that area on the map in the dashboard (which filters the data presented), or you can select the precinct(s) from the drop-down menu above the map.`,
    key: 6,
    defaultState: false,
  },
  {
    question:
      "Why doesn’t the precinct map work sometimes? Why isn't there a precinct column in the primary second table dashboard? Why have the precinct numbers in the top righthand corner of the primary ballots and the tick marks at the bottom of the primary ballots been removed?",
    answer: `State law requires that, “When one or more ballot types, also known as counting groups, in a race or an issue have fewer than 30 voters voting on the ballot, the ballot type must be reported as zero except for the total votes counting group for that precinct.” This is necessary to ensure voter privacy. Precincts with a small number of voters or precincts with a small number of voters within vote mode types risk the possible secrecy of a voter’s ballot.

In the primary, we found that when there were a very small number of nonpartisan and Republican voters participating, there was a high risk of linking ballots to voters. This could be done by triangulating aggregate vote information from the county and state websites and individual level data from the voter file. Therefore, for the primary we had to take additional precautions to ensure that voter ballot choices could not be determined from the records we present, including removing the precinct information from all the ballots and removing the tick marks that indicate the ballot style (tick marks identify the precinct, party and language of the ballot).`,
    key: 7,
    defaultState: false,
  },
  {
    question: "Why are some ballots masked?",
    answer: `Some ballots are masked to protect voter privacy. In these cases, data from a variety of sources could be used to identify a voter. To prevent this, we have made the ballot invisible.`,
    key: 8,
    defaultState: false,
  },
  // {
  //   question: "Why are some ballots missing an oval confidence ranking?",
  //   answer: ``,
  //   key: 12,
  //   defaultState: false,
  // },
  {
    question:
      "Why do some ballots say DUPLICATE in the upper right-hand corner?",
    answer: `Sometimes mail ballots arrive damaged in such a way that they are not readable by the tabulator. This happens because sometimes a ballot is torn or otherwise damaged. For example, sometimes folding the ballot causes the tick marks to be damaged making a mail ballot unreadable. Sometimes the ballot will have coffee or other drinks or food spilled on it that can prevent it from being read. Sometimes the humidity can create problems and ballots stick together. In these cases, county staff duplicate the ballot. This process is completed by one staff person and audited by another. The original ballot is also tagged and is kept for review if there were any litigation around the contest.`,
    key: 9,
    defaultState: false,
  },
  // {
  //   question:
  //     "What is the difference between a vote center and a voting precinct?",
  //   answer: ``,
  //   key: 14,
  //   defaultState: false,
  // },
  // {
  //   question: "What are interesting ballots on the navigational tool bar?",
  //   answer: ``,
  //   key: 15,
  //   defaultState: false,
  // },
  // {
  //   question:
  //     "How did we calculate the difference between the official and audit vote counts?",
  //   answer: ``,
  //   key: 16,
  //   defaultState: false,
  // },
  {
    question: "Who funded this project?",
    answer: `The is project was funded by the LeRoy Collins Institute at Florida State University with support from the FSU College of Law Election Law Program and the FSU Institute for Governing and Civics`,
    key: 10,
    defaultState: false,
  },
];
