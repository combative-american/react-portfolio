import { useState, useEffect } from 'react'

import QuizLanding from '../QuizLanding'
import QuizQuestion from '../QuizQuestion'

export default function App() {
    const [allQuestions, setAllQuestions] = useState([])
    const [showLanding, setShowLanding] = useState(true)
    const [showAnswers, setShowAnswers] = useState(false)
    const [score, setScore] = useState(0)
    const [restartGame, setRestartGame] = useState(false)

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=20")
            .then(res => res.json())
            .then(data => setAllQuestions(data.results.map((question, index) => {
                question.incorrect_answers.push(question.correct_answer)
                return {
                    id: index,
                    question: question.question,
                    answers: question.incorrect_answers.length > 2 ? question.incorrect_answers.sort() : question.incorrect_answers.sort().reverse(),
                    correct_answer: question.correct_answer,
                    selected_answer: ""
                }
            })))
        setRestartGame(false)
    }, [restartGame])

    const questionElements = [allQuestions.map((question, index) => (
        <QuizQuestion
            key={index.toString()}
            id={index}
            question={question.question}
            answers={question.answers}
            correct_answer={question.correct_answer}
            selected_answer={question.selected_answer}
            handleClick={selectAnswer}
            showAnswers={showAnswers}
        />
    ))]

    function toggleLanding() {
        setShowLanding(prevShow => !prevShow)
    }

    function selectAnswer(event) {
        if (showAnswers) { return }

        setAllQuestions(prevQuestions => prevQuestions.map(question => {
            if (event.target.id.toString() === question.id.toString()) {
                event.target.className = "selected"
            }

            return (
                question.id.toString() === event.target.id.toString() ?
                    { ...question, selected_answer: event.target.value } :
                    question
            )
        }))
    }

    function checkAnswers() {
        setShowAnswers(true)

        for (let i = 0; i < allQuestions.length; i++) {
            if (allQuestions[i].selected_answer === allQuestions[i].correct_answer) {
                setScore(prevScore => prevScore + 1)
            }
        }
    }

    function reset() {
        setScore(0)
        setRestartGame(true)
        setShowAnswers(false)
    }

    return (
        <main className="quiz-container p-5">
            {showLanding && <QuizLanding toggleLanding={toggleLanding} />}
            {!showLanding && questionElements}

            <section className="actions">
                {!showLanding && !showAnswers && <button className="action-button" onClick={checkAnswers}>Check answers</button>}

                {!showLanding && showAnswers && <p className="text-light">You scored {score}/{allQuestions.length} correct answers</p>}

                {showAnswers && <button className="action-button" onClick={reset}>Play again</button>}
            </section>
        </main>
    )
}