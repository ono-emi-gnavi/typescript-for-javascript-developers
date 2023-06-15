export {};

const kazu = (): number => 43;
let numberAny: any = kazu();
let numberunknown: unknown = kazu();

let sumAny = numberAny + 10;

// タイプガード
// console.log(typeof numberunknown);
if (typeof numberunknown === 'number') {
  let sumUnknown = numberunknown + 10;
  console.log(sumUnknown);
}
