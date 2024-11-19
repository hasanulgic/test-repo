import { useEffect, useState } from "react";
import Select from "react-dropdown-select";

const inputStyles = {
  width: "100%", // Equivalent to w-full
  borderRadius: "0.375rem", // Equivalent to rounded-md
  border: "1px solid #e0e0e0", // Equivalent to border-[#e0e0e0]
  backgroundColor: "#ffffff", // Equivalent to bg-white
  padding: "0.75rem 1.5rem", // Equivalent to py-3 px-6
  fontSize: "1rem", // Equivalent to text-base
  fontWeight: 500, // Equivalent to font-medium
  color: "#6B7280", // Equivalent to text-[#6B7280]
  outline: "none",
};

const options = [
  {
    id: 1,
    name: "Leanne Graham",
  },
  {
    id: 2,
    name: "Ervin Howell",
  },
  {
    id: 3,
    name: "Ervin Powell",
  },
  {
    id: 4,
    name: "Ervin Jowell",
  },
];

const allCategory = []

export default function DropDownSelect() {
  const [selected, setSelected] = useState([]);
//   console.log(selected);

//   useEffect(() => {
//     if (allCategory) {
//       const options = [];
//       for (let i of allCategory) {
//         options.push({ label: i.catagoryName, value: i._id });
//       }
//       setMultiSelectOption(options);
//     }
//   }, [allCategory]);

// if (selectedValues.length) {
//   newData.jobCatagory = selectedValues[0].value;
// }

  return (
    <div className="max-w-xl mx-auto mt-12">
      <Select
        multi
        className="mb-2"
        options={options}
        labelField="name"
        valueField="id"
        onChange={(values) => setSelected(values)}
        style={inputStyles}
      />
    </div>
  );
}
