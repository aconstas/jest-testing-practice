export default function analyzeArray(array) {
    return {
        average: calculateAverage(array),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
}

function calculateAverage(array) {
    let total = 0;
    for(let num of array) {
        total += num;
    }
    return total / array.length;
}