import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function LinearSlider(props) {
  const ProgresscolorPrimary = {
    backgroundColor: "#e9e9e9",
    height:"6px",
    borderRadius:"3px"
  };

  const ProgressbarColorPrimary = {
    background: "#20adb4",
  };
  return (
    <Box
      sx={{
        width: "100%",
        "& .MuiLinearProgress-colorPrimary": ProgresscolorPrimary,
        "& .MuiLinearProgress-barColorPrimary": ProgressbarColorPrimary,
      }}
    >
      <LinearProgress variant="determinate" value={props.progress * 25} />
    </Box>
  );
}
export default LinearSlider;
