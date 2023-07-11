export {};
// 48.型の互換性

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible)

fooCompatible = barCompatible;

console.log(typeof fooCompatible)

let fooIncompatible: string;
let barIncompatible: number = 1;

// 型の互換性がない
// fooIncompatible = barIncompatible;

let fooString: string;
let barString:string = 'string';

fooString = barString;


// 文字列リテラル型（文字列型の一部）
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral:1976 = 1976;

fooNumber = fooNumberLiteral;



interface Animal{
  age: number;
  name: string;
}
class Person {
  constructor(public age:number,public name:string){}
}

let me: Animal;
me = new Person(43,'Ham');

console.log(me);