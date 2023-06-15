export {};

// 月〜日の7つの文字列のみ規制したい
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek = '月';
// エラーが出る
// dayOfTheWeek = '31';

// 1~12の数字
let mounth: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
mounth = 12;
// エラーが出る
// mounth = 13;

// trueのみ
let TRUE: true = true;
// エラーが出る
// TRUE = false;