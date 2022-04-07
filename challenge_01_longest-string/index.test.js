

const main = require('./solution');
 
describe("test challenge 1", () => {
    test('longest string', () => {
        const result = main(["hello", 'world', "keycash", "wow"]);
        expect(result).toStrictEqual("keycash");
    });
})
