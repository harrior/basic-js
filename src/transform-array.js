import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0)
    return []

  let newArray = []
  for (let i=0; i<arr.length; i++){
    switch (arr[i]){
      case '--discard-next': i++; break;
      case '--discard-prev': newArray.length>0 ? newArray[newArray.length-1] === arr[i-1] ? newArray.pop() : '' : '' ; break;
      case '--double-next': typeof arr[i+1] !== 'undefined' ? newArray.push(arr[i+1]) : ''; break;
      case '--double-prev': typeof arr[i-1] !== 'undefined' ? newArray[newArray.length-1] === arr[i-1] ? newArray.push(arr[i-1]) : '' : ''; break;
      default: newArray.push(arr[i]);
    }
  }
  return newArray
}
