

const main = require('./index');
 
describe("test challenge 1", () => {
    test('extract objetc from url', () => {
        const result = main("www.keycash.com?a=1&b=2,3&c=4,5");
        expect(result).toStrictEqual({ a: 1, b: [ 2, 3 ], c: [ 4, 5 ] });
    });
})
