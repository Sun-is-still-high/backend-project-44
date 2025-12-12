// @ts-check

import readlineSync from "readline-sync";

/**
 * @param {string} question for ask
 * @returns string user input
 */
export function getUserInput(question) {
  const name = readlineSync.question(question);

  return name;
}
