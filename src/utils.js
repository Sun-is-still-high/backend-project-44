import { randomInt } from 'node:crypto'
// @ts-check

/**
 * @param {number} max max integer
 * @returns number
 */
export function getRandomInt(max) {
  return randomInt(max)
}

/**
 * @template T
 * @param {Array<T>} array
 * @returns T
 */
export function getRandomElement(array) {
  const index = getRandomInt(array.length)
  return array[index]
}
