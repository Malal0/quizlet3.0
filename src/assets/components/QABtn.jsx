export default function QBlock(props) {
    const { answerValue, selected, handleClick, isGameOver } = props;

    // classes for buttons
    // normal / initial - doesn't need special class
    // selected
    //correct
    //incorrect
    //null

    function handleClasses() {
        /*
        if game is over && is selected
            if is correct turn green
            else turn red
        else
            add disabled class
        */
        return 'class'
    }

    return (
        <button className={answerValue === selected ? "selected" : ""} onClick={handleClick} disabled={!isGameOver}>{answerValue}</button>
    );
}