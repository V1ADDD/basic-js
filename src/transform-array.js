const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr instanceof Array === false) throw new Error("'arr' parameter must be an instance of the Array!");
  let copyArr = [...arr];
  let n = copyArr.length;
  let i = 0;
  while (i < n) {
    if (typeof copyArr[i] !== 'number') {
      if (copyArr[i] === '--double-next' && i + 1 !== copyArr.length) {
        copyArr.splice(i + 1, 0, copyArr[i + 1]);
      }
      if (copyArr[i] === '--discard-prev' && i !== 0) {
        copyArr.splice(i - 1, 1);
      }
      if (copyArr[i] === '--double-prev' && i !== 0) {
        copyArr.splice(i - 1, 0, copyArr[i - 1]);
        i += 1;
      }
      if (copyArr[i] === '--discard-next' && i + 1 !== copyArr.length) {
        copyArr.splice(i + 1, 1);
      }
    }
    i += 1;
    n = copyArr.length;
  }
  return copyArr.filter((a) => a !== '--double-next' && a !== '--double-prev' && a !== '--discard-prev' && a !== '--discard-next');
}

module.exports = {
  transform
};
