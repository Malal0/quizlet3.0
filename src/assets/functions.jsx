import { decode } from 'html-entities';
import { nanoid } from 'nanoid';

function randomizedAnswers(array) {
    let newOrder = [];
    while (newOrder.length < array.length) {
        let randomNum = Math.floor(Math.random() * array.length);
        if (!newOrder.includes(randomNum))
            newOrder.push(randomNum);
    }
    return newOrder.map(i => array[i]);
}

function createNewQuestionBlock(obj) {
    const { question, correct_answer, incorrect_answers } = obj;
    const decodedQ = decode(question);
    const decodedCA = decode(correct_answer);
    const decodedIA = decode(incorrect_answers);

    return {
        ...obj,
        question: decodedQ,
        correct_answer: decodedCA,
        incorrect_answers: decodedIA,
        id: nanoid(),
        all_answers: randomizedAnswers([decodedCA, ...decodedIA]),
        selected: ''
    }
}

function mutateData(obj) {
    const newResObj = obj.results.map(resultObj => createNewQuestionBlock(resultObj));
    return {
        ...obj,
        results: newResObj
    }
}

export { randomizedAnswers, createNewQuestionBlock, mutateData };