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
        /*
        if Quiz is over && is selected
            if is correct turn green
            else turn red
        else
            add disabled class
        */
        if (isSelected)
            classes.push('selected')

        if (isIncorrect)
            classes.push('incorrect')

        console.log(classes.join(' '));

        return classes.join(' ');
    }

    return (
        <button className={handleClasses()} onClick={handleClick} disabled={quizOver}>{answerValue}</button>
    );
}