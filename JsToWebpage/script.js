// function sayHello() {
//     console.log("hello!");
// };

// sayHello();

// let saybye = function() {
//     console.log('bye...');
// };

// saybye();

// let userAge = Number(prompt("How old are you?"));
// // // prompt
// // let calcAge = (userAge) => {
// //     if(userAge < 18){
// //         return alert("Sorry, you are too young to drive this vehicle.. Powering Off.");
// //         } else if (userAge == 18) {
// //             return alert("Congratulations on your first year of driving. Enjoy the ride!");
// //         } else {
// //             return alert("Powering On. Enjoy the ride!");
// //         };
// // };

// // bonus : console
// let calcAgeTwo = (userAge) => {
//     if(userAge < 18){
//         return console.log("Sorry, you are too young to drive this vehicle.. Powering Off.");
//         } else if (userAge == 18) {
//             return console.log("Congratulations on your first year of driving. Enjoy the ride!");
//         } else {
//             return console.log("Powering On. Enjoy the ride!");
//         };
// };

// calcAgeTwo();

// Arrays
// let list = ["tiger", "cat", "dog", "bird"];
// console.log(list);

// // 1
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// // removed banana
// let newarray = array.shift();
// console.log(newarray);
// // 2
// console.log(array);
// // sorted array
// let sortedArray = array.sort();
// console.log(sortedArray);
// // 3
// array.push("Kiwi");
// console.log(array);
// // 4
// let removedAppleArray = array.shift();
// console.log(removedAppleArray);
// console.log(array);
// // 5
// let sortedReverseArray = array.reverse();
// console.log(sortedReverseArray);
// // Bonus : access oranges
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(array2[1][1][0]);

let user = {
  name: "John",
  age: 30,
  hobby: "Basketball",
  isMarried: false,
};

// let UserOne = {
//     username: "JohnnyBoy",
//     password: "Jb12345"
// };

let database = [
  {
    username: "JohnnyBoy",
    password: "Jb12345",
  },
  {
    username: "BobbyH",
    password: "beBoy12",
  },
  {
    username: "JanePretty",
    password: "girlyone",
  },
  {
    username: "MarkyMark",
    password: "MandM",
  },
];
let newsfeed = [
  {
    username: "BobbyH",
    timeline: "June 2nd",
  },
  {
    username: "JanePretty",
    timeline: "October 3rd",
  },
  {
    username: "MarkyMark",
    timeline: "August 12th",
  },
];

let userNamePrompt = prompt("What's your username?");
let passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true;
    }
  }
  return false;
}
function signIn(username, password) {
  if(isUserValid(username, password)) {
      console.log(newsfeed);
  } else {
      alert("Wrong username or password");
  }
}

signIn(userNamePrompt, passwordPrompt);
