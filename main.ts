// assignment of array 
// ques no 1
let fruit=[
    "apple","mango","banana","orange"
]
console.log(fruit);
// ques no 2
let number=[
    10,20,30,40
];
console.log(number);
//  ques no 3
let thirdFruit=["apple","banana","mango","ornge"]
console.log(thirdFruit[3]);

// ques no 4
number[1]=25;
console.log(number,"Number");

// ques no 5
fruit.push("grape");
console.log(fruit,"fruit");

// ques no 6
let lastFruit=["apple","banana","mango","orange"]
lastFruit.pop();
console.log(lastFruit);

// ques no 7
let firstFruit=["apple","banana","mango","orange"]
firstFruit.shift();
console.log(firstFruit);
// ques no 8 
fruit.unshift("kiwi")
console.log(fruit,"Fruit");
// ques no 9
fruit.splice(1,2)
console.log(fruit);
// ques no 10 
fruit.splice(2,0, "pineapple","pear");
console.log(fruit);
// ques no 11
let citrusFruit=fruit.slice(0,2);
console.log(citrusFruit)

// ques no 12
let lastTwoFruit=fruit.splice(-2);
console.log(lastTwoFruit);







