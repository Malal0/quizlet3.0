export default function QBlock(props) {
    const { answer } = props;

    // classes for buttons
    // normal / initial - doesn't need special class
    // selected
    //correct
    //incorrect
    //null

    return (
        <button>{answer}</button>
    );
}