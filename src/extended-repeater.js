const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let addition =[]
  if (options.hasOwnProperty('addition')) {
    addition[0] = options.addition
  }
     if (options.hasOwnProperty('additionRepeatTimes')) {
    addition.length = options.additionRepeatTimes;
        addition.fill(options.addition)
  }
     if (!options.hasOwnProperty('additionSeparator')) {
     options.additionSeparator = '|'
     }
       addition = addition.join(`${options.additionSeparator}`)
      if (options.addition == null && options.hasOwnProperty('addition')) {
        addition = 'null!!!null!!!null'
     }
  
  str = (str + addition).split(' ')
  mid = str
  if (options.hasOwnProperty('repeatTimes')) {
     mid = mid.join(' ')
    let result = new Array(options.repeatTimes)
   result.fill(mid)
    str = result
  }
  if (!options.hasOwnProperty('separator')) {
  options.separator = '+'
  }
    str = str.join(`${options.separator}`)
  return str
}

module.exports = {
  repeater
};
