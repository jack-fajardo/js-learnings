// ### 🧠 Problem: Count Word Frequency in an Array

// You are given an array of strings representing words collected from a fruit basket inventory. Your task is to write a function `countWords` that takes this array and returns an object where each key is a word and its value is the number of times that word appears in the array.

// #### 📥 Input
// - An array `arr` of strings, where each string is a word (e.g., `"apple"`, `"banana"`, etc.).
// - The array may contain duplicate words.

// #### 📤 Output
// - An object where:
//   - Each key is a unique word from the array.
//   - Each value is the count of how many times that word appears.

// #### 🧪 Example

// const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
// countWords(arr);

// **Expected Output:**

// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }

// ---

function countWords(arg) {
  const reduced = arg.reduce((acc, value) => {  
    acc[value] = (acc[value] || 0) + 1;

    return acc
  }, {})
}

const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
countWords(arr);
