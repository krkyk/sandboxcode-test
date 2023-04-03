/**
 * const, let　変数宣言
 */
let str = "let変数";
console.log(str);

// letは上書き可能
str = "let変数上書き";
console.log(str);

// letは再宣言不可
// let str = "let変数を再宣言";
// console.log(str);

const str2 = "const変数";
console.log(str2);

// constは上書き不可
// str2 = "const変数を上書き";

// constを再宣言
// const str2 = "const変数を再宣言";
// console.log(str2);

// オブジェクトではプロパティの変更可能
const obj = {
  name: "太郎",
  age: 12
};

obj.name = "はるか";
obj.address = "Hiroshima";
console.log(obj);

// 配列の中身の変更可能
const array = ["dog", "cat"];
array[0] = "rabbit";
array.push("bird");
console.log(array);
