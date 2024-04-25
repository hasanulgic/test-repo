import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ages = ["twnety", "twnety one"];

export default function SelectInputFiled() {
  const [age, setAge] = React.useState("");
  // console.log(age)
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth sx={{ m: 1,mx:2, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          // sx={{height: "40px"}}
          size="small"
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          defaultValue="Twenty"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {ages.map((ag, i) => (
            <MenuItem key={i} value={10}>
              {ag}
            </MenuItem>
          ))}
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
