module.exports = (max) => {
    let counter = 1;
    const evenNumbers = [];
    while (counter <= max) {
        if (counter % 2 === 0) {
            evenNumbers.push(counter);
        }
        counter++;
    }
    console.log(evenNumbers);
    return evenNumbers
}