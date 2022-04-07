
const { performance } = require('perf_hooks');

const arr = [...Array(10000).keys()]


const forof = () => {
    for (const i of arr) {
        console.log(i)
    }
}

const fori = () => {
    for (let i = 0; i < arr.length; i++) {
        console.log(i)
    }
}

const forWithLen = () => {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        console.log(i)
    }
}

const main = () => {
    const t0 = performance.now();
    forof()
    const t1 = performance.now();
    console.log("Call to main took " + (t1 - t0) + " milliseconds.");
};

main();


