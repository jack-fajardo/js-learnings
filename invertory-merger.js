// ## 🧠 JavaScript Challenge: Inventory Merger

// ### 🛠 Problem Statement

// You are managing inventory for a warehouse. Each item in the inventory is represented as a pair:

// [quantity, itemName]

// You receive a **new shipment** of items, and your task is to **update the current inventory** by:

// 1. **Merging** the new inventory into the current one.
// 2. **Summing quantities** for items that already exist.
// 3. **Adding new items** if they don’t exist in the current inventory.
// 4. **Sorting the final inventory alphabetically** by item name.

// ### ✍️ Function Signature

// function updateInventory(curInv, newInv) {
//   // your code here
// }

// ### 📥 Input

// - `curInv`: an array of arrays, where each sub-array contains a quantity and item name currently in stock.
// - `newInv`: an array of arrays, where each sub-array contains a quantity and item name from the new shipment.

// ### 📤 Output

// - Return a **new array** representing the updated inventory, sorted alphabetically by item name.

// ### ✅ Example

// const curInv = [
//   [21, "Bowling Ball"],
//   [2, "Dirty Sock"],
//   [1, "Hair Pin"],
//   [5, "Microphone"]
// ];

// const newInv = [
//   [2, "Hair Pin"],
//   [3, "Half-Eaten Apple"],
//   [67, "Bowling Ball"],
//   [7, "Toothpaste"]
// ];

// updateInventory(curInv, newInv);

// ### 🔄 Expected Output

// [
//   [88, "Bowling Ball"],
//   [2, "Dirty Sock"],
//   [3, "Hair Pin"],
//   [3, "Half-Eaten Apple"],
//   [5, "Microphone"],
//   [7, "Toothpaste"]
// ]

// ### 🧩 Constraints

// - Item names are case-sensitive.
// - Quantities are always positive integers.
// - The input arrays may be empty.

// ---


function updateInventory(curInv, newInv) {
    const combinedArr = [...curInv, ...newInv]
    const sortedArr = combinedArr.sort((a, b) => a[1].localeCompare(b[1]));
    const merged = sortedArr.reduce((acc, [qty, name]) => {
        console.log('acc: ', `${acc}`)
        let found = acc.find(item => item[1] === name);
        console.log('found: ', `${found}`)
        if (found) {
            found[0] += qty;
        } else {
            acc.push([qty, name]);
        }
        return acc;
    }, []);

    return merged;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);



