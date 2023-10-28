export default function QuistionBlock(props) {
    const { category, correct_answer, difficulty, incorrect_answers, question, type } = props;

    return (
        <div>
            <hr />
            <h2>Quistion Block</h2>
            <p>category: {category}</p>
            <p>correct answer: {correct_answer}</p>
            <p>difficulty: {difficulty}</p>
            <p>incorrect answers: {incorrect_answers.join(', ')}</p>
            <p>question: {question}</p>
            <p>type: {type}</p>
            <hr />
        </div>
    );
}