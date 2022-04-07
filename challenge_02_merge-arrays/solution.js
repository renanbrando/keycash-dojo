const main = (a,b) => {
    const jointArray = a.concat(b.filter((item) => !a.includes(item)))
    return jointArray.sort((a, b) => a - b);
}

console.log(main([1, 2, 3], [3, 4, 5]))

module.exports = main

