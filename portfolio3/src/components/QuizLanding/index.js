import './index.css'

const QuizLanding = (props) => {
    return (
        <section className="landing-container">
            <h1 className="title mb-4">Quizinator</h1>
            <h4 className="instructions">Select a quiz category to begin!</h4>
            <button className="action-button" onClick={props.toggleLanding}>Mythology</button>
        </section>
    )
}

export default QuizLanding;