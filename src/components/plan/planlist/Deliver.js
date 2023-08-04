import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function Deliver() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const data = [
    {
      question: "How do you drink your coffee?",
      answer1: "Capsule",
      text1: "Compatible with Nespresso systems and similar brewers",
      answer2: "Filter",
      text2: "For pour over or drip methods like Aeropress, Chemex, and V60",
      answer3: "Espresso",
      text3:
        "Dense and finely ground beans for an intense, flavorful experience",
    },
  ];
  return (
    <div>
      <div>
        <div className="render">
          {data &&
            data.map((item, index) => {
              return (
                <div key={index} className="renderSon">
                  <div className="question">
                    <p>{item.question}</p>
                    <button>
                      {questionIndex != index ? (
                        <span onClick={() => setQuestionIndex(index)}>
                          <BiChevronDown />
                        </span>
                      ) : (
                        <span onClick={() => setQuestionIndex(null)}>
                          <BiChevronUp />
                        </span>
                      )}
                    </button>
                  </div>
                  <div
                    className={
                      questionIndex == index ? "answer active" : "answer"
                    }
                  >
                    <div className="row justify-content-between my-3">
                      <div className="col-4">
                        <div className="answer_part part1">
                          <h1>{item.answer1}</h1>
                          <p>{item.text1}</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="answer_part part2">
                          <h1>{item.answer2}</h1>
                          <p>{item.text2}</p>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="answer_part part1">
                          <h1>{item.answer3}</h1>
                          <p>{item.text3}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Deliver;
