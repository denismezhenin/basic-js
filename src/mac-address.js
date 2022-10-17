const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = true
  let mac = '0123456789ABCDEF-'
n = n.split('')
  for (let i =0; i < n.length; i++) {
    // console.log()
    if(!mac.includes(n[i])) {
      return false
    }
  }
 // n.forEach(el => parseInt(el) ?  null : result = false)
  // console.log(n)
  return true
}
module.exports = {
  isMAC48Address
};
