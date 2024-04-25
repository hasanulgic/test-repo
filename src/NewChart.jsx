import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Applied", value: 150 },
  { name: "Total", value: 250 },
];

const COLORS = ["#FEF9C3", "#EAB308"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  payload,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      className="text-xs md:text-lg lg:text-xl"
      x={x}
      y={y}
      fill="Black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${payload.value}`}
    </text>
  );
};
export default function NewChart() {
  return (
    <div className="h-[74px] w-[74px] md:h-[74px] md:w-[74px] lg:h-[120px] lg:w-[120px] xl:h-[160px] xl:w-[160px] bg-green-50">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius="95%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
