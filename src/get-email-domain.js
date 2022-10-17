const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  email = email.split('')
  // console.log(email)
  let index = email.lastIndexOf('@')
  let result = email.slice(index + 1, email.length).join('')
  // console.log(index)
  // console.log(result)
  return result
}

module.exports = {
  getEmailDomain
};
