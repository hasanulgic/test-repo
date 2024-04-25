import { IoSearchOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export default function Category() {
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold font-roboto">
        All Category
      </h1>
      <div className="flex p-4 gap-3 bg-white mb-3">
        <div className="flex border-2 w-full rounded-lg  items-center gap-2">
          <IoSearchOutline className="ml-6 text-xl text-[#4F5259]" />
          <input
            type="text"
            placeholder="Category Name"
            className="text-base w-full mr-8 outline-none"
          />
        </div>
        <button className="bg-[#7065E0] text-[13px] rounded-lg text-white w-[162px] h-[60px] px-2 py-3 font-semibold">
          Create Category
        </button>
      </div>
      <div className=" p-2">
        <table className="rounded-lg w-full ">
          <tr className="border-2 p-5">
            <th className="w-5/6 text-[#111827] opacity-80 text-left px-3 py-5 font-roboto">
              Category Name
            </th>{" "}
            <th className="w-1/6 text-[#111827] opacity-80 px-3 py-5 border-l-2 border-spacing-3 font-roboto">
              Actions
            </th>{" "}
          </tr>
          <tr className="border-2 p-5 hover:bg-[#CECECE]">
            <td className="font-medium text-[#111827] opacity-60 hover:opacity-100 text-left px-3 py-5 font-roboto">
              Test-1-Update-By-Post-Man
            </td>{" "}
            <td className="flex text-2xl justify-evenly px-3 py-5">
              <div className="hover:text-[#7065E0]">
                <FaEdit />
              </div>
              <div className="hover:text-[#ED1517]">
                <MdDelete />
              </div>
            </td>
          </tr>
        </table>
      </div>
      
    </div>
  );
}
