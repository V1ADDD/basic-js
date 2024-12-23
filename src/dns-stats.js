const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsArray = domains.map(
    (a) => a.split('.')
  );
  const setResults = new Set();
  domainsArray.forEach(
    (a) => {
      let domain = '';
      for (let i = a.length - 1; i >= 0; i -= 1) {
        domain += '.' + a[i];
        setResults.add(domain);
      }
    }
  );
  const resultObject = {};
  setResults.forEach(
    (a) => {
      const count = domains.reduce(
        (prev, cur) => {
          if ((cur).indexOf(a
            .split('.')
            .filter((b) => b !== '')
            .reverse()
            .join('.')) >= 0) {
            return prev += 1;
          }
          return prev;
        }, 0
      );
      resultObject[a] = count;
    }
  );
  return resultObject;
}

module.exports = {
  getDNSStats
};
