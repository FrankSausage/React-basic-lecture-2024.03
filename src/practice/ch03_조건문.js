let date = new Date().getDate();
console.log(date);
console.log(`오늘의 날짜는 ${date % 2 == 0 ? '짝수' : '홀수'}입니다.`);

let test;     // undefined
test = test ? test : '초기값';    // null, undefined, '', 0, 0.0, {}, []만 false, 나머지는 true
console.log(test);
