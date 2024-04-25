import MuiChart from "../chartTesting/MuiChart";
import ClientImg from "../../assets/client_Demo_pic.png";

function Profile() {
  return (
    <div>
      <h1 className="text-3xl font-medium mb-4 mt-6 text-center sm:text-left">
        Profile
      </h1>
      <div className="bg-[#FFFFFF] rounded-lg p-8">
        <div className="sm:flex items-center align-middle sm: justify-center">
          <img
            src={ClientImg}
            alt="Client Profile"
            className="mx-auto border border-deem border-opacity-85"
            width={262}
            height={256}
          />
          <div className="sm:flex items-center justify-between w-full sm:ml-8">
            <div>
              <h1 className="font-semibold text-2xl leading-9">
                Nazmul Islam Rabbe
              </h1>
              <table>
                <tbody>
                  <tr>
                    <td className="font-medium leading-9">Mobile Number</td>
                    <td className="font-semibold indent-6">:</td>
                    <td className="text-sm text-deem indent-2">
                      +8801862086965
                    </td>
                  </tr>
                  <tr>
                    <td className="font-medium leading-9">Designation</td>
                    <td className="font-semibold indent-6">:</td>
                    <td className="text-sm text-deem indent-2">Engineer</td>
                  </tr>
                  <tr>
                    <td className="font-medium leading-9">Choosing Country</td>
                    <td className="font-semibold indent-6">:</td>
                    <td className="text-sm text-deem indent-2">Canada</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <MuiChart />
          </div>
        </div>
        <h1 className="text-xl font-semibold my-4">Basic Information</h1>
        <div className="grid  gap-3 sm:gap-5 grid-cols-3">
          <div className="p-1.5 sm:p-4 rounded-md  bg-transparent outline outline-1 outline-deem text-[#8C8C8C] text-sm sm:text-base col-span-2">
            Namzul Islam Rabbe
          </div>
          <div className="p-1 sm:p-4 rounded-md  bg-transparent outline outline-1 outline-deem text-[#8C8C8C] text-sm sm:text-base">
            Engineer
          </div>
          <div className="p-1 sm:p-4 rounded-md  bg-transparent outline outline-1 outline-deem text-[#8C8C8C] text-sm sm:text-base">
            Experience
          </div>
          <div className="p-1 sm:p-4 rounded-md  bg-transparent outline outline-1 outline-deem text-[#8C8C8C] text-sm sm:text-base">
            Last Education
          </div>
          <div className="p-1 sm:p-4 rounded-md  bg-transparent outline outline-1 outline-deem text-[#8C8C8C] text-sm sm:text-base">
            Languages
          </div>
        </div>
        <h1 className="text-xl font-semibold my-4">Experience</h1>
        <div className="text-[#767676] mb-4 text-justify">
          <h2 className="font-bold text-xs sm:text-base">In 2023</h2>
          <p className="text-sm sm:text-base">
            Over the past three years, I have honed my skills and expertise in
            the dynamic field of UI/UX design, contributing to various projects
            across different industries. My journey began with a passion for
            creating intuitive and visually appealing interfaces that enhance
            user experience. In my role, I have collaborated closely with
            cross-functional teams including product managers, developers, and
            stakeholders to translate concepts into user-centric designs.
            <br />
            Through hands-on experience and continuous learning, I have mastered
            industry-standard design tools such as Adobe XD, Sketch, and Figma,
            allowing me to efficiently prototype and iterate designs. I have a
            keen eye for detail, ensuring pixel-perfect designs while
            maintaining consistency across platforms and devices.
          </p>
        </div>
        <div className="text-[#767676] mb-4 text-justify">
          <h2 className="font-bold text-xs sm:text-base">In 2023</h2>
          <p className="text-sm sm:text-base">
            Over the past three years, I have honed my skills and expertise in
            the dynamic field of UI/UX design, contributing to various projects
            across different industries. My journey began with a passion for
            creating intuitive and visually appealing interfaces that enhance
            user experience. In my role, I have collaborated closely with
            cross-functional teams including product managers, developers, and
            stakeholders to translate concepts into user-centric designs.
            <br />
            Through hands-on experience and continuous learning, I have mastered
            industry-standard design tools such as Adobe XD, Sketch, and Figma,
            allowing me to efficiently prototype and iterate designs. I have a
            keen eye for detail, ensuring pixel-perfect designs while
            maintaining consistency across platforms and devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
