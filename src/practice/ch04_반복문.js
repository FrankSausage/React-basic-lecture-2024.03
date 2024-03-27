let fs = ['사과','배','감'];

for (let i = 0; i < fs.length; i++){
    console.log(fs[i]);
}

for (let f of fs){
    console.log(f);
}

var x = 4;  // var은 재선언이 가능
var x = 6;
let y = 4;  // let은 재선언이 안됨
// let y = 6;