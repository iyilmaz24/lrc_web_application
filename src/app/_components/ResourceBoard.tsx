import Link from "next/link";
import {
  PRIMARY,
  GENERAL,
  OTHER_DASHBOARDS,
  AUDIT_RESOURCES,
  SEC_OF_STATE_2022,
} from "../static-text/ScrollLists";

export default function ResourceBoard({
  ListType,
  Title,
}: {
  ListType: string;
  Title: string;
}) {
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
    <>
      <div className="bg-white w-full rounded-md text-slate-700 p-4 overflow-y-scroll max-h-48">
        <div className="font-extrabold">{Title}</div>
        <ol>
          {resources(ListType).map((resource) => (
            <li key={resource.key}>
              <Link href={resource.href}>{resource.text}</Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
