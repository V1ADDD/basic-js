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
  const nString = n.toString();
  return Math.max(...nString.split('').map(
    (a) => {
      const index = nString.indexOf(a);
      const nWithoutA = nString.slice(0, index) + nString.slice(index + 1);
      return Number(nWithoutA);
    }
  ));
}

module.exports = {
  deleteDigit
};
