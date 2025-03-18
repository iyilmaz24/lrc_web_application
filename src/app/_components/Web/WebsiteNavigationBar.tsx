import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./WebsiteNavigationBar.css";
import classNames from "classnames";
import LRC_H_LOGO from "@/../public/lrc-vertical-logo.png";
import FSU_ELC_LOGO from "@/../public/FSU-ELC-Vertical-Logo.png";
import React, { forwardRef, ForwardedRef } from "react";
import Link from "next/link";
import Image from "next/image";

// https://www.radix-ui.com/primitives/docs/components/navigation-menu

export function WebsiteNavigationBar() {
  return (
    <>
      <header className="p-6 flex justify-center desktop-navbar">
        <Link href="/" className="flex justify-center items-center px-8">
          <Image
            className=""
            src={LRC_H_LOGO}
            alt="LeRoy Collins Institute Logo"
            width={105}
            height={100}
          />
          <Image
            className="pt-2"
            src={FSU_ELC_LOGO}
            alt="Florida State University Election Law Center Logo"
            width={115}
            height={100}
          />
        </Link>
        <NavigationMenu.Root className="NavigationMenuRoot ">
          <NavigationMenu.List className="NavigationMenuList divide-x divide-gray-300">
            {/* <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Dashboard <CaretDownIcon className="CaretDown" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">
                <ul className="List">
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
            </NavigationMenu.Item> */}

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="NavigationMenuLink"
                href="/dashboard/how-to-use"
              >
                Dashboards
              </NavigationMenu.Link>
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
