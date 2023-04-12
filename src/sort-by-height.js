const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Создаем массив из значений, не равных -1, и сортируем его
  const sortedHeights = arr.filter(h => h !== -1).sort((a, b) => a - b);

  // Возвращаем исходный массив, заменив значения, не равные -1, отсортированными значениями
  return arr.map(h => (h !== -1 ? sortedHeights.shift() : h));
}

module.exports = {
  sortByHeight
};
