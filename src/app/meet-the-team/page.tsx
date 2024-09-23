import AvatarCircle from "@/app/_components/Avatar";

export default function Page() {
  const lorem_ipsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  return (
    <>
      <div className="green-bg min-h-40 text-4xl font-extrabold flex justify-center items-center">
        Meet The Team
      </div>
      <div className="flex justify-center items-center h-72 bg-slate-200 gap-12">
        <AvatarCircle />
        <span className="w-[50%]">{lorem_ipsum}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-white gap-12 ">
        <span className="w-[50%]">{lorem_ipsum}</span>
        <AvatarCircle />
      </div>
      <div className="flex justify-center items-center h-72 bg-slate-200 gap-12">
        <AvatarCircle />
        <span className="w-[50%]">{lorem_ipsum}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-white gap-12">
        <AvatarCircle />
        <span className="w-[50%]">{lorem_ipsum}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-slate-200 gap-12">
        <AvatarCircle />
        <span className="w-[50%]">{lorem_ipsum}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-white gap-12">
        <AvatarCircle />
        <span className="w-[50%]">{lorem_ipsum}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-slate-200 gap-12">
        <AvatarCircle />
        <span className="w-[50%]">{lorem_ipsum}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-white gap-12">
        <AvatarCircle />
        <span className="w-[50%]">{lorem_ipsum}</span>
      </div>
      <div className="flex justify-center items-center h-72 bg-slate-200 gap-12">
        <AvatarCircle />
        <span className="w-[50%]">{lorem_ipsum}</span>
      </div>
    </>
  );
}
