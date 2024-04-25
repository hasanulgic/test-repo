import { FiLogOut } from "react-icons/fi";
function NewHeaderModal() {
  return (
    <div className="flex justify-center items-center align-middle h-screen">
      <div className="w-[200px] bg-[#FFFFFF] rounded border border-[#EDEDED]">
        <div className="p-4">
          <h1 className="font-semibold text-[#4F5259] pb-5">Account</h1>
          <hr />
          <p className="text-xs text-[#4F5259] py-3 text-opacity-40">
            nazmul@gmail.com
          </p>
          <hr />
          <p className="text-xs text-[#4F5259] py-3 text-opacity-40">
            Password
          </p>
          <hr />
          <div className="flex mt-2 items-center ">
            <FiLogOut className="opacity-40" />
            <h1 className="font-normal text-sm text-[#4F5259] ml-2 text-opacity-40">
              Logout
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHeaderModal;
