const convertToRange = require('../src/index')

function range(start, stop, step) {
  var a = [start], b = start;
  while (b < stop) {
      a.push(b += step || 1);
  }
  return a;
}

describe('Test convertToRange', () => {

  test('#empty in array', async () => {
    const arr = []
    const data = await convertToRange(arr)
    expect(data).toBe('')
  })

  test('#range 1-9 in array', async () => {
    const arr = range(1, 9)
    const data = await convertToRange(arr)
    expect(data).toBe('1-9')
  })

  test('#range and nums in array', async () => {
    const arr = [1, 2].concat(range(6, 9))
    const data = await convertToRange(arr)
    expect(data).toBe('1,2,6-9')
  })

  test('#string in array', async () => {
    const arr = [1,null,3,'e',4].concat(range(6, 9))
    const data = await convertToRange(arr)
    expect(data).toBe('1,3,4,6-9')
  })

})
