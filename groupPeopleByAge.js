function groupPeopleByAge(arr) {
  const result = arr.reduce((acc, {name, age}) => {
    if (!acc[age]) {
      acc[age] = []
    }
    acc[age].push({name, age})
    
    return acc;
  }, {})
  return result;
}

const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 20 },
  { name: "Eve", age: 22 }
];

groupPeopleByAge(people);
