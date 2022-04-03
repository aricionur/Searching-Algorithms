class Search {
  linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) return i
    }
    return -1
  }

  binarySearchIterative(array, target) {
    const left = 0
    const right = array.length - 1

    while (left <= right) {
      const middle = Math.floor((left + right) / 2)

      if (array[middle] === target) return middle
      else if (array[middle] < target) left = middle + 1
      right = middle - 1
    }

    return -1
  }

  binarySearchRecursive(array, target) {
    return this.binSearchRec(array, target, 0, array.length - 1)
  }

  binSearchRec(array, target, left, right) {
    if (left > right) return -1

    const middle = Math.floor((left + right) / 2)
    if (array[middle] === target) return middle
    else if (array[middle] < target) return this.binSearchRec(array, target, middle + 1, right)
    return this.binSearchRec(array, target, left, middle - 1)
  }

  ternarySearch(array, target) {
    return this.terSearchRec(array, target, 0, array.length - 1)
  }

  terSearchRec(array, target, left, right) {
    if (left > right) return -1

    const partitionSize = Math.floor((right - left) / 3)
    const middleL = left + partitionSize
    const middleR = right - partitionSize

    if (target === array[middleR]) return middleR
    if (target === array[middleL]) return middleL
    if (target > array[middleR]) return this.terSearchRec(array, target, middleR + 1, right)
    if (target < array[middleL]) return this.terSearchRec(array, target, left, middleL - 1)
    return this.terSearchRec(array, target, middleL + 1, middleR - 1)
  }

  jumpSearch(array, target) {
    const arrLen = array.length
    const blockSize = Math.floor(Math.sqrt(arrLen))

    let start = 0
    let next = blockSize
    while (start < arrLen && array[next - 1] < target) {
      start = next
      next += blockSize
      if (next > arrLen) next = arrLen
    }

    for (let i = start; i < next; i++) {
      if (array[i] === target) return i
    }

    return -1
  }

  exponentialSearch(array, target) {
    const arrLen = array.length
    if (!arrLen) return -1

    let start = 0
    let end = 1

    while (end < arrLen && array[end - 1] < target) {
      start = end - 1
      end *= 2
      if (end > arrLen) end = arrLen
    }

    for (let i = start; i < end; i++) {
      if (array[i] === target) return i
    }

    return -1
  }
}

const search = new Search()

//               0  1   2  3   4   5   6   7   8
const testArr = [3, 5, 13, 22, 25, 33, 45, 88]
//               S              t          E

// const linearSearchFoundIndex = search.linearSearch(testArr, -123);
// console.log("linearSearchFoundIndex:", linearSearchFoundIndex);

// const binarySearchIterativeFoundIndex = search.binarySearchIterative(testArr, 33);
// console.log("binarySearchIterativeFoundIndex:", binarySearchIterativeFoundIndex);

// const binarySearchRecursiveFoundIndex = search.binarySearchRecursive(testArr, 3);
// console.log("binarySearchRecursiveFoundIndex:", binarySearchRecursiveFoundIndex);

// const ternarySearchFoundIndex = search.ternarySearch(testArr, 88);
// console.log("ternarySearchFoundIndex:", ternarySearchFoundIndex);

// const jumpSearchFoundIndex = search.jumpSearch(testArr, 3);
// console.log("jumpSearchFoundIndex:", jumpSearchFoundIndex);

// const exponentialSearchFoundIndex = search.exponentialSearch([], 33);
// const exponentialSearchFoundIndex = search.exponentialSearch([1], 33);
// const exponentialSearchFoundIndex = search.exponentialSearch([33], 33);
const exponentialSearchFoundIndex = search.exponentialSearch(testArr, 33)
console.log("exponentialSearchFoundIndex:", exponentialSearchFoundIndex)
