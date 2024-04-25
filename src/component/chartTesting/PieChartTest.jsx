/* eslint-disable react/prop-types */
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [{ value: 85 }, { value: 250 }];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "middle",
  fontSize: 20,
  wordWrap: "break-word"
  
}));

// const text = text += '<span style="font-size: 32px">Upper</span><br>';
// text += '<span style="font-size: 16px">Lower</span>';
// text += "</span>";

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartTest() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel> 
        Applied 25/250     
        </PieCenterLabel>
      
    </PieChart>
  );
}
