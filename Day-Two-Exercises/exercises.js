// 1 /////////////////////////////////////////////////////////////////////////////////
// Create a function `fullName()` which accepts `firstName` and `lastName` as strings.
// The function should return the names combined into one string.
// Example: fullName("Chett", "Tiller") >>> "Chett Tiller"

function fullName(firstName, lastName) {
    // return `${firstName} ${lastName}`;
    return firstName + " " + lastName;
}



// 2 /////////////////////////////////////////////////////////////////////////////////
// Create a function `validId()` which accepts a `year`.
// If the year is 2026 or later, return `true`.
// If the year is before 2026, return `false`.
// Example: validId(2027) >>> true
// Example: validId(2023) >>> false
// BONUS: Instead of hardcoding 2026, use Date to get the current year.

function validId(year) {
    const d = new Date(); 
    const currentYear = d.getFullYear();
    if ( year >= currentYear ) {
        return true;
    } else {
        return false
    }
}

// 3 //////////////////////////////////////////////////////////////////////////////////
// Create a function `calculate()` which accepts `num1`, `num2`, and `operation`.
// Expect `num1` and `num2` to be numbers.
// Expect `operation` to be a string.
// If `operation` is "+", add the numbers and return the result
// If `operation` is "-", subtract `num2` from `num1` and return the result
// If `operation` is "x" or "*" multiply the numbers and return the result
// If `operation` is "/" divide `num1` by `num2` and return the result
// Example: calculate(6,3,"*") >>> 18
// Example: calculate(2,4,"+") >>> 6
// Example: calculate(8,2,"/") >>> 4

function calculate(num1, num2, operation) {
    if (operation === "+") {
        return num1 + num2
    } else if (operation === "-") {
        return num1 - num2
    } else if (operation === "x") {
        return num1 * num2
    } else if (operation === "*") {
        return num1 * num2
    } else if (operation === "/") {
        return num1 / num2
    }
}

function calculateSwitch(num1, num2, operation) {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "x":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return
    }
}