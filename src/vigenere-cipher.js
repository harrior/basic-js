import {NotImplementedError} from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    }

    encrypt(message, key) {
        if (!message || !key)
            throw new Error("Incorrect arguments!");

        let M = message.toUpperCase();
        let K = this.generateKey(M, key);
        let C = [];
        let char;
        for (let i = 0; i < M.length; i++) {
            if (this.alphabet.indexOf(M[i]) >= 0) {
                char = this.alphabet[(this.alphabet.indexOf(M[i]) + this.alphabet.indexOf(K[i])) % this.alphabet.length];
            } else {
                char = M[i];
            }
            C.push(char);
        }
        return this.direct? C.join('') : C.reverse().join('')
    }

    decrypt(message, key) {
        if (!message || !key)
            throw new Error("Incorrect arguments!")

        let C = message.toUpperCase();
        let K = this.generateKey(C, key);
        let M = [];
        let char;
        for (let i = 0; i < C.length; i++) {
            if (this.alphabet.indexOf(C[i]) >= 0) {
                char = this.alphabet[(this.alphabet.indexOf(C[i]) - this.alphabet.indexOf(K[i]) + this.alphabet.length) % this.alphabet.length];
            } else {
                char = C[i];
            }
            M.push(char);
        }
        return this.direct ? M.join('') : M.reverse().join('')
    }

    generateKey(message, key) {
        let resultKey = ''
        let shift = 0
        for (let i = 0; i < message.length; i++) {
            if (this.alphabet.indexOf(message[i]) === -1){
                resultKey += ' '
                shift += 1;
            } else {
                resultKey += key[Math.floor((i-shift) % key.length)];
            }
        }
        return resultKey.toUpperCase()
    }
}
