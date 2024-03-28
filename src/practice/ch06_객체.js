const obj = {name:'james', age:25, job:'programmer'}
let age = 'age';
console.log(obj.name, obj[age], obj['job']);

for (let key in obj) 
  console.log(obj[key]);

