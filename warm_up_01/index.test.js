const main = require('./solution');
 
describe("test warm up", () => {
    test('test even numbers up to 10', () => {
        const result = main(10);
        expect(result).toStrictEqual([2,4,6,8,10]);
    });
})