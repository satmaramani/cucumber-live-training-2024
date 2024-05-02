const arrayLength = 5;
const generatedArray = [];

for (let i = 0; i < arrayLength; i++) {
  generatedArray.push(Math.floor(Math.random() * 100)); // Generate random numbers between 0 and 100
}

console.log(JSON.stringify(generatedArray)); // Output the generated array as JSON string
