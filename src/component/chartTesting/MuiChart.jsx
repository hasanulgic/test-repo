import { PieChart } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";
// import { ResponsiveChartContainer } from "@mui/x-charts/ResponsiveChartContainer";

const data = [{ value: 85 }, { value: 250 }];

const size = {
  width: 200,
  height: 200,
};

const ResponsiveChartContainer = styled("div")({
  position: "relative",
  width: size.width,
  height: size.height,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 24,
});

const CenterLabel = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  justifyContent: "center",
  fontWeight: "500",
  // Add more styling as needed
});

export default function MuiChart() {
  return (
    <ResponsiveChartContainer>
      <PieChart
        colors={["#FEF9C3", "#EAB308"]}
        series={[{ data, innerRadius: 60, cornerRadius: 5 }]}
        // {...size}
      />
      <CenterLabel>
        Applied
        <br />
        {data[0].value}/{data[1].value}
      </CenterLabel>
    </ResponsiveChartContainer>
  );
}
