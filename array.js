const Memory = require("./memory.js")

const memory = new Memory

class Array {
    constructor() {
        this.length = 0
        this._capacity = 0
        this.ptr = memory.allocate(this.length)
        // the array starts with a length of 0 and a pointer to 0 blocks of memory
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }
        memory.set(this.ptr + this.length, value)
        this.length++
    }

    _resize(size) {
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)
        if (this.ptr === null) {
            throw new Error('Out of Memory')
        }
        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)
        this._capacity = size
    }

    get(index){
        if (index < 0 || index > this.length) {
            throw new Error('Index error')
        }
        return memory.get(this.ptr + index)
    }

    pop() {
        if (this.length === 0) {
            throw new Error('Index error')
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--
        return value
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('Index error')
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO)
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value)
        this.length++
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            throw new Error('Index Error')
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--
    }
}

Array.SIZE_RATIO = 3;

function main() {
    Array.SIZE_RATIO = 3;

    // create a new instance of the Array class
    let arr = new Array()
    console.log(arr)

    // add an item to the array

    arr.push(3)
    console.log(arr)
    arr.push(5)
    console.log(arr)
    arr.push(15)
    console.log(arr)
    arr.push(19)
    console.log(arr)
    arr.push(45)
    console.log(arr)
    arr.push(10)

    console.log(arr)

    arr.pop()
    console.log(arr)
    arr.pop()
    console.log(arr)
    arr.pop()
    console.log(arr)

    console.log(arr.get(0))

    arr.pop()
    arr.pop()
    arr.pop()

    console.log(arr)
    
    arr.push('tauhida')

    console.log(arr.get(0))

    
}

// main()

function URLify(str) {
    console.log(str.replace(/ /g,'%20'))
}

// URLify('chance walker ben')

function filter(arr) {
    let results = []
    arr.forEach(num => {
        if (num > 5) {
            results.push(num)
        }
    })

    console.log(results)
}

// filter([1, 3, 5, 7, 8, 9, 10])

function maxSum(arr) { 

    let currSum = 0
    let largestSum = 0

    for (i = 0; i < arr.length; i++) {
        currSum = Math.max(0, (currSum + arr[i]))
        console.log(currSum)
        largestSum = Math.max(largestSum, currSum)
    }

    console.log(largestSum)

}

maxSum([4, 6, -3, 5, 5, 5])