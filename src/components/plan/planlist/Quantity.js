import React, { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

function Quantity() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const data = [
    {
      question: "How much would you like?",
      answer1: "250g",
      text1: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      answer2: "500g",
      text2: "Perfect option for a couple. Yields about 40 delectable cups.",
      answer3: "1000g",
      text3:
        "Perfect for offices and events. Yields about 90 delightful cups.",
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

export default Quantity