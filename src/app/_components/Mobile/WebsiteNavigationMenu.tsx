"use client";

import Image from "next/image";
import Link from "next/link";
import LRC_H_LOGO from "@/../public/lrc-horizontal-logo.png";
import { useState } from "react";

export default function WebsiteNavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "flex justify-center items-center w-full font-bold text-gray-800 bg-gray-100 p-2 hover:bg-gray-200 hover:text-green-800";
  const hamburgerIcon = (
    <svg
      width="30"
      height="30"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
  const closeIcon = (
    <svg
      width="30"
      height="30"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
  return (
    <header className="flex flex-col justify-between items-center mobile-navbar">
      <div className="flex justify-evenly items-center w-full mt-8 mx-2">
        <Link href="/" className="flex justify-center items-center mx-6">
          <Image
            className=""
            src={LRC_H_LOGO}
            alt="LeRoy Collins Institute Logo"
            width={200}
            height={150}
          />
        </Link>
        <button
          className="w-8 h-8 border-2 border-gray-800 p-2 rounded-md mx-6 flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? closeIcon : hamburgerIcon}
        </button>
      </div>

      {!isOpen ? (
        <div className="m-3"></div>
      ) : (
        <nav className="flex flex-col justify-center items-center w-full mt-4 mb-2 border-y-2 border-y-gray-200">
          <Link href="/" className={`${linkStyle}`}>
            Home
          </Link>
          <Link href="/dashboard/how-to-use" className={`${linkStyle} `}>
            Dashboards
          </Link>
          <Link
            href="/postelection-audits-and-faqs"
            className={`${linkStyle} `}
          >
            Postelection Audits & FAQs
          </Link>
          <Link href="/ballots" className={`${linkStyle}`}>
            Interesting Ballots
          </Link>
          <Link href="/meet-the-team" className={`${linkStyle} `}>
            Meet The Team
          </Link>
        </nav>
      )}
    </header>
  );
}
