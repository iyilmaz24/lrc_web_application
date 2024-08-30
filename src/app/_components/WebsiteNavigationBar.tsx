import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";

// https://www.radix-ui.com/primitives/docs/components/navigation-menu

export default function WebsiteNavigationBar() {
  return (
    <header className="">
      <div>
        <Link className="" href={"/"}>
          LEROY COLLINS INSTITUTE
        </Link>
      </div>

      <Link className="" href={"/"}>
        HOME
      </Link>
      <Link className="" href={"/"}>
        POSTELECTION AUDITS & FAQS
      </Link>
      <Link className="" href={"/"}>
        DASHBOARD
      </Link>
      <Link className="" href={"/"}>
        INTERESTING BALLOTS
      </Link>
      <Link className="" href={"/"}>
        RESOURCES
      </Link>
      <Link className="" href={"/meet-the-team"}>
        TEAM
      </Link>
    </header>
  );
}
