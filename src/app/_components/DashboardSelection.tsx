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
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const dashOptions = {
  "pe-2022": "primary-2022",
  "ge-2022": "general-2022",
};

const DashboardSelection = ({
  greenBackground,
}: {
  greenBackground?: boolean;
}) => {
  // const [dashboard, setDashboard] = useState<string>("how-to-use");
  const router = useRouter();

  return (
    <>
      <div
        className={`flex justify-center items-center gap-6 w-full ${
          greenBackground ? "green-bg" : ""
        }`}
      >
        <Select.Root
          onValueChange={(value) => {
            if (value in dashOptions) {
              // setDashboard(dashOptions[value as keyof typeof dashOptions]);
              router.push(
                `/dashboard/${dashOptions[value as keyof typeof dashOptions]}`
              );
            }
          }}
        >
          <Select.Trigger
            className="SelectTrigger"
            aria-label="Dashboard"
            onClick={(e) => e.stopPropagation()}
          >
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
                    Leon County Primary Election
                  </Select.Label>
                  <SelectItem value="pe-2022">2022 Primary</SelectItem>

                  <Select.Separator className="SelectSeparator" />

                  <Select.Label className="SelectLabel">
                    Leon County General Election
                  </Select.Label>
                  <SelectItem value="ge-2022">2022 General</SelectItem>
                </Select.Group>
              </Select.Viewport>
              <Select.ScrollDownButton className="SelectScrollButton">
                <ChevronDownIcon />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
        {/* 
        <Link
          className={` p-3 w-24 text-center ${
            greenBackground ? "white-btn" : "green-btn"
          }`}
          href={`/dashboard/${dashboard}`}
        >
          View
        </Link> */}
      </div>
      {/* <span className="m-1 text-xs font-bold w-full">
        Select dashboard and click view*
      </span> */}
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
