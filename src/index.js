// @ts-check

import { GREETING, greetUser, NAME_QUESTION } from "./constants.js";
import { getUserInput } from "./user-input.js";

const ROUNDS_COUNT = 3;

/**
 * @param {string} gameInstruction - instructions
 * @param {function} generateRound - function that returns {question: string, correctAnswer: string}
 */
export function runGame(gameInstruction, generateRound) {
  console.log(GREETING);

  const name = getUserInput(NAME_QUESTION);
  greetUser(name);

  console.log(gameInstruction);

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const answer = getUserInput('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
