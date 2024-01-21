var massive = ["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"];
var array = [""];
console.log(massive);


do{
array.push(massive[massive.length - 1]);
massive.pop();
}while(array[array.length-1] != "fish");
array.pop();
while(array[array.length - 1]!= ""){
massive.push(array[array.length - 1]);
array.pop();
}
console.log(massive);


massive =["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"];
massive.shift();
console.log(massive);


massive = ["cat", "dog", "parrot", "horse", "fish", "chicken", "lion"];
massive.pop();
massive.pop();
console.log(massive);