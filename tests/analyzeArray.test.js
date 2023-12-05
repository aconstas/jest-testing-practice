import analyzeArray from "../src/analyzeArray";

test('a single number with length 1, all values positive', () => {
    expect(analyzeArray([1])).toEqual({average: 1, min: 1, max: 1, length: 1})
})

test('a single number with length 6, all values positive', () => {
    expect(analyzeArray([1, 1, 1, 1, 1, 1])).toEqual({average: 1, min: 1, max: 1, length: 6})
})

test('negative numbers, all values negative', () => {
    expect(analyzeArray([-2, -1, -100, -4])).toEqual({average: -26.75, min: -100, max: -1, length: 4})
})

test('average zero, positive and negative numbers', () => {
    expect(analyzeArray([-200, -100, 0, 100, 200])).toEqual({average: 0, min: -200, max: 200, length: 5})
})