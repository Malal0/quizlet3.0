import { useState, useEffect } from 'react';
import QBlock from './QBlock';
import { mutateData } from '../functions'

const apiLink = 'https://opentdb.com/api.php?amount=3&category=19&difficulty=easy&type=multiple';
const hardDataObj = {
    "response_code": 0,
    "results": [
        {
            "category": "Science: Mathematics",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In Roman Numerals, what does XL equate to?",
            "correct_answer": "40",
            "incorrect_answers": [
                "60",
                "15",
                "90"
            ]
        },
        {
            "category": "Science: Mathematics",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What is the symbol for Displacement?",
            "correct_answer": "&Delta;r",
            "incorrect_answers": [
                "dr",
                "Dp",
                "r"
            ]
        },
        {
            "category": "Science: Mathematics",
            "type": "multiple",
            "difficulty": "easy",
            "question": "The metric prefix &quot;atto-&quot; makes a measurement how much smaller than the base unit?",
            "correct_answer": "One Quintillionth",
            "incorrect_answers": [
                "One Billionth",
                "One Quadrillionth",
                "One Septillionth"
            ]
        },
        {
            "category": "Science: Mathematics",
            "type": "multiple",
            "difficulty": "easy",
            "question": "How many sides does a heptagon have?",
            "correct_answer": "7",
            "incorrect_answers": [
                "8",
                "6",
                "5"
            ]
        },
        {
            "category": "Science: Mathematics",
            "type": "multiple",
            "difficulty": "easy",
            "question": "How many sides does a trapezium have?",
            "correct_answer": "4",
            "incorrect_answers": [
                "3",
                "5",
                "6"
            ]
        }
    ]
};

export default function QuizPage() {
    const [quizApiDataObj, setQuizApiDataObj] = useState(() => mutateData(hardDataObj));
    const [quizApiDataArray, setQuizApiDataArray] = useState(() => quizApiDataObj.results);
    const [isQuizOver, setIsQuizOver] = useState(() => false);
    const questionsElements = quizApiDataArray.map(obj => <QBlock key={obj.id} {...obj} handleClick={handleAnswerClick} quizOver={isQuizOver} />);

    useEffect(() => {
        // runs on first render
        fetch(apiLink)
            .then(res => {
                // console.log(res);
                return res.json();
            })
            .then(data => {
                // console.log(data);
                const newData = mutateData(data);
                setQuizApiDataObj(newData);
                setQuizApiDataArray(newData.results);
            })
        // console.log('api called');
    }, []);

    function handleAnswerClick(id, value) {
        // console.log(`id: ${id}, value: ${value}`);
        setQuizApiDataArray(prevArr => prevArr.map(obj => obj.id === id ? { ...obj, selected: value } : obj));
    }

    function handleSubmit() {
        // const everyAnswerCorrect = quizApiDataArray.every(obj => obj.selected === obj.correct_answer);
        const everyQuestionAnswered = quizApiDataArray.every(obj => obj.selected);
        if (everyQuestionAnswered) {
            setIsQuizOver(true);
        }
    }

    function resetGame() {
        console.log('reset game');
        setIsQuizOver(false);
        fetch(apiLink)
            .then(res => res.json())
            .then(data => setQuizApiDataObj(mutateData(data)))
            .then(() => setQuizApiDataArray(quizApiDataObj.results));
    }

    const answersCorrect = quizApiDataArray.filter(obj => obj.correct_answer === obj.selected).length;

    return (
        <div className='quizpage'>
            <h2 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '3em' }}>QuizPage</h2>
            {questionsElements}
            {
                isQuizOver ?
                    <div className='results'>
                        <p>You scored {answersCorrect} / {quizApiDataArray.length} correct answers</p>
                        <button className='main-btn' onClick={resetGame}>Play again</button>
                    </div> :
                    <button className='main-btn' onClick={handleSubmit} disabled={!quizApiDataArray.every(obj => obj.selected)}>Check Answers</button>
            }
        </div>
    );
}