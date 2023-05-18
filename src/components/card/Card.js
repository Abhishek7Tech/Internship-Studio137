import SliderBar from "../slider/Slider";
import "./Card.css";
import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import { SliderContext } from "../../contexts/SliderContext";
function Card() {
  const { question, questionsArray, nextBtnHandler, previousButtonHandler } =
    React.useContext(SliderContext);
  // function nextBtnHandler(e) {
  //   console.log("Clicked");
  //   e.preventDefault();
  //   if (question !== 2) {
  //     // setSlider(!slider);
  //     setQuestion(question + 1);
  //   }
  // }
  // function previousButtonHandler(e) {
  //   e.preventDefault();

  //   if (question !== 0) {
  //     setQuestion(question - 1);
  //   }
  // }

  // function sliderHandler() {
  //   setSlider(!slider);

  // }
  return (
    <main id="card">
      <section id="category">
        <ul id="category_list">
          <li id="category_item">IDEALISTIC</li>
          <li id="category_item">DISILLUSIONED</li>
          <li id="category_item">CYNICAL</li>
          <li id="category_item">HOPEFUL</li>
        </ul>
      </section>

      <div>
        {questionsArray.map((que) => {
          return (
            que.number === question && (
              <>
                <section id="questions">
                  <h2 id="question_number">
                    {question + 1} / {questionsArray.length}
                  </h2>

                  <h3>{que.qustion}</h3>
                </section>
                <section id="slider" onClick={nextBtnHandler}>
                  <ThemeProvider theme={theme}>
                    <SliderBar number={que.number}></SliderBar>
                  </ThemeProvider>
                </section>
              </>
            )
          );
        })}
        <section id="button_section">
          <button onClick={previousButtonHandler} id="previous-btn">
            &larr; Previous
          </button>
          <button onClick={nextBtnHandler} id="next-btn">
            &rarr; Next
          </button>
        </section>
      </div>
    </main>
  );
}

export default Card;
