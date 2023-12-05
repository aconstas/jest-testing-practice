export default function caesarCipher(string, shift) {
    if (typeof(string) !== 'string') return 'not a string';
    const shiftAmount = shift % 26;
    return string.split('').map(char => shiftChar(char, shiftAmount)).join('');
}

function shiftChar(char, shift) {
    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
        // Uppercase Letters
        return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
        return 'not a string'
    }
}