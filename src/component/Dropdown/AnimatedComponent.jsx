import { useState } from "react";
export default function AnimatedComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="border border-gray-300 rounded-md shadow-sm">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
        >
          <span>Accordion Header</span>
          <svg
            className={`h-5 w-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="p-4">
            <p className="text-gray-700">
              This is the accordion content. It can hold text, images, or any
              other type of content you want to include.
            </p>
            <p className="text-gray-700 mt-2">
              The height of this section will smoothly transition as the
              accordion opens and closes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


// export default function AnimatedComponent() {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   return (
//     <div className="relative inline-block text-left ms-44">
//       <button
//         onClick={() => setIsDropdownVisible(!isDropdownVisible)}
//         className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
//       >
//         Options
//         <svg
//           className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-300 ${
//             isDropdownVisible ? "rotate-180" : "rotate-0"
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M19 9l-7 7-7-7"
//           />
//         </svg>
//       </button>

//       <div
//         className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 transform ${
//           isDropdownVisible
//             ? "scale-100 opacity-100"
//             : "scale-95 opacity-0 pointer-events-none"
//         }`}
//         style={{ transformOrigin: "top right" }}
//       >
//         <div className="py-1">
//           <a
//             href="#"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             Account settings
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             Support
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//           >
//             License
//           </a>
//           <form method="POST" action="#">
//             <button
//               type="submit"
//               className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//             >
//               Sign out
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default function AnimatedComponent() {
//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <button
//         onClick={() => setIsVisible(!isVisible)}
//         className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Toggle Visibility
//       </button>

//       {/* <div
//         className={`transform transition-opacity duration-500 ${
//           isVisible ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div className="p-4 bg-white shadow-md rounded">
//           This is a conditionally rendered component.
//         </div>
//       </div> */}
//       <div
//         className={`transform transition-all duration-500 ${
//           isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
//         }`}
//       >
//         <div className="p-4 bg-white shadow-md rounded">
//           This is a conditionally rendered component with a scale effect.
//         </div>
//       </div>
//     </div>
//   );
// }
