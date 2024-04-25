export default function JobDetails() {
  return (
    <div className="bg-[#FFFFFF] rounded-lg p-10 shadow-sm">
      <div className="bg-[#FFFBEB] pl-5 pt-5 rounded-lg border-[1.66px] border-[#ECECEC]">
        <div>
          <h1 className="text-2xl font-semibold pb-4">
            Job Name: Banquet Server
          </h1>{" "}
          <hr />
          <p className="font-semibold py-3">
            Company Name:{" "}
            <span className="font-normal">
              Grand Cinnamon Convention and Banquet Center
            </span>
          </p>{" "}
          <hr />
          <p className="font-semibold py-3">
            Address:{" "}
            <span className="font-normal">
              3895, McNicoll Avenue Scarborough, ON M1X 0C1, Canada (Onsite)
            </span>
          </p>
          <hr />
        </div>
        <div className="flex gap-x-5 leading-9 divide-x">
          <p className="font-semibold py-3">
            Salary : $ <span className="font-normal">2604</span>{" "}
          </p>
          <p className="font-semibold pl-5 py-3">
            Deadline :{" "}
            <span className="font-normal text-[#ED1517]">Jul 19 2023</span>
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold my-4 leading-8 text-[#767676]">
          Overview
        </h1>
        <div className="flex gap-x-8">
          <div>
            <h2 className="font-bold leading-6 text-[#767676]">Languages</h2>
            <p className="text-[#767676]">English</p>
          </div>
          <div>
            <h2 className="font-bold leading-6 text-[#767676]">Education</h2>
            <p className="text-[#767676]">No degree, certificate or diploma</p>
          </div>
          <div>
            <h2 className="font-bold leading-6 text-[#767676]">Experience</h2>
            <p className="text-[#767676]">1 year to less than 2 years</p>
          </div>
        </div>
        <h1 className="leading-8 font-bold gap-y-5 text-[#767676]">
          Responsibilities
        </h1>
        <div className="pl-5">
          <h1 className="leading-8 font-bold text-[#767676]">Tasks</h1>
          <ul className="list-disc text-[#767676] pl-5">
            <li>Clear and clean tables, trays and chairs</li>
            <li>Serve food and beverages</li>
            <li>Provide customer service</li>
          </ul>
        </div>
        <h1 className="leading-8 font-bold gap-y-5 text-[#767676]">
          Additional information
        </h1>
        <div className="pl-5">
          <h1 className="leading-8 font-bold text-[#767676]">
            Work conditions and physical capabilities
          </h1>
          <ul className="list-disc text-[#767676] pl-5">
            <li>Fast-paced environment</li>
            <li>Standing for extended periods</li>
          </ul>
        </div>
        <div className="pl-5 mt-4">
          <h1 className="leading-8 font-bold text-[#767676]">
            Personal suitability
          </h1>
          <ul className="list-disc text-[#767676] pl-5">
            <li>Flexibility</li>
            <li>Reliability</li>
            <li>Team player</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
