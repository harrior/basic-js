import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */


export default function getCommonCharacterCount( s1, s2 ) {
  let s1Dict = charCounter(s1)
  let s2Dict = charCounter(s2)

  let count = 0
  for (let i in s1Dict)
    if (i in s2Dict)
      count += Math.min(s2Dict[i],s1Dict[i])

  return count
}

function charCounter(str){
  let res = {}
  for (let i of str){
    res[i] = res[i] ? res[i] + 1 : 1
  }
  return res;
}