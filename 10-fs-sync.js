const fs = require('fs')

const first = fs.readFileSync('./context/first.txt', 'utf8')
const second = fs.readFileSync('./context/second.txt', 'utf8')

console.log(first,second);

fs.writeFileSync('./context/results.txt','here is resule :' + first + second , {flag : 'a+'})
