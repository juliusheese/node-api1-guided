// const name = process.argv[2] || "World"
// console.log(`Hello, ${name}`)




// This require syntax is another way to import third-party libraries
const fs = require("fs")

// create a `alphabet` folder at the current location
fs.mkdirSync("alphabet")

// create a folder for each letter of the alphabet inside the folder created above
for (let i = 0; i <= 25; i++) {
	// 97 is the character code for "a", 98 for "b", and so on
	const letter = String.fromCharCode(i + 97)

	// create a folder for the current letter
	fs.mkdirSync(`alphabet/${letter}`)
}
