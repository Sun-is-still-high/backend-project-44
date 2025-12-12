// @ts-check

import { runGame } from "../index.js";
import { getRandomInt } from "../utils.js";

const GAME_INSTRUCTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 * @param {number} num number to check
 * @returns boolean
 */
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

/**
 * @returns {{question: string, correctAnswer: string}}
 */
function generateRound() {
  const question = getRandomInt(100) + 1;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question: String(question), correctAnswer };
}

export function main() {
  runGame(GAME_INSTRUCTION, generateRound);
}
