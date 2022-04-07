const main = (arr) => {
    let longest = '';
	arr.forEach((item) => {
		if(item.length > longest.length) {
            longest = item;
        }
	});
	return longest;
}

console.log(main(["hello", 'world', "keycash", "wow"]))

module.exports = main

