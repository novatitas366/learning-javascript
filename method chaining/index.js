//method chaining


let username = prompt("Enter your username");

// no method chain
username = username.trim();
let letter = username.charAt(0);

letter = letter.toUpperCase();

let extraChar = username.slice(1);

extraChar = extraChar.toLowerCase();

username = letter+extraChar;

console.log(username);


//method chain
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();


console.log(username);





