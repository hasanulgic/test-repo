import { ResponsiveContainer, PieChart, Pie, Label, Text } from "recharts";
const data = [
  { name: "Group A", value: 196 },
  { name: "Group B", value: 250 },
];
const COLORS = ["#0088FE", "#EAC208"];
const renderCenterText = (props) => {
  const { cx, cy, outerRadius, value } = props;
  console.log(cy)
  const fontSize = Math.min(outerRadius * 0.3, 30); // Adjust font size as needed
  const centerText = `${value}`;

  return (
    <>
      <Text
        x={cx}
        y={cy - 8}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Arial"
        fontSize={fontSize}
        fill="#333"
      >
        Applied
      </Text>
      <Text
        x={cx}
        y={cy + 15}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Arial"
        fontSize={fontSize}
        fill="#333"
      >
        196/250
      </Text>
    </>
  );
};

function Rechart() {
  return (
    <div className="h-[120px] w-[120px] md:h-[160px] md:w-[162px] lg:h-[256px] lg:w-[262px] xl:h-[160px] xl:w-[160px] bg-green-100">
      <ResponsiveContainer width="100%" height="100%" style={{
        className: "hidden:recharts-pie-label-line"
      }}>
        <PieChart>
          <Pie
            innerRadius="65%"
            dataKey="value"
            labelLine="false"
            pi
            data={data}
            fill="black"
            cx="50%"
            cy="50%"
            paddingAngle={8}
            cornerRadius={10}
            label={renderCenterText}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Rechart;
