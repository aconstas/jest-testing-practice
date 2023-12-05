import reverseString from "../src/reverseString";

test('reversed string', () => {
    const result = reverseString('expelliarmus');
    expect(result).toEqual('sumraillepxe');
})