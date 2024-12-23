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
  constructor(reverse = true) {
    this.reverse = reverse;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(text, code) {
    if (arguments.length < 2 || [...arguments].some((a) => typeof a !== 'string')) throw new Error('Incorrect arguments!');
    text = text.toUpperCase();
    const textAr = text.split('');
    const numCode = code.split('').map((a) => this.alphabet.search(a.toUpperCase()));
    let index = 0;
    const cypheredText = textAr.map((a) => {
      let indexA = a === '.' 
        ? -1 
        : typeof a === 'string' && this.alphabet.includes(a.toUpperCase()) 
        ? this.alphabet.indexOf(a.toUpperCase()) 
        : -1;
      if (indexA >= 0) {
        indexA += numCode[index % numCode.length];
        index += 1;
        return this.alphabet[indexA % 26];
      }
      return a;
    })
    if (!this.reverse)
      return cypheredText.reverse().join('');
    return cypheredText.join('');
  }
  decrypt(text, code) {
    if (arguments.length < 2 || [...arguments].some((a) => typeof a !== 'string')) throw new Error('Incorrect arguments!');
    text = text.toUpperCase();
    const textAr = text.split('');
    const numCode = code.split('').map((a) => this.alphabet.search(a.toUpperCase()));
    let index = 0;
    const decriptedText = textAr.map((a) => {
      let indexA = a === '.' 
        ? -1 
        : typeof a === 'string' && this.alphabet.includes(a.toUpperCase()) 
        ? this.alphabet.indexOf(a.toUpperCase()) 
        : -1;
      if (indexA >= 0) {
        indexA -= numCode[index % numCode.length];
        index += 1;
        return this.alphabet[(indexA + 26) % 26];
      }
      return a;
    })
    if (!this.reverse)
      return decriptedText.reverse().join('');
    return decriptedText.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
