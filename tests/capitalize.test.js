import capitalize from "../src/capitalize.js";

test('first letter is capitalized', () => {
    const result = capitalize('artificial');
    expect(result).toEqual('Artificial');
});