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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  transformMessage(message, key, encrypt) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageCharCode = message.charCodeAt(i);

      if (messageCharCode >= 65 && messageCharCode <= 90) {
        const keyCharCode = key.charCodeAt(keyIndex % key.length);

        let transformedCharCode;

        if (encrypt) {
          transformedCharCode = ((messageCharCode - 65 + keyCharCode - 65) % 26) + 65;
        } else {
          transformedCharCode = ((messageCharCode - 65 - keyCharCode + 65 + 26) % 26) + 65;
        }

        result += String.fromCharCode(transformedCharCode);

        keyIndex++;
      } else {
        result += message[i];
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    return this.transformMessage(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this.transformMessage(encryptedMessage, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
