import './index.css'

const QuizQuestion = (props) => {
    let answerElements = []

    var parser = new DOMParser()

    for (let i = 0; i < props.answers.length; i++) {
        var style = "answers-default"

        if (props.selected_answer === props.answers[i]) { style = "answers-default answers-selected" }

        if (props.showAnswers && props.answers[i] === props.correct_answer) { style = "answers-default answers-correct" }

        if (props.selected_answer !== props.correct_answer && props.answers[i] === props.selected_answer && props.showAnswers) { style = "answers-default answers-wrong" }

        if (props.selected_answer === "" && props.correct_answer === props.answers[i] && props.showAnswers) {
            style = "answers-default answers-wrong"
        }

        var parsedAnswer = parser.parseFromString(props.answers[i], 'text/html').firstChild.textContent;

        answerElements.push(
            <button
                key={answerElements.length}
                className={style}
                onClick={props.handleClick}
                value={props.answers[i]}
                id={props.id}
            >
                {parsedAnswer}
            </button>
        )

    }

    var parsedQuestion = parser.parseFromString(props.question, 'text/html').firstChild.textContent;

    return (
        <div>
            <h3 className="question">{parsedQuestion}</h3>
            <div className="answers">
                {answerElements}
            </div>
            <hr />
        </div>
    )
}

export default QuizQuestion;