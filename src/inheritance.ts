export {};

// 継承クラス
class Animal {
  constructor (public name: string){}
  run(): string{
    return 'I can run';
  }
}

class Lion extends Animal{
  // コンストラクタに  public speed: number を追加
  public speed: number;
  // 上記を記載することで、constructor() 内にある public を削除できる
  constructor ( name: string, speed: number){
    // 親クラスのコンストラクタを呼び出す
    // スーパークラスのコンストラクタを呼び出す
    super(name);
    //  コンストラクタに  public speed: number を追加
    // [ERROR] 23:56:34 ⨯ Unable to compile TypeScript:
    // src/inheritance.ts(29,13): error TS2554: Expected 2 arguments, but got 1.

    // 初期化処理
    this.speed = speed;
  }
  run():string {
    return `${super.run()} ${this.speed}km`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion;
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba',80).run());

// メソッドのオーバーライド