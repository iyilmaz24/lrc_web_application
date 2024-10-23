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
        <div className="text-sm">
          <div>
            <strong>Choice:</strong> the candidate, ballot initiative, or choice
            (like a yes or no) being voted on.
          </div>
          <div>
            <strong>Ovals Counted Dominion:</strong> the official number of
            ovals on each ballot available for all choices in that contest.
          </div>
          <div>
            <strong>Audit Ovals Counted ClearBallot:</strong> the number of
            ovals counted in the post-election audit.
          </div>
          <div>
            <strong>Difference In Ovals Counted:</strong> any variation between
            the Official and Audit counts in the previous two columns.
          </div>
          <div>
            <strong>Votes Recorded Dominion:</strong> the official number of
            votes (filled ovals) counted during the election for the Choice in
            the second column of that row.
          </div>
          <div>
            <strong>Audit Votes Recorded ClearBallot:</strong> the number of
            votes (or filled ovals) counted in the post-election audit.
          </div>
          <div>
            <strong>Difference In Votes Recorded:</strong> any variation between
            the official and audit counts in the previous two columns.
          </div>
          <div>
            <strong>Over Vote:</strong> the number of times someone voted more
            than once on the same ballot for that choice.
          </div>
          <div>
            <strong>Under Vote:</strong> the number of voters who left that
            contest blank and declined fill in any ovals.
          </div>
          <div>
            The line under the table contains the{" "}
            <strong>Absolute totals,</strong> or sum of the numbers in each
            column. The exceptions are{" "}
            <strong>Difference in Ovals Counted</strong> and{" "}
            <strong>Difference In Votes Recorded,</strong> each of which are the
            total number of differences in the entire audit, positive or
            negative.
          </div>
          <div>
            The second table gives you access to every ballot cast in Leon
            County.
          </div>
          <div>You can filter the data several ways:</div>
          <div>
            <strong>Oval Confidence Rank:</strong> Filled in ovals are rated
            from low to high confidence.
          </div>
          <div>Ovals not fully filled have the least confident rating.</div>
          <div>
            Ovals completely filled in are likely to score high and have a low
            chance of a vote count error.
          </div>
          <div>(See the FAQ page for more.)</div>
          <div>
            The <strong>1-20</strong> filter shows you the lowest rated ovals.
          </div>
          <div>
            <strong>Voting Method:</strong> Election Day Vote, Early Voting or
            Vote By Mail.
          </div>
          <div>(The default is all three.)</div>
          <div>
            Choose any <strong>Precinct</strong> using the dropdown menu or the
            map to the lower right.
          </div>
          <div>
            (Some smaller precincts are combined to protect voter privacy. Also,
            this filter is disabled on the 2022 Primary Dashboard to protect
            voter privacy.)
          </div>
          <div>
            <strong>Vote Type:</strong> Both types of voting machines count
            every oval whether filled in or not.
          </div>
          <div>
            <strong>Voted For Choice</strong> is checked by default so only the
            ovals that were filled are shown.
          </div>
          <div>
            The table can be sorted by the arrows to the right of that column’s
            heading:
          </div>
          <div>
            <strong>Ballot ID:</strong> The unique number assigned to every
            ballot.
          </div>
          <div>
            <strong>Contest:</strong> the position or ballot initiative being
            decided.
          </div>
          <div>
            <strong>Choice:</strong> the candidate, ballot initiative, or choice
            (like a yes or no) being voted on.
          </div>
          <div>
            <strong>Vote Type:</strong> Whether an oval is filled or not.
          </div>
          <div>
            <strong>Voted For Choice</strong> is checked above so only filled
            ovals are shown.
          </div>
          <div>
            <strong>Ballot Link:</strong> Clicking any one of these shows you
            the front and back of that line’s ballot.
          </div>
          <div>
            <strong>Oval Confidence Rank:</strong> The rating of how well that
            oval was filled in.
          </div>
          <div>
            <strong>Precinct:</strong>
          </div>
          <div>
            <strong>Voting Method:</strong> Remember: when you use any of the
            drop down menus or check any boxes to refine the data, it effects
            both tables.
          </div>
          <div>To return to the defaults, just refresh the page.</div>
          <div>
            If you have any questions, or if there’s anything this didn’t cover,
            please use the “Click here to tell us about your experience” to let
            us know.
          </div>
          <div>Thank you!</div>
        </div>
      </main>
    </>
  );
}
