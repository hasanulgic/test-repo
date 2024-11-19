import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function MuiDropDown() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{
              width: 300,
              color: "#000000",
              "& .MuiSelect-icon": {
                fontSize: "40px",
              },
              "& .MuiSelect-outlined": {
                color: "#000000",
              },
              "& .MuiNativeSelect-root": {
                color: "#000000",
                borderRadius: "15px",
              },
              "& .MuiSelect-root": {
                // color: "cyan",
                borderRadius: "10px",
              },
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default MuiDropDown;
