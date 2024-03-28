let str = 'c:/Temp/ss/profile/james.jpg';
// 파일의 타입
let idx = str.lastIndexOf('.');
console.log(str.substring(idx+1));
// 파일이 있는 제일 마지막 디렉토리명
let arr = str.split('/');
console.log(arr[arr.length - 2]);

const fruits = ['apple', 'banana', 'cherry'];
fruits.push('melon');
console.log(fruits.join(', '));

const numbers = [4, 7, 10, 9, 15, 6];
console.log(numbers.sort((x,y) => x-y));  // 오름차순 정렬, 배열 자체가 변화함
console.log(numbers);

// fruits.forEach(value => {
//   console.log(value);
// });
fruits.forEach((value, index) => {
  console.log(value, index);
});

let power = numbers.map(val => val * val);
console.log(power);

let even = numbers.filter(val => val % 2 == 0);
console.log(even);
console.log(fruits.filter(val => val.length >= 6));

let sum = numbers.reduce((prev, curr) => prev + curr, 0);
console.log(sum);   // 51, [4, 7, 10, 9, 15, 6]의 합
console.log(numbers.reduce((prev, curr) => prev * curr, 1));

const complex = [
  {name:'pad', price:150000}, {name:'mouse', price:80000}, {name:'pen', price:30000}
];
const jsonComplex = JSON.stringify(complex);
console.log(jsonComplex);
const parseComplex = JSON.parse(jsonComplex);
console.log(parseComplex);
