//CommonJS, every file is module(by default)
//Modules - Encapsulated Code(only share minimun)
const name = require('./04-names.js')
const sayHi = require('./05-utils')
const data = require('./06-alternativ-flaver')

console.log(data);

require('./07-Mind-Grined') //output -> The sum is :11
console.log(name); 

sayHi('susan')
sayHi(name.john)
sayHi(name.peter)
  