class Logger {
    log(id, operation, result) {
        console.log(`[${id}] Operation: ${operation}, Result: ${result}`);
    }
}

module.exports = new Logger();
