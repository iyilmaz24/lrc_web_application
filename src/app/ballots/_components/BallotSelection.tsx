"use client";

import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./BallotSelection.css";

const ballotOptions = {
  "pe-bws": "primary-ballots-with-signatures-replaced",
  "pe-bwnv": "primary-ballots-with-no-votes",
  "pe-bwsm": "primary-ballots-with-stray-marks",
  "pe-ogb": "governor-overvotes-in-primary",
  "ge-bws": "general-election-ballots-with-signatures-replaced",
  "ge-bwsm": "ge-ballots-with-stray-marks",
};

const BallotSelection = ({
  selectBallot,
}: {
  selectBallot: (ballot: string) => void;
}) => (
  <Select.Root
    onValueChange={(value) => {
      if (value in ballotOptions) {
        selectBallot(ballotOptions[value as keyof typeof ballotOptions]);
      }
    }}
  >
    <Select.Trigger className="SelectTrigger" aria-label="Ballot">
      <Select.Value placeholder="Select a ballot type" />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.ScrollUpButton className="SelectScrollButton">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="SelectViewport">
          <Select.Group>
            <Select.Label className="SelectLabel">
              Primary Election
            </Select.Label>
            <SelectItem value="pe-bws">Ballots with signatures</SelectItem>
            <SelectItem value="pe-bwnv">Ballots with no votes</SelectItem>
            <SelectItem value="pe-bwsm">
              Ballots with stray marks or other interesting features
            </SelectItem>
            <SelectItem value="pe-ogb">Overvoted governor ballots</SelectItem>

            <Select.Separator className="SelectSeparator" />

            <Select.Label className="SelectLabel">
              General Election
            </Select.Label>
            <SelectItem value="ge-bws">Ballots with signatures</SelectItem>
            <SelectItem value="ge-bwsm">
              Ballots with stray marks, names, or other marks
            </SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className="SelectScrollButton">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

const SelectItem = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  value: string;
}) => {
  return (
    <Select.Item className={classnames("SelectItem", className)} {...props}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

export default BallotSelection;
