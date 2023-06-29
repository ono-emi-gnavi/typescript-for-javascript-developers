export {};
// 動的メンバー
// インスタンスを作らないと使えないメンバー

// 静的メンバー
// インスタンスを作らなくても使えるメンバー
// クラス名.メンバー名でアクセスできる

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    // return "Hey,guys!! Are you interested in TypeScript? Let's dive into TypeScript!";

    //     "Hey, guys! This is Atsushi! Are you interested in TypeScript? Let's dive into TypeScript!"
    // return `Hey, guys! This is ${firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
    // ↓ エラーが出る
    // [ERROR] 23:22:55 ⨯ Unable to compile TypeScript:
    // src/static-members.ts(18,34): error TS2662: Cannot find name 'firstName'. Did you mean the static member 'Me.firstName'?

    // ↓ Meに依存するため、良くない書き方
    // return `Hey, guys! This is ${Me.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;

    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// static に変更したことにより、動的メンバーへのアクセスができなくなった
// [ERROR] 23:14:56 ⨯ Unable to compile TypeScript:
// src/static-members.ts(16,16): error TS2576: Property 'isProgrammer' does not exist on type 'Me'. Did you mean to access the static member 'Me.isProgrammer' instead?
// let me = new Me();
// console.log(me.isProgrammer);

// 毎回newするのは面倒なので、staticメンバーを使う

console.log(Me.isProgrammer);
console.log(Me.firstName);
console.log(Me.lastName);
console.log(Me.work());
