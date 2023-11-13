import QABtn from './QABtn'
import '../styles/css/qblock.css';

export default function QBlock(props) {
    const { all_answers, category, correct_answer, difficulty, id, incorrect_answers, question, selected, type, handleClick, quizOver } = props;
    const answersElements = all_answers.map(answer => <li>
        <QABtn
            answerValue={answer}
            correctAnswerValue={correct_answer}
            selected={selected}
            handleClick={() => handleClick(id, answer)}
            key={answer}
            quizOver={quizOver}
        />
    </li>);

    return (
        <div className='q-block-el'>
            {
                false &&
                <div style={{ backgroundColor: '#000', color: '#FFF' }}>
                    <h2>Quistion Block</h2>
                    <p>all answers: {all_answers.join(', ')}</p>
                    <p>id: {id}</p>
                    <p>selected: {selected}</p>
                    <p>category: {category}</p>
                    <p>type: {type}</p>
                    <p>difficulty: {difficulty}</p>
                    <p>correct answer: {correct_answer}</p>
                    <p>incorrect answers: {incorrect_answers.join(', ')}</p>
                    <p>question: {question}</p>
                </div>
            }
            <div className='content'>
                <h2 className='question'>{question}</h2>
                <ul className='answers-list'>{answersElements}</ul>
            </div>
        </div>
    );
}