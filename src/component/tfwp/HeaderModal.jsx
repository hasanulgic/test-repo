import { FiLogOut } from "react-icons/fi";
import Avatar from "../../assets/Ellipse 5.png";
function HeaderModal() {
  return (
    <div className="flex justify-center items-center align-middle h-screen">
      <div
        className="w-[200px] bg-[#FFFFFF] rounded border border-[#EDEDED]"
        // style={{
        //   clipPath:
        //     "polygon(0 10px,calc(50% - 10px) 10px,50% 0,calc(50% + 10px) 10px,100% 10px,100% 100%,0 100%)",
        //   //   paddingTop: "calc(10px + 10px)",
        // }}
      >
        <div className="p-4">
          <h1 className="font-semibold text-xs text-[#4F5259] pb-5">Account</h1>
          <div className="flex mb-2">
            <img src={Avatar} className="h-7 w-7 mr-2" alt="profile" />
            <div>
              <h2 className="font-medium text-xs text-[#4F5259]">Nazmul</h2>
              <p className="text-[10px] text-[#4F5259]">nazmul@gmail.com</p>
            </div>
          </div>
          <hr />
          <div className="flex mt-2 items-center">
            <FiLogOut />
            <h1 className="font-medium text-sm text-[#4F5259] ml-2">Logout</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderModal;