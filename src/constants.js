// @ts-check

export const GREETING = "Welcome to the Brain Games!";

export const NAME_QUESTION = "May I have your name? ";

/**
 * @param {string} name name of the user
 */
export function greetUser(name) {
  console.log(`Hello, ${name}!`);
}