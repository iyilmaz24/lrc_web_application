import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./WebsiteNavigationBar.css";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import LRC_H_LOGO from "@/../public/lrc-horizontal-logo.png";
import React, { forwardRef, ForwardedRef } from "react";
import Link from "next/link";
import Image from "next/image";

// https://www.radix-ui.com/primitives/docs/components/navigation-menu

export function WebsiteNavigationBar() {
  return (
    <>
      <header className="p-8">
        <NavigationMenu.Root className="NavigationMenuRoot">
          <Link href="/" className="flex justify-center items-center px-8">
            <Image
              className=""
              src={LRC_H_LOGO}
              alt="LeRoy Collins Institute Logo"
              width={200}
              height={150}
            />
          </Link>
          <NavigationMenu.List className="NavigationMenuList">
            {/* <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="/">
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item> */}

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Dashboard <CaretDownIcon className="CaretDown" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List one">
                  <li style={{ gridRow: "span 3" }}>
                    <NavigationMenu.Link asChild>
                      <a className="Callout" href="/">
                        <svg
                          aria-hidden
                          width="38"
                          height="38"
                          viewBox="0 0 25 25"
                          fill="white"
                        >
                          <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                          <path d="M12 0H4V8H12V0Z"></path>
                          <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                        </svg>
                        <div className="CalloutHeading">Radix Primitives</div>
                        <p className="CalloutText">
                          Unstyled, accessible components for React.
                        </p>
                      </a>
                    </NavigationMenu.Link>
                  </li>
                  <ListItem
                    href="/dashboard/how-to-use"
                    title="How To Use The Dashboards"
                  >
                    Quick tutorial on how to use the dashboards
                  </ListItem>
                  <ListItem
                    href="/dashboard/slug1"
                    title="2022 General Election"
                  >
                    Dashboards for the 2022 General Election
                  </ListItem>
                  <ListItem
                    href="/dashboard/slug2"
                    title="2022 Primary Election"
                  >
                    Dashboards for the 2022 Primary Election
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="NavigationMenuLink"
                href="/postelection-audits-and-faqs"
              >
                Postelection Audits & FAQs
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="NavigationMenuLink"
                href="/ballots"
              >
                Interesting Ballots
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            {/* <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Interesting Ballots
                <CaretDownIcon className="CaretDown" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List two">
                  <ListItem
                    title="Primary Ballots with Signatures"
                    href="/ballots"
                  >
                    {" "}
                  </ListItem>
                  <ListItem
                    title="General Election Ballots with Signatures"
                    href="/ballots"
                  >
                    {" "}
                  </ListItem>
                  <ListItem
                    title="Primary Ballots with No Votes"
                    href="/ballots"
                  >
                    {" "}
                  </ListItem>
                  <ListItem
                    title="Primary Ballots with Stray Marks or Other Interesting Features"
                    href="/ballots"
                  >
                    {" "}
                  </ListItem>
                  <ListItem
                    title="General Election Ballots with Stray Marks, Names or Other Marks"
                    href="/ballots"
                  >
                    {" "}
                  </ListItem>
                  <ListItem
                    title="Primary Overvoted Governor Ballots"
                    href="/ballots"
                  >
                    {" "}
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item> */}

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Resources <CaretDownIcon className="CaretDown" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List two">
                  <ListItem
                    title="Election Audit Technical Report"
                    href="/additional-resources"
                  >
                    {" "}
                  </ListItem>
                  <ListItem
                    title="Leon County 2022 Election Data"
                    href="/additional-resources"
                  >
                    {" "}
                  </ListItem>
                  <ListItem
                    title="Florida Department of State 2022 Election Data"
                    href="/additional-resources"
                  >
                    {" "}
                  </ListItem>
                  <ListItem
                    title="Learn More About Post-Election Audits"
                    href="/additional-resources"
                  >
                    {" "}
                  </ListItem>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="NavigationMenuLink"
                href="/meet-the-team"
              >
                Team
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <NavigationMenu.Viewport />
        </NavigationMenu.Root>
      </header>
    </>
  );
}

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  href: string; // Adding href as it's typically required for an anchor
}

const ListItem = React.forwardRef(
  (
    { className, children, title, ...props }: ListItemProps,
    forwardedRef: React.Ref<HTMLAnchorElement>
  ) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = "ListItem";

export default WebsiteNavigationBar;
