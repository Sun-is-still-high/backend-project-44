// @ts-check

import { runGame } from "../index.js";
import { getRandomInt } from "../utils.js";

const GAME_INSTRUCTION = 'Find the greatest common divisor of given numbers.';

/**
 * @param {number} a first number
 * @param {number} b second number
 * @returns number
 */
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

/**
 * @returns {{question: string, correctAnswer: string}}
 */
function generateRound() {
  const num1 = getRandomInt(100) + 1;
  const num2 = getRandomInt(100) + 1;

  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));

  return { question, correctAnswer };
}

export function main() {
  runGame(GAME_INSTRUCTION, generateRound);
}
