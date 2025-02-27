import {NotImplementedError} from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
    //throw new NotImplementedError('Not implemented');
    let i = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1)
            continue

        let min = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] === -1)
                continue
            if (arr[min] > arr[j])
                min = j
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr

}
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))