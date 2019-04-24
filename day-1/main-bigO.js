// exercise 6   

// let numbers = [5,5,3,2,1]
// let counter = {}

// const findDuplicates= function(numbers) {
//   for (let n of numbers) {

//     if (counter[n]==0)
//     counter[n]++
//     else counter[n]= 2

//     if (counter[n]>1)
//     console.log("found a duplicate")
//   }
//   console.log(counter)
// }
// findDuplicates(numbers)


// exercise 7

let allSalaries = {
    ax01: {
      name: "Ray",
      age: 28,
      salary: 1300
    },
    qs84: {
      name: "Lucius",
      age: 31,
      salary: 840
    },
    bg33: {
      name: "Taylor",
      age: 18,
      salary: 2700
    }
  }
  
  const findEmployeeSalary = function(employeeID) {
    console.log(allSalaries[employeeID].salary)
  }
  findEmployeeSalary("ax01")



  




