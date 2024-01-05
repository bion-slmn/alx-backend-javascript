/**
 * Iterate through a object
 * @author Bion Solomon <bionsol25@gmail.com>
 * @param {reportWithIterator} array - an array returned by createIteratorObject function
 * @return {string} -  separated from with |
 */

export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.join(' | ');
}
