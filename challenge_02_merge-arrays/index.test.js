

const main = require('./solution');
 
describe("test challenge 2", () => {
    test('myFunction([1, 2, 3], [3, 4, 5])', () => {
        const result = main([1, 2, 3], [3, 4, 5]);
        expect(result).toStrictEqual([ 1, 2, 3, 4, 5 ]);
    });

    test('myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])', () => {
        const result = main([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);
        expect(result).toStrictEqual([ -11, -10, 5, 22, 41,  42, 333]);
    });
})
