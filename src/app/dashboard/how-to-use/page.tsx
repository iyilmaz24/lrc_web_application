import ResourceBoard from "@/app/_components/ResourceBoard";

export default function Page() {
  return (
    <>
      <div className="green-bg min-h-40 text-4xl font-extrabold flex justify-center items-center">
        How To Use The Dashboards
      </div>
      <main className="w-full flex flex-col justify-center p-16 items-center gap-12 overflow-y-scroll">
        <iframe
          className="min-w-[600px] min-h-[400px]"
          src={`https://www.youtube.com/embed/LYlET1xlbY8?si=Fb-pMSd2HNEbzBW7`}
          width={675}
          height={450}
        ></iframe>
        <div className="min-h-20"></div>
        {/* <div>
          <div>
            “Choice” - the candidate, ballot initiative, or choice (like a yes
            or no) being voted on.
          </div>
          <div>
            “Ovals Counted Dominion” - the official number of ovals on each
            ballot available for all choices in that contest.
          </div>
          <div>
            “Audit Ovals Counted ClearBallot” - the number of ovals counted in
            the post-election audit.
          </div>
          <div>
            “Difference In Ovals Counted” - any variation between the Official
            and Audit counts in the previous two columns.
          </div>
          <div>
            “Votes Recorded Dominion” - the official number of votes (filled
            ovals) counted during the election for the Choice in the second
            column of that row.
          </div>
          <div>
            “Audit Votes Recorded ClearBallot” - the number of votes (or filled
            ovals) counted in the post-election audit.
          </div>
          <div>
            “Difference In Votes Recorded” - any variation between the official
            and audit counts in the previous two columns.
          </div>
          <div>
            “Over Vote” - the number of times someone voted more than once on
            the same ballot for that choice.
          </div>
          <div>
            “Under Vote” - the number of voters who left that contest blank and
            declined fill in any ovals.
          </div>
          <div>
            The line under the table contains the “Absolute totals,” or sum of
            the numbers in each column. The exceptions are “Difference in Ovals
            Counted” and “Difference In Votes Recorded,” each of which are the
            total number of differences in the entire audit, positive or
            negative.
          </div>
          <div>
            The second table gives you access to every ballot cast in Leon
            County.
          </div>
          You can filter the data several ways: “Oval Confidence Rank” - Filled
          in ovals are rated from low to high confidence. Ovals not fully filled
          have the least confident rating. Ovals completely filled in are likely
          to score high and have a low chance of a vote count error. (See the
          FAQ page for more.) The “1-20” filter shows you the lowest rated
          ovals. “Voting Method” - Election Day Vote, Early Voting or Vote By
          Mail. (The default is all three.) Choose any “Precinct” using the
          dropdown menu or the map to the lower right. (Some smaller precincts
          are combined to protect voter privacy. Also, this filter is disabled
          on the 2022 Primary Dashboard to protect voter privacy.) “Vote Type” -
          Both types of voting machines count every oval whether filled in or
          not. “Voted For Choice” is checked by default so only the ovals that
          were filled are shown. The table can be sorted by the arrows to the
          right of that column’s heading: “Ballot ID” - The unique number
          assigned to every ballot. “Contest” - the position or ballot
          initiative being decided. “Choice” - the candidate, ballot initiative,
          or choice (like a yes or no) being voted on. “Vote Type” - Whether an
          oval is filled or not. “Voted For Choice” is checked above so only
          filled ovals are shown. “Ballot Link” - Clicking any one of these
          shows you the front and back of that line’s ballot. “Oval Confidence
          Rank” - The rating of how well that oval was filled in. “Precinct”
          “Voting Method” Remember: when you use any of the drop down menus or
          check any boxes to refine the data, it effects both tables. To return
          to the defaults, just refresh the page. If you have any questions, or
          if there’s anything this didn’t cover, please use the “Click here to
          tell us about your experience” to let us know. Thank you!
        </div> */}
      </main>
    </>
  );
}
