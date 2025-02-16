// 2. WAP to reverse a string.
const s1 = "Sachin";
let rev = "";

for (let s of s1) {
    rev = s + rev;
}

console.log(rev);

// 3. WAP to reverse a string.
// Input: "hi how are you"
// Output: "ih woh era uoy"
const s2 = "hi how are you";
let result = "";

for (let s of s1.split(" ")) {
    let rev = "";
    for (let i of s) {
        rev = i + rev;
    }
    result = result + " " + rev;
}
console.log(result);

// 4. WAP to get bellow output.
// Input: "hi how are you"
// Output: "you are how hi"

const s3 = "hi how are you";
let result2 = "";

for(let s of s3.split(" ")) {
    result2 = s + " " + result2;
}

console.log(result2);