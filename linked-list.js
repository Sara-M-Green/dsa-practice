// class _Node {
//     constructor(value, next) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     // insert first - create new node, point head to new new node
//     insertFirst(item) {
//         this.head = new _Node(item, this.head)
//     }

//     // insert last
//     insertLast(item) {
//         // check if list is empty
//         if (this.head === null) {
//             this.insertFirst(item)
//         }
//         else {
//             let tempNode = this.head
//             while (tempNode.next !== null) {
//                 tempNode = tempNode.next
//             }
//             tempNode.next = new _Node(item, null)
//         }
//     }

//     // find/get node

//     find(item) {
//         let currNode = this.head

//         if (!this.head) {
//             return null
//         }
//         else {
//             while (currNode.value !== item) {
//                 if (currNode.next === null) {
//                     return null
//                 }
//                 else {
//                     currNode = currNode.next
//                 }
//             }

//             return currNode
//         }
//     }
    
//     remove(item) {
//         if (!this.head) {
//             return null
//         }

//         if (this.head.value === item) {
//             this.head = this.head.next
//             return
//         }

//         let currNode = this.head
//         let prevNODE = this.head

//         while ((currNode !== null) && (currNode.value !== item)) {
//             prevNODE = currNode
//             currNode = currNode.next
//         }

//         if (currNode === null) {
//             console.log('Item not found')
//             return
//         }
//         prevNODE.next = currNode.next

//     }    
// }

class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }

    insertLast(item) {
        if (!this.head) {
            this.insertFirst(item)
            return
        }

        else {
            let currNode = this.head
            while (currNode.next !== null) {
                currNode = currNode.next
            }
            currNode.next = new _Node(item, null)
        }
    }

    insertBefore(newItem, beforeItem) {
        if (!this.head) {
            return null
        }

        let currNode = this.head
        while (currNode.next.value !== beforeItem) {
            if (currNode.next === null) {
                return null
            }
            currNode = currNode.next
        }
        // when currNode.next does === beforeItem
        currNode.next = new _Node(newItem, currNode.next)

    }

    insertAfter(newItem, afterItem) {
        if (!this.head) {
            return null
        }

        let currNode = this.head
        while (currNode.value !== afterItem) {
            if (currNode.next === null) {
                return null
            }
            currNode = currNode.next
        }
        currNode.next = new _Node(newItem, currNode.next)
    }

    insertAt(newItem, position) {
        if (!this.head){
            return null
        }

        let currPosition = 1
        let currNode = this.head

        while (currPosition < position - 1) {
            currPosition++
            currNode = currNode.next
        }

        let tempNode = new _Node(newItem, currNode.next)

        currNode.next = tempNode
    }


    find(item) {
        if (!this.head) {
            return null
        }

        let currNode = this.head
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null
            }
            currNode = currNode.next
        }
        return currNode
    }

    remove(item) {
        if (!this.head) {
            return null
        }

        if (this.head.value === item) {
            this.head = this.head.next
            return
        }

        let currNode = this.head
        let prevNode = this.head

        while ((currNode !== null) && (currNode.value !== item)) {
            prevNode = currNode
            currNode = currNode.next
        }

        if (currNode === null) {
            return null
        }
        prevNode.next = currNode.next
    }
}

function display(LL) {
    let results = []

    let currNode = LL.head

    while (currNode !== null) {
        results.push(currNode.value)
        currNode = currNode.next
    }

    console.log(results)
}

function size(LL) {
    let count = 0
    let currNode = LL.head

    while (currNode !== null) {
        currNode = currNode.next
        count++ 
        
    }
    console.log(count)
}

function isEmpty(LL) {
    let currNode = LL.head
    if (currNode) {
        return false
    }
    else {
        return true
    }
}

function findLast(LL) {
    let currNode = LL.head
    if (currNode === null) {
        return null
    }
    while (currNode.next !== null) {
        currNode = currNode.next
    }
    return currNode
}

function main() {
    let SLL = new LinkedList

    SLL.insertLast('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')

    SLL.insertLast('Tauhida')

    SLL.remove('Husker')

    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo')

    SLL.insertAt('Kat', 3)

    // SLL.remove('Tauhida')

    // console.log(SLL.find('Apollo'))

    let emptyLL = new LinkedList

    // console.log(findLast(SLL))
    display(SLL)
   
    console.log(middleOfList(SLL))
}

main()


// not working
// function reverseList(LL) {

//     let currNode = LL.head
//     let prev = null
//     let temp = null

//     if (currNode === null) {
//         return null
//     }

//     while (currNode !== null) {
//         temp = currNode.next
//         currNode.next = prev
//         prev = currNode
//         currNode = temp
//     }

//     return console.log(prev)

// }

function middleOfList(LL) {
    if (!LL.head) {
        return null
    }

    let slow = LL.head
    let fast = LL.head
    let ticks = 0

    while ((fast !== null) && (fast.next !== null)) {
        slow = slow.next
        fast = fast.next.next
        ticks ++
        console.log(ticks)
    }
    

    return slow


}

