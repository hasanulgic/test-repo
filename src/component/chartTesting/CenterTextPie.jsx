import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Sector,
  Text,
} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCenterText = (props) => {
  const { cx, cy, outerRadius, value } = props;
  const fontSize = Math.min(outerRadius * 0.3, 30); // Adjust font size as needed
  const centerText = `${value}`;

  return (
    <Text
      x={cx}
      y={cy}
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Arial"
      fontSize={fontSize}
      fill="#333"
    >
      {centerText}
    </Text>
  );
};

const CenterTextPie = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCenterText}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default CenterTextPie;
