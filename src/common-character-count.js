const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const chars1 = {}; // объект для подсчета символов в первой строке
  const chars2 = {}; // объект для подсчета символов во второй строке
  
  // подсчет символов в первой строке
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    chars1[char] = (chars1[char] || 0) + 1;
  }
  
  // подсчет символов во второй строке
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    chars2[char] = (chars2[char] || 0) + 1;
  }
  
  let count = 0; // счетчик общих символов
  
  // перебор каждого символа в первой строке
  for (let char in chars1) {
    if (chars2[char]) { // если символ есть во второй строке
      count += Math.min(chars1[char], chars2[char]); // добавляем минимальное количество символов, которые есть в каждой строке
    }
  }
  
  return count;
}

module.exports = {
  getCommonCharacterCount
};
