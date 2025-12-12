// @ts-check

import { runGame } from "../index.js";
import { getRandomInt } from "../utils.js";

const GAME_INSTRUCTION = 'What number is missing in the progression?';
const PROGRESSION_MIN_LENGTH = 5;
const PROGRESSION_MAX_LENGTH = 10;

/**
 * @param {number} start starting number
 * @param {number} step step between numbers
 * @param {number} length length of progression
 * @returns {Array<number>}
 */
function generateProgression(start, step, length) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
}

/**
 * @returns {{question: string, correctAnswer: string}}
 */
function generateRound() {
  const start = getRandomInt(100);
  const step = getRandomInt(10) + 1;
  const length = getRandomInt(PROGRESSION_MAX_LENGTH - PROGRESSION_MIN_LENGTH + 1) + PROGRESSION_MIN_LENGTH;

  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomInt(length);
  const correctAnswer = String(progression[hiddenIndex]);

  const progressionWithHidden = [...progression];
  progressionWithHidden[hiddenIndex] = '..';

  const question = progressionWithHidden.join(' ');

  return { question, correctAnswer };
}

export function main() {
  runGame(GAME_INSTRUCTION, generateRound);
}
