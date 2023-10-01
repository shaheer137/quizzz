import './App.css';
import { useState } from 'react'

const questions = [
  {
    question: 'What is the full form of HTML',
    options: ['Hyper text markup language', 'Hyper tags markup language', 'Hyper text makeup language', 'Hyper tags markapp language'],
    correct: 'Hyper text markup language'
  },
  {
    question: 'What is CSS',
    options: ['Control style sheet', 'Coding style sheet', 'Cascading style sheet', 'Control style sheet'],
    correct: 'Cascading style sheet'
  },
  {
    question: 'What is JS',
    options: ['JavaScreen', 'Java', 'JavaScript', 'JavaSlide'],
    correct: 'JavaScript'
  }
]

function App() {
  const [questionNo, setQuestionNo] = useState(0)
  const [selectedOption, setSelectedOption] = useState()
  const [submit, setSubmit] = useState(false)
  const [score, setScore] = useState(0)

  const option = questions[questionNo].options

  function nextQuestion() {
    let next = questionNo
    setQuestionNo(++next)
    setSelectedOption()
  }

  function selectOption(index) {
    setSelectedOption(index)
  }

  function quizSubmit() {
    if (questions[questionNo].options[selectedOption] === questions[questionNo].correct) {
      setScore(++score)
    }
    setSubmit(true)
  }

  return (
    <div className="App">
      <header className="App-header">

        {submit ? (
          <div>
            <h4>Your score: {score}/{questions.length} </h4>
            <p>Percentage: {(score / questions.length) * 100}%</p>
          </div>
        ) : (
          <>
            <h1>Quiz App</h1>
            <h4>Q{questionNo + 1}) {questions[questionNo].question}</h4>

            {option.map(function (item, index) {
              return <div>
                <input onChange={() => selectOption(index)}
                  checked={selectedOption === index}
                  type='radio' name='inp' value='options'
                />
                {item}
              </div>
            })}

            <br />

            {questionNo === questions.length - 1
              ? (
                <button onClick={quizSubmit}> SUBMIT
                </button>
              ) : (
                <button onClick={nextQuestion}> NEXT
                </button>
              )}
          </>
        )}

      </header>
    </div>
  );
}

export default App;
