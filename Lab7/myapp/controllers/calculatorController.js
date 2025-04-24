const Calculator = require('../libraries/calculatorLibrary');

const performCalculation = (req, res, operation) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);

        if (isNaN(num1) || isNaN(num2)) {
            return res.status(400).json({ error: "Invalid numbers provided" });
        }

        const calculator = new Calculator();
        const result = calculator[operation](num1, num2);

        res.status(200).json({ id: calculator.id, result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    addNumbers: (req, res) => performCalculation(req, res, 'add'),
    subtractNumbers: (req, res) => performCalculation(req, res, 'subtract'),
    multiplyNumbers: (req, res) => performCalculation(req, res, 'multiply'),
    divideNumbers: (req, res) => performCalculation(req, res, 'divide')
};
