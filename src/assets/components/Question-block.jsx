import { decode } from 'html-entities';
import { randomizedAnswers } from '../functions'
import '../styles/qblock.css';

export default function QuistionBlock(props) {
    const { category, correct_answer, difficulty, incorrect_answers, question, type } = props;
    const allAnswers = randomizedAnswers([correct_answer, ...incorrect_answers]);
    const answersElements = allAnswers.map(answer => <li><button>{decode(answer)}</button></li>);

    return (
        <div className='q-block-el'>
            {
                false &&
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
            }
            <div className='content'>
                <h2 className='question'>{decode(question)}</h2>
                <ul className='answers-list'>{answersElements}</ul>
            </div>
        </div>
    );
}