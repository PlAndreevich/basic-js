const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n); // преобразуем число в строку
  let max = -Infinity;
  for (let i = 0; i < str.length; i++) {
    const num = Number(str.slice(0, i) + str.slice(i + 1)); // формируем новое число без i-й цифры
    if (num > max) {
      max = num;
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
