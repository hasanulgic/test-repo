import { useEffect } from "react";
import { useState } from "react";

const options = [
  {
    name: "Newest First",
    value: "newst",
  },
  {
    name: "Highest First",
    value: "highest",
  },
  {
    name: "Lowest First",
    value: "lowest",
  },
];

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState(options[0].value);

  const optionToShow = options
    ?.filter((option) => option.value === sort)
    .map((option) => option.name);

  useEffect(() => {
    document.addEventListener("mouseup", (e) => {
      if (open) {
        const menu = document.getElementById("menu");
        const toggleBTN = document.getElementById("toggleBTN");
        if (!menu?.contains(e.target) && !toggleBTN?.contains(e.target)) {
          setOpen(false);
        }
      }
    });
  }, [open]);

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="flex items-center justify-between my-3">
        <div>
          <button
            id="toggleBTN"
            onClick={() => setOpen(!open)}
            className="relative focus:outline-none font-medium px-4 py-2 rounded-full inline-flex items-center border border-gray-600"
            type="button"
          >
            {optionToShow}

            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
            {open && (
              <div
                id="menu"
                className="top-12 left-4 absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow overflow-hidden"
              >
                <ul className="text-sm text-text-500">
                  {options?.map((option, i) => (
                    <li
                      key={i}
                      onClick={() => setSort(option?.value)}
                      className="px-4 py-1.5 hover:bg-primary text-nowrap"
                    >
                      {option?.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
