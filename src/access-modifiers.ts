export {};
// class 先頭は大文字
class Parson {
  // アクセス修飾子 public(基本書かない), private
  public name: string;
  // private age: number;
  public age: number;
  protected nationality: string;

  // constructor は returnしないため、また言語仕様のため、戻りはの型は不要
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Parson {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age},nationality: ${this.nationality}`;
    // return `name: ${this.name},nationality: ${this.nationality}`;
  }
}

let taro = new Parson('Taro', 30, 'Japan');
// age も取得できる
console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
