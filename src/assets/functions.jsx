function randomizedAnswers(array) {
    let newOrder = [];
    while (newOrder.length < array.length) {
        let randomNum = Math.floor(Math.random() * array.length);
        if (!newOrder.includes(randomNum))
            newOrder.push(randomNum);
    }
    return newOrder.map(i => array[i]);
}

export { randomizedAnswers };