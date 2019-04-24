// spotcheck

// class Stack {
//   constructor() {
//       this.stack = []
//       this.length = 0
//   }
//   print() {
//       console.log(this.stack)
//   }
//   push(x) {
//       this.stack[this.length] = x
//       this.length++
//   }
//   isEmpty() {
//       return this.length === 0
//   }
//   peek() {
//       return this.isEmpty() ? null : this.stack[this.length - 1]
//   }
//   pop() {
//       if (this.isEmpty()) {
//           return null
//       }
//       this.length--
//       return delete this.stack[this.length - 1]
//   }
// }

// let myStack = new Stack()
// console.log(myStack.isEmpty())    //true
// myStack.print()                    //[]
// myStack.push(2)      
// console.log(myStack.isEmpty())     //false
// myStack.push(4)      
// myStack.print()                    //[2,4]
// console.log(myStack.peek())        //4
// myStack.pop()
// myStack.pop()
// console.log(myStack.peek())       //null
// console.log(myStack.isEmpty())    

// exercise 1

// class Queue{
//     constructor(){
//         this.queue = []
//         this.length = 0
//     }

//     enqueue(item) {
//     this.queue[this.length] = item
//     this.length++
//     }

//     isEmpty(){
//         return this.queue.length == 0 ? true : false
//     }
 
//     peek(){
//         return this.queue[0]//first of the "array" not the last...
//     }

//     dequeue(){
//         let first = this.queue[0]
//         this.queue.splice(0,1)
//         return first
//     }

//     print(){
//         console.log(this.queue)//no loop needed
//     }
// }

// let q = new Queue()
// console.log(q.isEmpty())    //true
// q.print()                   //[]
// q.enqueue(2)
// console.log(q.isEmpty())    //false
// q.enqueue(4)
// q.print()                   //[4,2]
// console.log(q.peek())       //2
// q.dequeue()
// q.dequeue()
// console.log(q.peek())       //null
// console.log(q.isEmpty())    //true

// exercise 2

class MinStack {
  constructor() {
      this.MinStack = []
      this.length = 0
  }

  isEmpty(){
    return this.length === 0
  }

  peek(){
    return this.isEmpty() ? null : this.MinStack[this.length - 1]
  }

  print(){
     console.log(this.MinStack)
  }

  push(item){
    this.MinStack[this.length]=item
    this.length++
  }

  pop(){
    if (this.isEmpty()) {
        return null
    }
    this.length--
    return delete this.MinStack[this.length - 1]
  }

  // to be continued....

//   getMin( ){
//   }
// }
// let ms = new MinStack()
// ms.push(17)
// ms.push(12)
// ms.push(31)
// console.log(ms.getMin())    //12
// ms.pop()
// ms.pop()
// ms.pop()
// console.log(ms.getMin())    //null
// ms.push(19)
// ms.push(21)
// console.log(ms.getMin())    //19
// ms.push(3)
// console.log(ms.getMin())    //3
// ms.pop()
// ms.pop()
// console.log(ms.getMin())    //19

