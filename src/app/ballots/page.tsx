export default function Page() {
  return (
    <div className="flex p-12 green-bg min-h-screen flex-col items-center justify-between ">
      <div className="w-[65%] h-[80%]">
        <embed
          className="w-full h-screen"
          src="/primary-ballots-with-signatures-replaced.pdf"
          type="application/pdf"
          width="60%"
          height="100%"
          title="Embedded PDF Viewer"
        />
      </div>
    </div>
  );
}
