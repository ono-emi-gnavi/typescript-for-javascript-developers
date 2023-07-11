export {};
// 49.ジェネリクス関数

// const echo = (arg:number):number => {
//   return arg;
// };

// const echo = (arg:string):string => {
//   return arg;
// };

// T は抽象的な型。型引数
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

// classでGenerics

// class Mirror{
//   constructor(public value:number){}
//   echo(): number {
//     return this.value;
//   }
// }
class Mirror<T>{
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}
console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, Generics!').echo());
console.log(new Mirror<boolean>(true).echo());
