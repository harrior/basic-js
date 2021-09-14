import {NotImplementedError} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    if (!str)
        return ''

    let count = 1;
    let encodesStr = '';

    for (let i = 0; i < str.length - 1; i++)
        if (str[i] !== str[i + 1]) {
            encodesStr += count > 1 ? `${count}${str[i]}` : str[i]
            count = 1
        } else
            count += 1
    encodesStr += count > 1 ? `${count}${str[str.length - 1]}` : str[str.length - 1]

    return encodesStr;
}
