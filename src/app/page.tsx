import BackgroundPattern from "./_components/BackgroundPattern";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundPattern />
      <div className="w-full h-screen flex justify-center items-center">
        HOME
      </div>
    </main>
  );
}
