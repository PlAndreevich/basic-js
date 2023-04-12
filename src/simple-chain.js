const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [], // массив для хранения звеньев цепи
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value !== undefined ? value : ''} )`);
    return this; // чтобы метод был цепным
  },
  removeLink(position) {
    if (
      typeof position !== 'number' || 
      position < 1 || 
      position > this.chain.length
    ) {
      this.chain = []; // очистка цепи, как если бы была брошена ошибка
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this; // чтобы метод был цепным
  },
  reverseChain() {
    this.chain.reverse();
    return this; // чтобы метод был цепным
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = []; // очистка цепи
    return result;
  }
};

module.exports = {
  chainMaker
};
