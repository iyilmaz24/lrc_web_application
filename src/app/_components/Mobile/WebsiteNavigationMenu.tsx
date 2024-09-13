import Image from "next/image";
import Link from "next/link";
import LRC_H_LOGO from "@/../public/lrc-horizontal-logo.png";

export default function WebsiteNavigationMenu() {
  return (
    <header className="flex justify-center items-center mobile-layout p-12">
      <Link href="/" className="flex justify-center items-center">
        <Image
          className=""
          src={LRC_H_LOGO}
          alt="LeRoy Collins Institute Logo"
          width={200}
          height={150}
        />
      </Link>
      <button>|=|</button>
    </header>
  );
}
