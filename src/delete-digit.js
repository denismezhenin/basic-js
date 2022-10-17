const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = (n).toString().split('')
  let mid = arr
  let result
  let max = 0
  // console.log(arr)
  for (let i =0; i < arr.length; i++) {
    mid[i] = "";
    mid = +(mid.join(''))
    // console.log(typeof mid)
    max = Math.max(max, mid)
    // console.log(mid)
    // console.log(mid);
    mid = (n).toString().split('')
    // console.log(arr)
  }
  // console.log(max)
return max
}

module.exports = {
  deleteDigit
};
