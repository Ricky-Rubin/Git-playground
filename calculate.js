function calculate(a, b) {
    let sum = a + b;
    let divide = a / b;
    let cross = a * b;
    let minus = a - b;

    return {
        Sum: sum,
        Division: divide,
        Multiplication: cross,
        Subtraction: minus
    }
}

module.exports = calculate;