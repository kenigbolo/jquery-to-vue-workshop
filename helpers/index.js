/**
 * {{eachIndex}}
 *
 * @param  {Array}  array   [description]
 * @param  {Object} options [description]
 * @return {[type]}         [description]
 * @example:
 *   {{#eachIndex collection}}
 *     {{item}} is {{index}}
 *   {{/eachIndex}}
 */
const eachIndex = (array, options) => {
  let i;
  let len;
  let result = '';
  let index;
  for (index = i = 0, len = array.length; i < len; index = ++i) {
    const value = array[index];
    result += options.fn({
      index,
      item: value,
    });
  }
  return result;
};

module.exports = eachIndex;
