function sym(...args) {
  const getSymetric = (firstArr, secondArr) => {
    if (!secondArr) return []

    const firstSet = new Set(firstArr)
    const secondSet = new Set(secondArr)
    let returnUncommonValues = new Set();

    firstSet.forEach((val) => {
      if (!secondSet.has(val)) {
        returnUncommonValues.add(val)
      }
    })

    secondSet.forEach((val) => {
      if (!firstSet.has(val)) {
        returnUncommonValues.add(val);
      }
    });

    return [...returnUncommonValues].sort()
  }

  return args.reduce((result, nextArray) => {
    return getSymetric(result, nextArray);
  });
}

sym([1, 2, 3], [5, 2, 1, 4]);
