import { useState, useEffect } from 'react';
import QuestionBlock from './Question-block';

const apiLink = 'https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple';
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
    const [quizApiDataObj, setQuizApiDataObj] = useState(() => hardDataObj);
    const [quizApiDataArray, setQuizApiDataArray] = useState(() => quizApiDataObj.results);

    useEffect(() => {
        // runs on first render
        fetch(apiLink)
            .then(res => res.json())
            .then(data => setQuizApiDataObj(data));
    }, []);

    const questionsElements = quizApiDataArray.map(obj => <QuestionBlock {...obj} />);
    console.log('rendered');

    return (
        <div>
            <h2>QuizPage</h2>
            {questionsElements}
            <button>Check Answers</button>
        </div>
    );
}