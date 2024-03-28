const os = require('os');

console.log(os.hostname(), os.platform(), os.type());

const url = new URL('https://www.hanbit.co.kr/store/books/look.php?p_code=B2955421742')
console.log(url.href);
console.log(url.protocol);
console.log(url.pathname);
console.log(url.search);
console.log(url.searchParams);
