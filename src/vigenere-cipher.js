const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type
  }

  encrypt(text, key) {
    if (!(text && key)) {
      throw new Error('Incorrect arguments!');
    }
    key = key.toUpperCase()
   text = text.toUpperCase()
  let keyExtend = Math.ceil(text.length /  key.length)
  key = key.repeat(keyExtend);
  let firstCode = 'A'.charCodeAt(0);
  let alpabetcount = 26;
 let result = []
    let j = 0
 for (let i = 0; i < text.length; i++) {
   if ( text[i] < "A" || text[i] > "Z") {
     result.push(text[i])
   } else {
     let letterIndex = text.charCodeAt(i) - firstCode;
     let shift = key.charCodeAt(j) - firstCode;
     result.push(String.fromCharCode(firstCode + (letterIndex + shift) % alpabetcount))
     j++
   }
 }
 return this.type ? result.join('') : result.reverse().join('');
  }
  decrypt(text, key) {
    if (!(text && key)) {
      throw new Error('Incorrect arguments!');
    }
    key = key.toUpperCase()
   text = text.toUpperCase()
  let keyExtend = Math.ceil(text.length /  key.length)
  key = key.repeat(keyExtend);
  let firstCode = 'A'.charCodeAt(0);
  let alpabetcount = 26;
 let result = []
    let j = 0
 for (let i = 0; i < text.length; i++) {
   if ( text[i] < "A" || text[i] > "Z") {
     result.push(text[i])
   } else {
     let letterIndex = text.charCodeAt(i) - firstCode;
     let shift = key.charCodeAt(j) - firstCode;
     result.push(String.fromCharCode(firstCode + (letterIndex - shift + alpabetcount) % alpabetcount))
     j++
   }
 }
 return this.type ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
