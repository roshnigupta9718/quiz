import React, { useState } from 'react'

export function Quiz() {
  let questions = [
    {
      questionText: 'What comes after 1 ?',
      answers: [
        { answerText: 2, isCorrect: true },
        { answerText: 3, isCorrect: false },
        { answerText: 4, isCorrect: false },
        { answerText: 5, isCorrect: false },
      ],
    },
    {
      questionText: 'What comes after 2 ?',
      answers: [
        { answerText: 1, isCorrect: false },
        { answerText: 3, isCorrect: true },
        { answerText: 44, isCorrect: false },
        { answerText: 55, isCorrect: false },
      ],
    },
    {
      questionText: 'What comes after 3 ?',
      answers: [
        { answerText: 4, isCorrect: true },
        { answerText: 73, isCorrect: false },
        { answerText: 71, isCorrect: false },
        { answerText: 72, isCorrect: false },
      ],
    },
    {
      questionText: 'What comes after 4 ?',
      answers: [
        { answerText: 5, isCorrect: true },
        { answerText: 92, isCorrect: false },
        { answerText: 93, isCorrect: false },
        { answerText: 91, isCorrect: false },
      ],
    },
  ]

  // console.log(questions);

  let [q, setQ] = useState(0)
  let [points, setPoints] = useState(0)
  // console.log('points '+points);
  let [showScore, setShowScore] = useState(false)

  let onHandleClick = (para) => {
    console.log(para)
    if (para == true) setPoints(points + 1)
    // alert(787)
    let nextq = q + 1

    if (nextq < questions.length) {
      setQ(nextq)
    } else {
      // alert('QUIZ OVER')
      setShowScore(true)
    }
  }

  return (
    <>
      <div className='quizapp'>
        <h1>QUIZ APP</h1>
        <hr />

        {showScore ? (
          <div className='score-section text-center '>
            <h1 className='display-1 border-bottom border-success border-4 text-bg-danger p-4'>
              You Score {points} Points
            </h1>
          </div>
        ) : (
          <div className='ans-ques text-bg-dark text-danger p-4'>
            <div className='ques'>
              <h2>
                Q{q + 1}) {questions[q].questionText}
              </h2>
            </div>
            <div className='ans  mt-4 border border-4 p-3'>
              {questions[q].answers.map((ele, index) => {
                return (
                  <button
                    key={index}
                    // onClick={onHandleClick}
                    onClick={() => onHandleClick(ele.isCorrect)}
                    className='btn btn-outline-info  mx-4'
                  >
                    {ele.answerText}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
