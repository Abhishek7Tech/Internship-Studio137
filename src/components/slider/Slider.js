import Slider from "@mui/material/Slider";
import * as React from "react";
import Box from "@mui/material/Box";
import "./Slider.css";
import { useTheme } from "@mui/material";
import { SliderContext } from "../../contexts/SliderContext";

const marks = [
  {
    value: 0,
    label: "Strongly Disagree",
  },
  {
    value: 25,
    label: "Disagree",
  },
  {
    value: 50,
    label: "Neutral",
  },
  {
    value: 75,
    label: "Agree",
  },
  {
    value: 100,
    label: "Strongly Agree",
  },
];

function SliderBar(props) {
  const { question,slider, sliderHandler, questionsArray } =
    React.useContext(SliderContext);
  const sliderThumb = {
    color: "white",
    border: "5px solid #20adb4",
    zIndex: "2",
    height: "24px",
    width: "24px",
    boxShadow: "0",
  };

  const sliderMark = {
    height: "12px",
    width: "12px",
    borderRadius: "50%",
  };

  const sliderTrack = {
    color: "#20adb4",
    height: "12px",
    borderRadius: "12px",
    zIndex: "1",
  };

  const noSLiderThumb = {
    display: "none",
    visibility: "hidden",
    zIndex: "3",
  };

  const noSliderTrack = {
    color: "#20adb4",
    height: "0px",
    borderRadius: "0px",
    display: "none",
    visibility: "hidden",
  };

  function valuetext(value) {
    return `${value}`;
  }

  function sliderValueHandler(e) {
    e.preventDefault();
    const value = e.target.value;
     questionsArray.map((que) =>
      que.number === props.number ? (que.answer = value) : que
    );
   
    console.log("NEW", questionsArray);
    console.log(value);
  }

  const theme = useTheme();
  return (
    <div onClick={sliderHandler}>
      {slider ? (
        <Box
          sx={{
            width: 500,
            color: theme.palette.primary,
            "& .MuiSlider-thumb": sliderThumb,
            "& .MuiSlider-mark": sliderMark,
            "& .MuiSlider-track": sliderTrack,
          }}
        >
          <Slider
            onChange={sliderValueHandler}
            aria-label="Custom marks"
            defaultValue={questionsArray[question].answer}
            getAriaValueLabel={valuetext}
            step={25}
            valueLabelDisplay="off"
            marks={marks}
          />
        </Box>
      ) : (
        <Box
          sx={{
            width: 500,
            color: theme.palette.primary,
            "& .MuiSlider-thumb": noSLiderThumb,
            "& .MuiSlider-mark": sliderMark,
            "& .MuiSlider-track": noSliderTrack,
            "& .MuiSlider-markActive": {
              backgroundColor: "#757575",
            },
          }}
        >
          <Slider
            onChange={sliderValueHandler}
            aria-label="Custom marks"
            defaultValue={questionsArray[question].answer}
            getAriaValueLabel={valuetext}
            step={25}
            valueLabelDisplay="off"
            marks={marks}
          />
        </Box>
      )}
    </div>
  );
}

export default SliderBar;
