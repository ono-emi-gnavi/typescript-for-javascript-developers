export {};

// class 先頭は大文字
class Parson {
  name: string;
  age: number;

  // constructor は returnしないため、また言語仕様のため、戻りはの型は不要
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Parson('Taro', 30);
// let hanako = new Parson();

console.log(taro.profile());
