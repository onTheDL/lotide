module.exports = {
  forEach(arr, func) {
    // for (let i = 0; i < arr.length; i++) {
    //   const value = arr[i]
    //   func(value, i)
    // }

    // for/in used because need index of arr
    for (let idx in arr) {
      func(arr[idx], idx)
    }
  },

  map(arr, func) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
      result.push(func(arr[i], i))
    }
    return result
  }
}