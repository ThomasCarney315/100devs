// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 
let bulbasaur = 16 - 5
let caterpie = 7 - 1
let weedle = 7 - 1 
let numOfRareCandies = bulbasaur + caterpie + weedle
//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle
const fahToCel = (f)=> {
    return (f - 32) * (5/9) 
}
function warmEnoughForCharmander(tempCel){
    return tempCel > 0
}
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party
function choosePikachus(x){
    for (let i = x; i <= x; i++){
        console.log("Pikachu I choose you")
    }
}

//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function revAndPrint(list){
    console.log(list.reverse())
}
//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
function sqSumComp(a,b){
    let squareSumA = a.reduce((accum, x) => accum + x**2, 0)
    let cubeSumB = b.reduce((accum, x) => accum + x**3, 0)
    return squareSumA > cubeSumB
}
console.log(sqSumComp([2,2,2], [2,2,2]))
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]
function multiOfIndex(arr){
    return arr.filter((x,i) => x % i === 0)
}
console.log(multiOfIndex([22, -6, 32, 82, 9, 25]))
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function stringsToNums(numArr){
    return numArr.reduce((accum, x) =>
        accum + Number(x) , 0
    )
}
let sumpin = stringsToNums(['3', 3, '4'])
console.log(sumpin)