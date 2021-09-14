import {NotImplementedError} from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
    calculateDepth(array, depth = 1) {
        let subArrays = array.filter(item => Array.isArray(item));
        if (subArrays.length) {
            let subArraysDepth = subArrays.map(item => this.calculateDepth(item, depth + 1))
            return Math.max(...subArraysDepth)
        }
        return depth

    }
}
