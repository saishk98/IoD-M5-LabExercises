const express = require('express');
const calculatorController = require('../controllers/calculatorController');
const router = express.Router();

/**
 * @swagger
 * /calculator/add:
 *   get:
 *     summary: Add two numbers
 *     parameters:
 *       - in: query
 *         name: num1
 *         required: true
 *         schema:
 *           type: number
 *       - in: query
 *         name: num2
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Successful addition
 *       400:
 *         description: Invalid input
 */
router.get('/add', calculatorController.addNumbers);

/**
 * @swagger
 * /calculator/subtract:
 *   get:
 *     summary: Subtract two numbers
 *     parameters:
 *       - in: query
 *         name: num1
 *         required: true
 *         schema:
 *           type: number
 *       - in: query
 *         name: num2
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Successful subtraction
 *       400:
 *         description: Invalid input
 */
router.get('/subtract', calculatorController.subtractNumbers);

/**
 * @swagger
 * /calculator/multiply:
 *   get:
 *     summary: Multiply two numbers
 *     parameters:
 *       - in: query
 *         name: num1
 *         required: true
 *         schema:
 *           type: number
 *       - in: query
 *         name: num2
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Successful multiplication
 *       400:
 *         description: Invalid input
 */
router.get('/multiply', calculatorController.multiplyNumbers);

/**
 * @swagger
 * /calculator/divide:
 *   get:
 *     summary: Divide two numbers
 *     parameters:
 *       - in: query
 *         name: num1
 *         required: true
 *         schema:
 *           type: number
 *       - in: query
 *         name: num2
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Successful division
 *       400:
 *         description: Invalid input or division by zero
 */
router.get('/divide', calculatorController.divideNumbers);

module.exports = router;
