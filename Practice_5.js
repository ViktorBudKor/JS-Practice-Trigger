var arr = [31, 10, 'chicken', 9, 'fish', 10];
console.log(arr);
console.log(arr.filter(item => typeof item === "number"));
console.log(arr.filter(item => typeof item === "string"));
console.log(arr.filter(item =>  item == "10"));