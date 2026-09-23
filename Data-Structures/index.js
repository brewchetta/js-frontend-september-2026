// ARRAYS /////////////////////////////////////////

const myArray = ["Chett", "Tiller", 10, true]
                // 0       1        2   3

myArray.length // the number of items

// index 
myArray[0] // "Chett"
myArray[2] // 10

// adding to the end
myArray.push("put me at the end")
myArray.length // 5

// removing from the end
myArray.pop() // "put me at the end"
myArray.length // 4

// start at the first index
let currentIndex = 0

// currentIndex < myArray.length means:
// continue looping until currentIndex is equal or greater to the length
// while (currentIndex < myArray.length) {
//     // get the item at the current index (starts at 0)
//     const currentItem = myArray[currentIndex]
//     // print current item
//     console.log(currentItem)
//     // IMPORTANT: increment the index by one
//     currentIndex++
// }


// for loop
        // index      // condition          // do this at the end
for (let index = 0; index < myArray.length; index++) {
    // get the item at the current index (starts at 0)
    const currentItem = myArray[index]
    // print current item
    console.log(currentItem)
}

                // 0     1      2     3       4
const prices = [10.99, 11.99, 12.99, 13.99, 14.99]
let total = 0

for (let index = 0; index < prices.length; index++) {
    const price = prices[index]
    total += price
    console.log("INDEX: ", index, "PRICE: ", price, "TOTAL: ", total);    
}


// OBJECTS /////////////////////////////////////////////////////////

const person = { 
    username: "coolguy100",
    password: "Password123",
    name: "Chett Tiller", 
    age: 21, 
    address: "123 Sesame Street", 
    height: "8 foot 10 inches" 
}
// key: values

person.age // 21
person.name // "Chett Tiller"

// adding a new key/value pair
person.hairColor = "brown"

// changing a key/value pair
person.address = "123 Lake Tahoe Dr"

function login( user ) {
    if (user.password === "Password123") {
        return "Logging you in..."
    } else {
        return "Invalid password"
    }
}



const people = [
    { name: "Chett Tiller" },
    { name: "Jimothy Raccoon" },
    { name: "Big Bird" },
    { name: "Oscar the Grouch" },
    { name: "Elmo" },
    { name: "Grover" },
]

for (let index = 0; index < people.length; index++) {
    const person = people[index]
    console.log( person.name )
}

// get all items on the page as a list (very similar to an array)
const allLis = document.querySelectorAll("li")

for (let index = 0; index < allLis.length; index++) {
    const currentLi = allLis[index]
    currentLi.textContent = currentLi.textContent.toUpperCase()
}


const sports = ["football", "baseball", "soccer", "hockey"]

for (let index = 0; index < sports.length; index++) {
    console.log( sports[index] )
}