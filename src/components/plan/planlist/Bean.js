import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

function Bean() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const data = [
    {
      question: "What type of coffee?",
      answer1: "Single Origin",
      text1: "Distinct, high quality coffee from a specific family-owned farm",
      answer2: "Decaf",
      text2: "Just like regular coffee, except the caffeine has been removed",
      answer3: "Blended",
      text3: "Combination of two or three dark roasted beans of organic coffees",
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
  )
}

export default Bean