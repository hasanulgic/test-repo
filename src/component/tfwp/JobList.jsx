export default function JobList() {
  return (
    <div className="px-4 py-8 bg-[#FFFFFF] rounded-lg drop-shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-medium text-base">Banquet Server</h1>
          <h2 className="font-medium text-xs text-[#111827] text-opacity-60">
            Grand Cinnamon Convention and Banquet Center
          </h2>
          <p className="font-normal text-xs text-[#111827] text-opacity-20">
            3895,McNicoll Avenue Scarborough, ON M1X 0C1, Canada (Onsite)
          </p>
        </div>
        <div className="bg-[#D5FFCF] px-3.5 py-1.5 rounded-3xl text-sm font-medium text-[#3AC724]">
          <h1>Applied On : Jul 08 2023</h1>
        </div>
        <div>
          <h1 className="text-base font-medium text-primary px-3.5 py-1.5 rounded-3xl bg-[#F9FFCC]">
            View Details
          </h1>
        </div>
      </div>
    </div>
  );
}
