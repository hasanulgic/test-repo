import { useTheme } from "@mui/material/styles";

const ResponsiveBox = () => {
  const theme = useTheme();

  // Function to determine the appropriate background color based on screen size
  const getBackgroundColor = () => {
    const { innerWidth } = window;
    if (innerWidth < theme.breakpoints.values.sm) {
      return "bg-primary";
    } else if (innerWidth < theme.breakpoints.values.md) {
      return "bg-secondary";
    } else {
      return "bg-info";
    }
  };

  // Apply the appropriate background color
  const backgroundColor = getBackgroundColor();

  return (
    <div
      className={`min-h-screen flex justify-center items-center text-white ${backgroundColor}`}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Responsive Box</h1>
        <p>This box changes color based on screen size!</p>
      </div>
    </div>
  );
};

export default ResponsiveBox;
