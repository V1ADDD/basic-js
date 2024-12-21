const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    depth += 1;
    if (arr.every((a) => a instanceof Array === false)) {
        return depth;
    }
    const findArs = arr.filter((a) => a instanceof Array);
    return Math.max(...findArs.map((a) => this.calculateDepth(a, depth)));
  }
}

module.exports = {
  DepthCalculator
};
