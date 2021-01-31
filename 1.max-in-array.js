//max in sorted array Big O =
const array1 = [ 1, 16, 10, 20, 44, 32, 7, 15];
array1.sort((a,b )=> a-b);
console.log(array1);
console.log(array1[array1.length - 1]); //44

//max in unsorted array Big O =
const array1_1 = [ 1, 16, 10, 20, 44, 32, 7, 15];
let max = -Infinity;
for(let i of array1_1){
    max < i ? max = i : max;
}
console.log(max);
