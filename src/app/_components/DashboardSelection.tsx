"use client";

import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./CSS/DashboardSelection.css";
import { useState } from "react";

const dashOptions = {
  "pe-2022": "example-path1",
  "ge-2022": "example-path2",
};

const DashboardSelection = () => {
  const [dashboard, setDashboard] = useState<string>("how-to-use");
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-6 m-6 w-full">
        <Select.Root
          onValueChange={(value) => {
            if (value in dashOptions) {
              setDashboard(dashOptions[value as keyof typeof dashOptions]);
            }
          }}
        >
          <Select.Trigger className="SelectTrigger" aria-label="Dashboard">
            <Select.Value placeholder="Select a dashboard type" />
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
                  <SelectItem value="pe-2022">2022 Dashboard</SelectItem>

                  <Select.Separator className="SelectSeparator" />

                  <Select.Label className="SelectLabel">
                    General Election
                  </Select.Label>
                  <SelectItem value="ge-2022">2022 Dashboard</SelectItem>
                </Select.Group>
              </Select.Viewport>
              <Select.ScrollDownButton className="SelectScrollButton">
                <ChevronDownIcon />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        <button
          onClick={() => window.open(`dashboard/${dashboard}`)}
          className="green-btn p-2 w-48 text-center"
        >
          View Dashboard
        </button>
      </div>
    </>
  );
};

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

export default DashboardSelection;
