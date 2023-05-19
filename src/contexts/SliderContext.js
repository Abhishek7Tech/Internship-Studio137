import { createContext, useReducer, useState } from "react";
import questions from "../questions";

export const SliderContext = createContext({
  questions: [],
  question: 0,
  setQuestion: () => {},
  slider: false,
  setSlider: () => {},
});

const initialState = {
  slider: false,
  question: 0,
};

function sliderReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_SLIDER": {
      return {
        slider: true,
        question: state.question,
      };
    }

    case "SET_QUESTION_NEXT": {
      return {
        slider: true,
        question: state.question + 1,
      };
    }

    case "SET_QUESTION_PREVIOUS": {
      return {
        slider: true,
        question: state.question - 1,
      };
    }
    default:
      throw Error("UNKNOWN ACTION", action.type);
  }
}

export const SliderProvider = ({ children }) => {
  // const [slider, setSlider] = useState(false);
  // const [question, setQuestion] = useState(0);

  const [{ slider, question }, dispatch] = useReducer(
    sliderReducer,
    initialState
  );

  const sliderHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_SLIDER" });
    // setSlider(!slider);
  };
  function nextBtnHandler(e) {
    console.log("Clicked");
    e.preventDefault();
    if (question !== 2 ) {
      // setSlider(!slider);
      dispatch({ type: "SET_QUESTION_NEXT" });
      // setQuestion(question + 1);
    }
  }

  function previousButtonHandler(e) {
    e.preventDefault();

    if (question !== 0) {
      dispatch({ type: "SET_QUESTION_PREVIOUS" });
      // setQuestion(question - 1);
    }
  }
  let questionsArray = questions;

  const value = {
    slider,
    sliderHandler,
    questionsArray,
    question,
    nextBtnHandler,
    previousButtonHandler,
  };
  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
};
