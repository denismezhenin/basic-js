const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!"); 
   }
   let result =[]
 for (let i =0; i < arr.length; i++) {
   let j = 0
   if (arr[i] == '--double-next' && i+1 < arr.length) {
     result.push(arr[i+1])
     j++
        continue
   }
    if (arr[i] == '--double-next' && (i+1 == arr.length)) {
        continue
   }
   if (arr[i] == '--discard-prev' && i != 0 && arr[i-2] != '--discard-next') {
 
     result.splice((j-1), 1)
     j--
        continue
   }
   if (arr[i] == '--discard-prev' && arr[i-2] == '--discard-next') {
        continue
   }

   if (arr[i] == '--discard-prev' && i == 0) {
     continue
   }
   
   if (arr[i] == '--discard-next') {
     i++
     continue
   }
   if (arr[i] == '--double-prev' && arr[i-2] != '--discard-next' && i > 0) {
       result.push(arr[i-1])
   j++
        continue
   }
    if (arr[i] == '--double-prev' && arr[i-2] == '--discard-next') {
        continue
   }
   if (arr[i] == '--double-prev' && i == 0) {
    continue
  }
   result.push(arr[i])
   j++
 }
 return result
}

module.exports = {
  transform
};
