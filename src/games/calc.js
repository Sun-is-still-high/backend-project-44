// @ts-check

import { runGame } from '../index.js'
import { getRandomInt, getRandomElement } from '../utils.js'

const GAME_INSTRUCTION = 'What is the result of the expression?'
const OPERATIONS = ['+', '-', '*']

/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} operator
 * @returns number
 */
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

/**
 * @returns {{question: string, correctAnswer: string}}
 */
function generateRound() {
  const num1 = getRandomInt(100)
  const num2 = getRandomInt(100)
  const operator = getRandomElement(OPERATIONS)

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, num2, operator))

  return { question, correctAnswer }
}

export function main() {
  runGame(GAME_INSTRUCTION, generateRound)
}
