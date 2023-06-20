export {};
// 裏技
// 初期化処理の簡略化

// 従来の初期化処理
// class Person {
//   public name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// 初期化処理の簡略化（TS独特の機能）
class Person {
  // 初期化処理の簡略化の場合は publicは省かない
  constructor(public name: string, protected age: number) {}
}

const me = new Person('はむさん', 43);
console.log(me);
