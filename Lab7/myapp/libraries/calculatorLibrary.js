const crypto = require('crypto'); // For generating unique IDs
const logger = require('./loggerLibrary'); // Import logger

class Calculator {
    constructor() {
        this.id = crypto.randomUUID(); // Generate a unique ID
    }

    add(num1, num2) {
        const result = num1 + num2;
        logger.log(this.id, 'Addition', result);
        return result;
    }

    subtract(num1, num2) {
        const result = num1 - num2;
        logger.log(this.id, 'Subtraction', result);
        return result;
    }

    multiply(num1, num2) {
        const result = num1 * num2;
        logger.log(this.id, 'Multiplication', result);
        return result;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            logger.log(this.id, 'Division', 'Error: Division by zero');
            throw new Error('Cannot divide by zero');
        }
        const result = num1 / num2;
        logger.log(this.id, 'Division', result);
        return result;
    }
}

module.exports = Calculator;
