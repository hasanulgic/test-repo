/* eslint-disable react/prop-types */

import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { ResponsiveChartContainer } from "@mui/x-charts";

const data = [{ value: 15 }, { value: 20 }];

const size = {
  width: 400,
  height: 400,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
}));

function PieCenterLabel() {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      Center label
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <PieChart
      sx={{
        margin: "40px",
        padding: "40px",
      }}
      series={[{ data, innerRadius: 80 }]}
      {...size}
    >
      <PieCenterLabel />
    </PieChart>
  );
}
