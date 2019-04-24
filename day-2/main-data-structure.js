class UniqueArray {
  constructor() {
    this.uniqueStuff = []
    this.uniqueLength = 0
    this.objectify = new Set(this.uniqueStuff)
}
  add(item) {
    if (this.exists(item)) {
        console.log(item)
    } else {
        this.objectify.add(item)
        this.uniqueStuff[this.uniqueLength] = item
        this.uniqueLength++
    }
  }
  showAll() {
    for (let u of this.uniqueStuff) {
        console.log(u)
    }
  }
  exists(item) {
    return this.objectify.has(item)
}
//  exists(item) {
//     for (let i of item){
//       if (this.uniqueLength[i]==this.uniqueLength[i-1]){
//       console.log("true")
//       else console.log ("false")
//       }
//     }
//   }
  get(index) {
      return this.uniqueStuff[index]
  }
}

const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"

// Create a data structure called UniqueArray
// It should have four methods:
// 1.	add(item)
// o	Stores the item only if it hasn't been added already
// 2.	showAll()
// o	Shows all the added items
// 3.	exists(item)
// o	Returns true if the item has been added, false otherwise
// o	This should run in O( 1 )
// 4.	get(index)
// o	Returns the item at index index, or -1 if it doesn't exit
// Effectively, this data structure works like a normal array (for the most part), but:
// •	It only works for primitive types
// •	It only allows you to add unique items to it
 


// add(item) {//למה בונים פונקיות ככה בלי קונסט ואיפה הריטרן בסוף, זה קטע של קלאס לעומת שיטות ???
//     for (let i of item){
//       if (this.uniqueStuff[i]!=item){
//       this.uniqueStuff.push(item)
//       this.uniqueLength++
//       }
//     }
// }
