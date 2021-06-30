// 1. 숫자형
let billion = 1e9;
console.log(billion);
let ms = 1e-6;
console.log(ms);

// toString()
let num = 255;
console.log(num.toString(16));
console.log(num.toString(2));

// 어림수 구하기
let num2 = 1.23456;
console.log(Math.floor(num2));
console.log(Math.ceil(num2));
console.log(Math.round(num2));
console.log(Math.trunc(num2));  // 소수부 무시
console.log(num2.toFixed(3));   // 인수 만큼의 소수부로 반올림한 후 문자로 반환해줌.

//  부정확한 계싼
console.log(0.1+0.2 == 0.3);    // 정밀도 손실

//  isNaN(), isFinite()
console.log(isNaN('str'));
console.log(isNaN(' '));
console.log(isFinite(' '));

// 2. 문자열
let single = '작음따음표';
let double = "큰따음표";
let backticks = `백틱`;

let str = `Widget with id`;
console.log(str.charAt(str.length - 1));
console.log('Interface'.toUpperCase());
console.log('Interface'.toLowerCase());

console.log(str.indexOf('id', 2));

str = 'As sly as a fox, as strong as an ox';
let target = 'as'

let pos = 0;
while(true) {
    let foundPos = str.indexOf(target, pos);
    if(foundPos == -1) break;

    console.log(`위치 : ${foundPos}`);
    pos = foundPos + 1;
}


// 3. 배열
let arr1 = new Array();
let arr2 = [];

arr1.push("hi", "hell", "bye");
console.log(arr1.length);

for (let i =0 ; i < arr1.length; i++) {
    console.log(arr1[i]);
}

console.log(arr1.splice(0, 1, "nono", "gogo"));
console.log(arr1);

let arrayLike = {
    0: "something",
    1: "else",
    2: "??",
    [Symbol.isConcatSpreadable]: true,
    length: 3
};

console.log(arr1.concat(arrayLike));
