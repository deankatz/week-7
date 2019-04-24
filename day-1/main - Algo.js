// exercise 1

// const printStars = function(num){
//     let string = ""
//     for (let i=1; i <=num; i++){
//         string+= "*"
//         console.log(string)
//     }}
// printStars(5)

// exercise 2

// const printBackwardsStars = function(num){
//     let string = ""
//     for(let i=1; i <=num; i++){
//         string+="*"
//     }
//     while (num > 0) {
//         console.log(string)
//         string = string.substring(0, string.length-1)
//         num--
//     }
// }
// printBackwardsStars(6)


// exercise 3 

const printStarSeries = function(num,count){
  for(let i=1; i<=count; i++){
        printStars(num)
        printBackwardsStars(num - 1)
    }
}
printStarSeries(5, 3)
























