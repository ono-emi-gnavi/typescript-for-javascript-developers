export {};

// 名前空間
// class = フォルダ
// 同じパスに同じ名前のファルダを作成することができない
// Aフォルダの下にCファイル、Bフォルダの下にCファイル　といったことはできる

namespace Japanese {
  export namespace Tokyo {
    export class Person{
      constructor(public name: string){}
    }
  }
  export namespace Osaka {
    export class Person{
      constructor(public name: string){}
    }
  }
  // export を追記しないと外からアクセスができない
  export class Person{
    constructor(public name: string){}
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string, 
      public middleName :string, 
      public lastName: string
      ){}
  }
}
// Person が namespace配下に移動したため、エラーになる
// const me = new Person('はむさん');

const me = new Japanese.Person('はむさん');
console.log(me.name);

const michael = new English.Person('Michael', 'Joseph' ,'Jackson');
console.log(michael);

const meJapanese = new Japanese.Tokyo.Person('はむさん');
console.log(meJapanese);

const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka);