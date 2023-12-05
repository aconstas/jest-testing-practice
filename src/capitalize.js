export default function capitalize(string) {
    let capString = string[0].toUpperCase();
    for(let i = 1; i < string.length; i++) {
        capString += string[i];
    }
    return capString;
}