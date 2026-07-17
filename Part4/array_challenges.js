// 1. Declare an array name 'teaFlavors' that contains the String
// "green tea", "black tea" and "oolong tea".
//     Acces the first element of the array and store  it 
//     in a variable named 'firstTea'.

let teaFlavors = ['green tea', 'black tea', 'oolong tea'];

let firstTea = teaFlavors[0];

// console.log(firstTea);

// 2. Declare an array named 'cities' containing
// 'London', 'Tokyo', 'Paris' and 'New York'.
// Acces the third element in the array and store it 
// in a variable named 'favoriteCity'.

let cities = ['London', 'Tokyo', 'Paris', 'New York'];
let favoriteCity = cities[2];

// console.log(favoriteCity);

// 3. You have an array named 'teaTypes' containing
//  'herbal tea', 'white tea' and 'masala chai'.
//   Change the second element of the array to 'jasmine tea'. 

let teaTypes = ['herbal tea','white tea','masala chai'];

teaTypes[1] = "jasmine tea";

// console.log(teaTypes);

// 4. Declare an array named 'cityVisisted' containing 'Mumbai' and 'Sydney'
//    Add 'Berlin' to the array using 'push' method

let cityVisisted = ['Mumbai', 'Sydney'];
cityVisisted.push('Berlin');

// console.log(cityVisisted);

// 5. You have an array named 'teaOrders' with 'chai',   'iced tea', 'matcha', and 'earl grey'.
//    Remove the last element of the array using the 'pop'
//    method and store it in a variable named 'lastOrder'.

let teaOrders = ['chai', 'iced tea', 'matcha', 'earlgrey'];
let lastOrder = teaOrders.pop();

console.log(lastOrder);

