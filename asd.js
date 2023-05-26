const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  items.sort((a, b) => a.value - b.value);
  
  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });



a = [3 , 5 , 2, 9]
3, 5, 2, 9
3, 2, 5, 9


// If a.length - b.length < 0, a comes before b. For example, "Adam" comes before "Jeffrey" as 4 - 7 < 0.
// If a.length - b.length > 0, b comes before a. For example, "Danil" comes after "Ben" as 5 - 3 > 0.
// If a.length - b.length == 0, their position is unchanged. For example, the relative position of "Jeffrey" and "Fabiano" is unchanged because 7 - 7 == 0.

a.sort((a, b) => {
    console.log('step')
    console.log('a: ',a, 'b: ',b)
    return a - b
});
console.log('x',a)