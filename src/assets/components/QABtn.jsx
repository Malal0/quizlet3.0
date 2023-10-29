export default function QBlock(props) {
    const { answerValue, selected, handleClick } = props;

    // classes for buttons
    // normal / initial - doesn't need special class
    // selected
    //correct
    //incorrect
    //null

    if (answerValue === selected) {
        console.log(`this is selected: ${answerValue}`);
    }

    return (
        <button className={answerValue === selected ? "selected" : ""} onClick={handleClick}>{answerValue}</button>
    );
}