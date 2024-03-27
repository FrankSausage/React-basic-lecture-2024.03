let date = new Date().getDate();
console.log(date);
console.log(`오늘의 날짜는 ${date % 2 == 0 ? '짝수' : '홀수'}`);

let test; // undefined
console.log(test);
test = test ? test : '초기값';
console.log(test);