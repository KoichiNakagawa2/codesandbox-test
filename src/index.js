/**
 *  const let 当の変数制限
 */
// var vall = "var変数";
// console.log(vall);

// // var変数を上書き
// vall = "var変数を上書き"
// console.log(vall);

// //var変数は再宣言可能

// var vall = "var変数を再宣言"
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// //let は上書き可能
// val2="let変数上書き";
// console.log(val2);
// //let は再宣言不可能

// const val3 = "cost変数";
// console.log(val3);
//const は上書き不可
// val3= "ccc";
// const val4 = "aaa";

// costで定義したオブジェクトはプロパティの変更が可能
// const val4={
//  name:"koichi弘一",
//  age:45
// };
// console.log(val4);
// val4.name="kn";
// val4.age=44
// val4.address="Osaka"
// console.log(val4);

// costで定義した配列はプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "tig";
// val5.push("monkey");
// console.log(val5);
//react はほとんど const , react では値は state

/**
 * テンプレート文字列
 *
 */
// const name = "こういち"
// const age = 56;
// // 私の名前はこういちですねんれいは５６歳

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です"
// console.log(message1);

// // テンプレート文字列を用いる
// const message2 = `私の名前${name}です`
// console.log(message2)

/**
 * アロー関数
 * 従来の関数
 */
// // function func1(str){
// //  return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1desu"));

// //アロー関数
// // 書き方は２種類
// const func2 = (str) =>  str;

// console.log(func2("aaafunc2"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }
// console.log(func3(3,7));

/** 分割代入
 * ES2005
 *
 */

// const mayProfile = {
//   name:"Koichi",
//   age:56
// }
// const message1 =`名前は${mayProfile.name}です、年齢は${mayProfile.age}です。`;
// console.log(message1);

// //分割代入
// const{name,age}=mayProfile;
// const message2 =`名前は${name}です、年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['aaa',45];
// const message3 = `名前は ${myProfile[0]}です。`;
// console.log(message3);
// const [name,age]=myProfile;
// const message4 = `名前は${name}で、年齢は${age}です、`;
// console.log(message4);

/**
 * デフォルト値
 *
 */
// const sayHello = (name ="あゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello();
// sayHello("こういい")

/**
 * スプレッド構文 どうする
 * */
//配列の展開
// const arr1 = [1,2];
// //console.log (arr1);
// //console.log(...arr1);
// // 1, 2 という表示　順番に展開してくれる

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// //sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//展開の反対でまとめる
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// console.log(num2);

// const arr8 = arr2;
/**
 * map やフィルター
 *
 *
 */
const nameArr = ["たな", "やま", "なか"];
//  for (let index = 0; index < nameArr.length;index++){

//    console.log(`${index}番目は${nameArr[index]}`);
//  }
// const nameArr2 = nameArr.map((name)=>{
//   return name ;
// })
// console.log(nameArr2);
//nameArr.map((name,index) => console.log(`${index}番目は${name}です`));

// const numArr = [1,2,3,4,5,6]
// const numArr3 = numArr.filter((num) => {
//   return num % 2 === 0;
// }
// )
// console.log(numArr3)
const nameArr3 = nameArr.map((name) => {
  let rname;
  if (name === "なか") {
    rname = `${name}がわ!}`;
  } else {
    rname = name;
  }
  return rname;
});
console.log(nameArr3);

/**三項演算子
 *
 *
 */
// ある条件 ? 条件がtrueの時、条件がfalse の時
// const val1 = 1 > 0 ? `trueです`:`falseです`;
// console.log(val1)

// const num = 1699300;
// //console.log(num.toLocaleString())
// const formateNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力";
// console.log(formateNum);
/**
 * 論理演算子
 * && ||
 *
 */
const flag1 = true;
const flag2 = TransformStreamDefaultController;
// || は左側がfalse の時、右側を返却

if (flag1 || flag2) {
  console.log("1か２がtrue");
}
// 左側が true なら右側を返す
if (flag1 && flag2) {
  console.log("1か２両方true");
}
