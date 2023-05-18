import SliderBar from "../slider/Slider";
import "./Card.css";
import * as React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { SliderContext } from "../../contexts/SliderContext";
import LinearSlider from "../linearslider/LinearSlider";
function Card() {
  const { question, questionsArray, nextBtnHandler, previousButtonHandler } =
    React.useContext(SliderContext);

  return (
    <main id="card">
      <section id="category">
        <ul id="category_list">
          <li id="category_item">
            <LinearSlider progress={question + 1}></LinearSlider>
            <h2 id={question > 3 ?"category_heading": "category_heading_active"}>IDEALISTIC</h2>
          </li>
          <li id="category_item">
            <LinearSlider progress={0}></LinearSlider>
            <h2 id="category_heading">DISILLUSIONED</h2>
          </li>

          <li id="category_item">
            <LinearSlider progress={0}></LinearSlider>
            <h2 id="category_heading">CYNICAL</h2>
          </li>
          <li id="category_item">
            <LinearSlider progress={0}></LinearSlider>

            <h2 id="category_heading">HOPEFUL</h2>
          </li>
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

                  <h2 id="question">{que.qustion}</h2>
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
            &larr; PREV
          </button>
          <button onClick={nextBtnHandler} id="next-btn">
            NEXT &rarr;
          </button>
        </section>
      </div>
    </main>
  );
}

export default Card;
