import caesarCipher from "../src/caesarCipher";

test('caesarCipher shift backwards, all lowercase', () => {
    expect(caesarCipher('tboub', -1)).toEqual('santa');
})

test('caesarCipher shift forwards, all lowercase', () => {
    expect(caesarCipher('ambc', 2)).toEqual('code');
})

test('caesarCipher with one uppercase letter', () => {
    expect(caesarCipher('Ambc', 2)).toEqual('Code');
})

test('caesarCipher shift forwards, all uppercase', () => {
    expect(caesarCipher('AMBC', 2)).toEqual('CODE');
})

test('caesarCipher shift backwards, all uppercase', () => {
    expect(caesarCipher('TBOUB', -1)).toEqual('SANTA');
})

test('3 returns error not a string', () => {
    expect(caesarCipher(3, 2)).toEqual('not a string');
})