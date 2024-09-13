import React from "react";

export default function Page() {
  return (
    <div className="green-bg w-full h-screen flex flex-col justify-center items-center gap-12">
      <div>
        <h1>Leon County 2022 Election Data</h1>
        <h3>
          Below we include links to the following Leon County primary and
          general election documents that may be helpful to you:
        </h3>
      </div>

      <div className="flex w-full justify-evenly items-center">
        <div>
          General
          <ul>
            <li>
              <a href="/">Postelection audit report</a>
            </li>
            <li>
              <a href="/">Statement of Votes Cast</a>
            </li>
            <li>
              <a href="/">Detailed data on Turnout by Precinct</a>
            </li>
            <li>
              <a href="/">Detailed data on Turnout by Election District</a>
            </li>
            <li>
              <a href="/">Election Guide</a>
            </li>
            <li>
              <a href="/">Precinct List</a>
            </li>
          </ul>
        </div>

        <div>
          Primary
          <ul>
            <li>
              <a href="/">Postelection audit report</a>
            </li>
            <li>
              <a href="/">Statement of Votes Cast</a>
            </li>
            <li>
              <a href="/">Detailed data on Turnout by Precinct</a>
            </li>
            <li>
              <a href="/">Detailed data on Turnout by Election District</a>
            </li>
            <li>
              <a href="/">Election Guide</a>
            </li>
            <li>
              <a href="/">Precinct List</a>
            </li>
          </ul>
        </div>
      </div>
      <h3>
        In addition, Supervisor Mark Earley has additional data and reports
        about the primary and general election.
      </h3>

      <div>
        <h1>Florida Secretary of State 2022 Election Data</h1>

        <div>
          Primary
          <ul>
            <li>
              <a href="/">Leon County General Election Precinct Results</a>
            </li>
            <li>
              <a href="/">Leon County Primary Precinct Results</a>
            </li>
            <li>
              <a href="/">
                2022 General election undervote, overvote and election audit
                report
              </a>
            </li>
          </ul>
        </div>
        <h3>
          The Florida Department of State has additional information on the 2022
          election.
        </h3>
      </div>

      <h1>Learn more about Post-election audits</h1>
      <div className="flex w-full justify-evenly items-center">
        <div>
          For further information on election auditing see the following:
          <ul>
            <li>
              <a href="/">NCSL Audit Overview</a>
            </li>
            <li>
              <a href="/">NCSL Risk Limiting Audits</a>
            </li>
            <li>
              <a href="/">Democracy Fund Part 1</a>
            </li>
            <li>
              <a href="/">Democracy Fund Part 2</a>
            </li>
            <li>
              <a href="/">Democracy Fund Part 3</a>
            </li>
            <li>
              <a href="/">Democracy Fund Part 4</a>
            </li>
            <li>
              <a href="/">Risk Limiting Audit Working Group Paper</a>
            </li>
            <li>
              <a href="/">EAC</a>
            </li>
            <li>
              <a href="/">Verified Voting</a>
            </li>
            <li>
              <a href="/">Bipartisan Policy Center</a>
            </li>
            <li>
              <a href="/">National Association of Secretary of States</a>
            </li>
            <li>
              <a href="/">
                The Georgia Risk-Limiting Audit/Hand Tally: A Carter Center
                Observation Report
              </a>
            </li>
          </ul>
        </div>

        <div>
          View other ballot image and audit dashboards:
          <ul>
            <li>
              <a href="/">Maryland Public Ballot Portal</a>
            </li>
            <li>
              <a href="/">County of Dane, Wisconsin</a>
            </li>
            <li>
              <a href="/">Pueblo County, Colorado</a>
            </li>
            <li>
              <a href="/">El Paso County, Colorado</a>
            </li>
            <li>
              <a href="/">Mesa County, Colorado</a>
            </li>
            <li>
              <a href="/">Eagle County, Colorado</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
