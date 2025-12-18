// @ts-check

import { GREETING, greetUser, NAME_QUESTION } from './constants.js'
import { getUserInput } from './user-input.js'
import { randomInt } from 'node:crypto'

const GAME_INSTRUCTION = 'Answer "yes" if the number is even, otherwise answer "no".'
const ROUNDS_COUNT = 3

/**
 * @param {number} max max integer
 * @returns number
 */
function getRandomInt(max) {
  return randomInt(max)
}

/**
 * @param {number} num integer to check
 * @returns boolean
 */
function isEven(num) {
  return num % 2 === 0
}

export function main() {
  console.log(GREETING)

  const name = getUserInput(NAME_QUESTION)
  greetUser(name)

  console.log(GAME_INSTRUCTION)

  for (let round = 0; round < ROUNDS_COUNT; round += 1) {
    const question = getRandomInt(100)
    console.log(`Question: ${question}`)
    const answer = getUserInput('Your answer: ')

    const correctAnswer = isEven(question) ? 'yes' : 'no'

    if (answer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
