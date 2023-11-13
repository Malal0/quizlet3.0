export default function QBlock(props) {
    const { answerValue, selected, handleClick, quizOver, correctAnswerValue } = props;

    // classes for buttons
    // normal / initial - doesn't need special class
    // selected
    //correct
    //incorrect
    //null

    function handleClasses() {
        const isSelected = answerValue === selected;
        const isIncorrect = correctAnswerValue === answerValue;
        const classes = [];

        if (isSelected)
            classes.push('selected')

        if (!isIncorrect)
            classes.push('incorrect')

        return classes.join(' ');
    }

    return (
        <button className={handleClasses()} onClick={handleClick} disabled={quizOver}>{answerValue}</button>
    );
}