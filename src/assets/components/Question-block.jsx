import { randomizedAnswers } from '../functions'

export default function QuistionBlock(props) {
    const { category, correct_answer, difficulty, incorrect_answers, question, type } = props;
    const allAnswers = randomizedAnswers([correct_answer, ...incorrect_answers]);
    const answersElements = allAnswers.map(answer => <button>{answer}</button>);

    return (
        <div>
            <hr />
            <div style={{ backgroundColor: '#000', color: '#FFF' }}>
                <h2>Quistion Block</h2>
                <p>category: {category}</p>
                <p>type: {type}</p>
                <p>difficulty: {difficulty}</p>
                <p>correct answer: {correct_answer}</p>
                <p>incorrect answers: {incorrect_answers.join(', ')}</p>
                <p>question: {question}</p>
                <p>array order: {allAnswers.join(', ')}</p>
            </div>
            <div>
                <h2>{question}</h2>
                <ul>{answersElements}</ul>
            </div>
            <hr />
        </div>
    );
}