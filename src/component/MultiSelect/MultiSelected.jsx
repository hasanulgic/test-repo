import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

// const fruits = [
//   { label: "Grapes", value: "grapes" },
//   { label: "Mango", value: "mango" },
//   { label: "Strawberry", value: "strawberry", disabled: true }
// ];

export default function MultiSelected() {
  const [selected, setSelected] = useState([]);

  console.log(selected)

  return (
    <div className="max-w-xl mx-auto mt-20">
      <h1>Select Fruits</h1>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={[
          { label: "Grapes", value: "grapes" },
          { label: "Mango", value: "mango" },
          { label: "Strawberry", value: "strawberry" },
        ]}
        value={[{ label: "Strawberry", value: "strawberry" }]}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
}
