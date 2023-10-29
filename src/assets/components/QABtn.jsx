export default function QBlock(props) {
    const { answerValue, handleClick } = props;

    // classes for buttons
    // normal / initial - doesn't need special class
    // selected
    //correct
    //incorrect
    //null

    return (
        <button onClick={handleClick}>{answerValue}</button>
    );
}