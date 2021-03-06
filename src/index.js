'use strict'

module.exports = function convertToRange (arrItems) {
  if (!arrItems || !arrItems.length) {
    return ''
  }
  const arrNum = arrItems.filter(item => item !== null && !isNaN(item))
  const ranges = [[arrNum[0], arrNum[0]]]
  let lastIndex = 0
  const result = []

  for (let i = 1; i < arrNum.length; i++) {
    if (arrNum[i] - ranges[lastIndex][1] === 1) {
      ranges[lastIndex][1] = arrNum[i]
    } else {
      ranges[++lastIndex] = [arrNum[i], arrNum[i]]
    }
  }
  ranges.forEach(rangeNum => {
    if (rangeNum.length === 1) {
      result.push(rangeNum.join())
    }
    if (rangeNum[1] - rangeNum[0] === 0) {
      result.push(rangeNum[0])
    } else {
      rangeNum[1] - rangeNum[0] === 1
        ? result.push(rangeNum.join())
        : result.push(rangeNum.join('-'))
    }
  })
  return result.join()
}
