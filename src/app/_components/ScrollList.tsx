import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import "./ScrollList.css";
import Link from "next/link";
import {
  PRIMARY,
  GENERAL,
  OTHER_DASHBOARDS,
  AUDIT_RESOURCES,
  SEC_OF_STATE_2022,
} from "../_components/ScrollLists";

const ScrollAreaDemo = ({ ListType }: { ListType: string }) => {
  function resources(type: string) {
    if (type === "primary") {
      return PRIMARY;
    } else if (type === "other-dashboards") {
      return OTHER_DASHBOARDS;
    } else if (type === "general") {
      return GENERAL;
    } else if (type === "audit-resources") {
      return AUDIT_RESOURCES;
    } else if (type === "sec-of-state-2022") {
      return SEC_OF_STATE_2022;
    } else {
      return [];
    }
  }

  return (
    <ScrollArea.Root className="ScrollAreaRoot">
      <ScrollArea.Viewport className="ScrollAreaViewport">
        <div style={{ padding: "15px 20px" }}>
          <div className="Text">Tags</div>
          {resources(ListType).map((resource) => (
            <div key={resource.key}>
              <Link className="Tag" href={resource.href}>
                {resource.text}
              </Link>
            </div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="horizontal"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
  );
};

export default ScrollAreaDemo;
