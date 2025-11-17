// const isEven = (n) => n % 2 === 0;
// const filterEvensWithLog = createFilterLogger(isEven);

// const result = filterEvensWithLog([1, 2, 3, 4]);
// // Logs:
// // 1 => false
// // 2 => true
// // 3 => false
// // 4 => true

// console.log(result); // [2, 4]


function createFilterLogger(predicate) {
  return function (arr) {
    const result = [];
    for (const item of arr) {
      const passed = predicate(item);
      console.log(`${item} => ${passed}`);
      if (passed) {
        result.push(item);
      }
    }
    return result;
  };
}
