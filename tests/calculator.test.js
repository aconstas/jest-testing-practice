import Calculator from "../src/calculator";

test('calculate', () => {
    let calculator = new Calculator;

    expect(calculator.add(10, 10)).toEqual(20);
    
    expect(calculator.subtract(33, 10)).toEqual(23);
    
    expect(calculator.divide(777, 7)).toEqual(111);
    
    expect(calculator.multiply(8, 9)).toEqual(72);
})