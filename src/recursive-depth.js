const { NotImplementedError } = require('../extensions/index.js');

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
class DepthCalculator {

  calculateDepth(arr) {
    let max = 0
     let count = 1
     function deepCount(a) {
       for (const el of a) {
         if (Array.isArray(el)) {
           count ++; 
           deepCount(el)
         }
       }     
       max = Math.max(max, count)
     }
     for (let element of arr) {
       if (Array.isArray(element)) {
         count = 2
         deepCount(element)
       }
     }
         return max
       }
}

module.exports = {
  DepthCalculator
};
