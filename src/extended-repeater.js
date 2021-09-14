import {NotImplementedError} from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {*[]} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

export default function repeater(str, options) {
    let defaultOptions = {
        repeatTimes: 1, separator: '+',
        addition: '', additionRepeatTimes: 1, additionSeparator: '|'
    }
    if (!options)
        options = defaultOptions
    else
        for (let option in defaultOptions)
            if (!(option in options))
                options[option] = defaultOptions[option]


    let additionStr = multStr(String(options.addition), options.additionRepeatTimes).join(options.additionSeparator)
    return multStr(String(str) + additionStr, options.repeatTimes).join(options.separator)
}


function multStr(str, repeat) {
    let array = []
    for (let i = 0; i < repeat; i++) {
        array.push(str)
    }
    return array
}