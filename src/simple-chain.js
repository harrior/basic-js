import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default  {
  chain : [],

  getLength() {
    return this.chain.length
  },
  addLink( value ) {
    this.chain.push(String(value))
    return this
  },
  removeLink( position ) {
    if ((isNaN(position)) || (position !== Math.floor(position)) || (typeof this.chain[position-1] === 'undefined')){
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain = this.chain.slice(0, position-1).concat(this.chain.slice(position))
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse()
    return this
  },
  finishChain() {
    let chainString = '( ' + this.chain.join(" )~~( ") + ' )'
    this.chain = []
    return chainString

  }
};
