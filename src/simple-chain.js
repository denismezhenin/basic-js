const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    // console.log(this.chain.length)
return this.chain.length
  },
  addLink(value) {

    this.chain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (typeof position != 'number'|| position < 1 || position >this.chain.length ) {
      throw Error("You can't remove incorrect link!"); 
    }
this.chain.splice(position - 1, 1)
return this
  },
  reverseChain() {
  this.chain.reverse()
  return this
  },
  finishChain() {
  this.chain = this.chain.join('~~')
    return this.chain
  }
};

module.exports = {
  chainMaker
};
