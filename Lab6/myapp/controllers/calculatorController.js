const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    let sum = number1 + number2;
    res.json({ result: sum });
};

const subtractNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    let difference = number1 - number2;
    res.json({ result: difference });
};

const multiplyNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid numbers provided" });
    }

    let product = number1 * number2;
    res.json({ result: product });
};

const divideNumbers = (req, res) => {
    let number1 = parseFloat(req.query.num1);
    let number2 = parseFloat(req.query.num2);

    if (isNaN(number1) || isNaN(number2) || number2 === 0) {
        return res.status(400).json({ error: "Invalid numbers provided or division by zero" });
    }

    let quotient = number1 / number2;
    res.json({ result: quotient });
};

module.exports = {
    addNumbers,
    subtractNumbers,
    multiplyNumbers,
    divideNumbers
};
