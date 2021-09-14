import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  let numberArr = String(n).split('').map(x=>Number(x))
  let max = 0
  for (let i = 0; i < numberArr.length; i++){
    let variantNum = Number(numberArr.filter((val, ind) => ind !== i).join(''));
    if (variantNum > max)
      max = variantNum
  }
  return max;
}
