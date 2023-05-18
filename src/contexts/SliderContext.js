import { createContext, useState } from "react";
import questions from "../questions";
export const SliderContext = createContext({
  questions: [],
  question: 0,
  setQuestion: () => {},
  slider: false,
  setSlider: () => {},
});

export const SliderProvider = ({ children }) => {
  const [slider, setSlider] = useState(false);
  const [question, setQuestion] = useState(0);

  const sliderHandler = (e) => {
    e.preventDefault();
    setSlider(!slider);
  };
  function nextBtnHandler(e) {
    console.log("Clicked");
    e.preventDefault();
    if (question !== 2) {
      // setSlider(!slider);
      setQuestion(question + 1);
    }
  }

  function previousButtonHandler(e) {
    e.preventDefault();

    if (question !== 0) {
      setQuestion(question - 1);
    }
  }
  let questionsArray = questions;

  const value = { slider, sliderHandler, questionsArray, question,nextBtnHandler, previousButtonHandler};
  return (
    <SliderContext.Provider value={value}>{children}</SliderContext.Provider>
  );
};
