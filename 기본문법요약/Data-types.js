console.log('======================================================== 1. number ========================================================');

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

console.log('======================================================== 2. string ========================================================');

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

console.log('======================================================== 3. array ========================================================');


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



console.log('======================================================== 4. map, set ========================================================');


// 4. map, set

let map = new Map();
let keyObject = {hi: "hi", bye: 'bye'}
map.set("string", "스트링도 가능합니당~");
map.set(keyObject, "객체도 키로 사용할 수 있습니다.");
let takenFromKey = map.get(keyObject);
console.log(takenFromKey);
console.log(keyObject);
console.log(map.has(keyObject));
map.delete(keyObject);
console.log(map); 

// map의 set 메서드는 자기 자신을 return 하기 때문에 chaining 가능.
map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool')


// 맵의 요소에 반복 작업하기   keys(), values(), entries()
console.log(map.keys());
console.log(map.values());
console.log(map.entries());


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);


for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}

for (let amount of recipeMap.values()) {
    console.log(amount);
}

for (let entry of recipeMap) {
    console.log(entry);
}


// 평범한 객체를 가지고 맵을 만들고 싶다면 Object.entries(obj)를 활용. 객체의 키-값 쌍을 요소로 가지는 배열을 반환

let objForMap = {
    name: 'jonnnnn',
    age: 30,
}


let mapFromObject = new Map(Object.entries(objForMap));
console.log(mapFromObject);


// 맵을 객체로 바꾸기 위해선 Object.fromEntries를 사용하면 됨.
let prices = Object.fromEntries([
    ['banana', '바나나'],
    ['orange', '오랑지'],
    ['meat', '고기'],
]);

console.log(prices.orange);


// set은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션.
let set = new Set();
set.add('1');
set.add('2');
set.delete('2'
)

console.log('================================================================================================================');

