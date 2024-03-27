const anno = function() {
    console.log('익명 함수');
}
function named() {
    console.log('선언적 함수');
}

anno(); named();

const arrow = () => {
    console.log('화살표 함수, 람다 함수');
}

arrow();

// 파라미터가 있으면 () 생략 가능
const param1 = x => {
    console.log('x=' + x);
}
param1(5);

// 함수 내부의 실행문이 return 한 개 밖에 없으면 {}와 return 생략 가능
const add = (a, b) => a + b;
console.log(add(5,10));

const fn = (name, count) => {
//    if(count == undefined) {
//        count = 0;
//    }
//    count = count ? count : 0;
    count = count || 0;
    console.log(`${name}, ${count}`);
}
fn('apple', '5');
fn('banana');

function call3Times(callback) {
    for(let i = 0; i < 3; i++) {
        callback();
    }
}

//call3Times(anno);
//call3Times(named);

call3Times(function() {
    console.log('콜백 함수로 직접 익명 함수 생성');
});

call3Times(()=>{ console.log('콜백 함수로 화살표 함수 생성')});

setTimeout(() => {
    console.log(`1000ms 이후에 실행됩니다.`);
}, 1000);
const si = setInterval(() =>{
    console.log(`0.5초마다 실행됩니다.`);
}, 500);
setTimeout(() => {      // 3.1초후에 반복 실행되는 코드를 없앰
    clearInterval(si);
    console.log('3.1초 후에 반복 실행되는 코드를 없앴습니다.');
}, 3000);

for(let i = 0; i < 10; i++){
    console.log('====');
}

console.log('123');