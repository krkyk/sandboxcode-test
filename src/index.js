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

/**
 * テンプレート文字列
 */
// const name = "太郎";
// const age = 12;

// const message = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message);

/**
 * アロー関数
 */
const func = (value) => {
  return value;
};
console.log(func("アロー関数"));

const func2 = (num1, num2) => {
  return num1 + num2;
};
console.log(func2(2, 5));

/**
 * 分割代入
 */
const myProfile = {
  name: "太郎",
  age: "12"
};

const greeting = `初めまして。私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
const { name, age } = myProfile;
const greeting2 = `初めまして。私の名前は${name}です。年齢は${age}です。`;
console.log(greeting2);

const yourProfile = ["花子", 25];
const [yourName, yourAge] = yourProfile;
const greeting3 = `初めまして。私の名前は${yourName}です。年齢は${yourAge}です。`;
console.log(greeting3);

/**
 * デフォルト値
 */
const sayHello = (name = "メイ") => console.log(`こんにちは！${name}さん！`);
sayHello("サツキ");
sayHello();

/**
 * スプレッド構文
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// 配列をまとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

/**
 * mapやfilterを使用した配列の処理
 */
const nameArr = ["山田", "鈴木", "田中"];
nameArr.map((name) => console.log(name));
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

const nameArr2 = nameArr.map((name) => {
  if (name === "鈴木") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(nameArr2);

const numArr = [1, 2, 3, 4, 5];
const numArr2 = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(numArr2);

/**
 * 三項演算子
 */
const value1 = 1 > 0 ? "正" : "誤";
console.log(value1);

const num = 1300;
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力して下さい。";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です。";
};
console.log(checkSum(50, 60));
console.log(checkSum(50, 30));

/**
 * 論理演算子
 */
// ||は左側がfalseとなるとき右側を返す
const number = null;
const fee = number || "金額未確定です。";
console.log(fee);

// &&は左側がtrueなら右側を返す
const number2 = null;
const fee2 = number2 && "何か設定されました";
console.log(fee2);
