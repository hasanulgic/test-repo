import { InputAdornment, TextField } from "@mui/material";
import { FaEdit } from "react-icons/fa";

export default function InputField() {
  return (
    <div className="flex justify-center h-screen items-center">
      <div>
        <label
          htmlFor="first_name"
          className=" block mb-2 text-sm font-medium text-[#000F1A]"
        >
          First name
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <FaEdit />
          </span>
          <input
            type="text"
            id="first_name"
            className=" bg-gray-50 border border-[#C8CEDD] text-[#4F4F4F] text-sm rounded-md block w-full p-2.5 px-4"
            placeholder="John"
            required
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-[#C8CEDD] text-[#4F4F4F] text-sm rounded-md block w-full p-2.5 px-4"
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      {/* <div className="relative">
        <input
          type="text"
          placeholder="Write Something"
          className="peer outline-2 p-2 rounded-lg relative border-2 border-t-transparent"
        />
        <level className="absolute -top-3 left-3 peer-focus:after:border-t-2">Job Title</level>
      </div> */}
      {/* <div className="w-72">
        <div className="relative w-full min-w-[200px] h-10">
          <input
            className="peer w-full h-full bg-gray-200 text-blue-gray-700 outline outline-2 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
            placeholder="Write a Job Title"
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
            Job Title
          </label>
        </div>
      </div> */}
      {/* <TextField
        label="Job Title"
        size="medium"
        placeholder="Write a Job Title"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <FaEdit />
            </InputAdornment>
          ),
        }}
      /> */}
      {/* <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-gray-600">
        <input
          type="text"
          className="font-medium text-black peer border-none bg-transparent placeholder focus:border-transparent focus:outline-none focus:ring-0 p-4 mr-4"
          placeholder="Write a Job Title"
        />
        <span className="pointer-events-none absolute start-3.5 top-0 -translate-y-1/2 bg-white px-1 text-base font-bold font-roboto text-[#111827] opacity-80">
          Job Title
        </span>
        <div className="pointer-events-none absolute end-2.5 top-4 p-0.5 text-base text-[#B0B0B0]">
          <FaEdit />
        </div>
      </label> */}

      {/* <div className="bg-white rounded-lg">
        <div className="relative bg-inherit">
          <input
            type="text"
            id="username"
            name="username"
            className="font-medium text-black peer bg-transparent rounded-lg placeholder-transparent border border-gray-200 p-4 focus:border-[#7065E0]"
            placeholder="Type inside me"
          />
          <label
            htmlFor="username"
            className="font-semibold absolute cursor-text left-2 text-base text-gray-500 bg-inherit mx-1 px-1 my-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-[#7065E0] peer-focus:text-sm transition-all"
          >
            Job Title
          </label>
          <div className="pointer-events-none absolute end-2.5 top-4 p-0.5 text-base text-[#B0B0B0]">
            <FaEdit />
          </div>
        </div>
      </div> */}

      {/* <div className="relative h-13">
        <input
          className="relative w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
          placeholder=" "
        />
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
          Input Large
        </label>
        <div className="pointer-events-none absolute end-2.5 top-4 p-0.5 text-base text-[#B0B0B0]">
          <FaEdit />
        </div>
      </div> */}

      {/* <div className="w-72">
        <div className="relative w-full min-w-[200px] h-14">
          <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
            <FaEdit />
          </div>
          <input
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900"
            placeholder=" "
          />
          <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
            Input With Icon
          </label>
        </div>
      </div> */}
    </div>
  );
}
