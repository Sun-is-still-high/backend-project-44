// @ts-check

import { runGame } from '../index.js'
import { getRandomInt } from '../utils.js'

const GAME_INSTRUCTION = 'Answer "yes" if the number is even, otherwise answer "no".'

/**
 * @param {number} num integer to check
 * @returns boolean
 */
function isEven(num) {
  return num % 2 === 0
}

/**
 * @returns {{question: string, correctAnswer: string}}
 */
function generateRound() {
  const question = getRandomInt(100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return { question: String(question), correctAnswer }
}

export function main() {
  runGame(GAME_INSTRUCTION, generateRound)
}
