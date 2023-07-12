export {};
// 53. インデックスシグネチャ index signature

// 従来の書き方
// let profile: { name?: string } = {};

// How to write index signature
// { [ index: typeForIndex ]: typeForValue }
// let profile: { [index: string]: string } = {};
// number も追記
// let profile: { [index: string]: string | number } = {};

// interface
interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}
let profile: Profile = { name: 'Ham', underTwenty: false };

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
