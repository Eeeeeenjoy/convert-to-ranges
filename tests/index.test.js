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

  test('#different ranges for [1,2,3,4,5,6,7,8]', async () => {
    const arr = range(1, 8)
    const data = await convertToRange(arr)
    expect(data).toBe('1-8')
  })
  test('#different ranges for [1,3,4,5,6,7,8]', async () => {
    const arr = [1].concat(range(3, 8))
    const data = await convertToRange(arr)
    expect(data).toBe('1,3-8')
  })
  test('#different ranges for [1,3,4,5,6,7,8,10,11,12]', async () => {
    const arr = [1].concat(range(3, 8)).concat(range(10, 12))
    const data = await convertToRange(arr)
    expect(data).toBe('1,3-8,10-12')
  })
  test('#different ranges for [1,2,3', async () => {
    const arr = range(1, 3)
    const data = await convertToRange(arr)
    expect(data).toBe('1-3')
  })
  test('#different ranges for [1,2]', async () => {
    const arr = range(1, 2)
    const data = await convertToRange(arr)
    expect(data).toBe('1,2')
  })
  test('#different ranges for [1,2,4]', async () => {
    const arr = [1,2,4]
    const data = await convertToRange(arr)
    expect(data).toBe('1,2,4')
  })
  test('#different ranges for [1,2,4,5,6]', async () => {
    const arr = [1,2,4,5,6]
    const data = await convertToRange(arr)
    expect(data).toBe('1,2,4-6')
  })
  test('#different ranges for [1,2,3,7,8,9,15,17,19,20,21]', async () => {
    const arr = [1,2,3,7,8,9,15,17,19,20,21] 
    const data = await convertToRange(arr)
    expect(data).toBe('1-3,7-9,15,17,19-21')
  })
  test('#different ranges for [1,2,3,4,5,6,100,1091,1999,2000,2001,2002]', async () => {
    const arr = [1,2,3,4,5,6,100,1091,1999,2000,2001,2002]
    const data = await convertToRange(arr)
    expect(data).toBe('1-6,100,1091,1999-2002')
  })
  test('#different ranges for [1]', async () => {
    const arr = [1]  
    const data = await convertToRange(arr)
    expect(data).toBe('1')
  })
  test('#different ranges for [1,3,5,7,9,11]', async () => {
    const arr = [1,3,5,7,9,11]  
    const data = await convertToRange(arr)
    expect(data).toBe('1,3,5,7,9,11')
  })
  test('#string in array', async () => {
    const arr = [1,null,3,'e',4].concat(range(6, 9))
    const data = await convertToRange(arr)
    expect(data).toBe('1,3,4,6-9')
  })

})
