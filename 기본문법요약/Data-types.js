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
set.delete('2');

console.log('======================================================== 5. weakMap, weakSet ========================================================');

// weakMap의 key는 반드시 객체여야 함
let weakMap = new WeakMap();
let objForWeakMapKey = {};
weakMap.set(objForWeakMapKey, "워크맵의 키는 반드시 객체여야 합니다.");


console.log('======================================================== 6. Object.keys, values, entries ========================================================');
//  keys, values, entries를 사용할 수 있는 자료구조는 Map, Set, Array 세가지.
// 일반 객체에선 Object.keys(obj), Object.values(obj), Object.entries(obj)를 사용해야 합니다.

let userForObject = {
    name: 'bibi',
    age: 30
}

for(let value of Object.values(userForObject)) {
    console.log(value);
}


prices = {
    banana: 1,
    orange: 2,
    meat: 4,
}


let doublePrices = Object.fromEntries(Object.entries(prices).map(([key, value]) => [key, value * 2]));
console.log(doublePrices);


console.log('======================================================== 7. destructuring assignment ========================================================');

let arrForDestructuring = ["gugu", 'bubu', "nono", "lili"];
let [first, second, third, four] = arrForDestructuring;
console.log(first, second, third, four);

let optionsForDestructuring =  {title: "Menu"};

let {width:w = 100, height:h = 200} = optionsForDestructuring;    // = 를 통해 default 값을 설정해 줄 수 있습니다. : 통해 key 네임을 바꾸어서 구조 분해 할 수 있습니다.
// console.log(width, height, title);
console.log(w, h);


optionsForDestructuring.height = 200;
optionsForDestructuring.width = 100;
console.log(optionsForDestructuring);
let {title, ...rest} = optionsForDestructuring;
console.log(rest);


console.log('======================================================== 8. Date ========================================================');
let now = new Date();
console.log(now);
console.log(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
console.log(new Date().getTimezoneOffset());


console.log('======================================================== 9. JSON ========================================================');

let userForJSON = {
    name: "jonn",
    age: 30,
    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
}

console.log(userForJSON); //콘솔은 객체 자체를 string화 해서 출력하기 때문에 alert과 다르게 toString() function도 로깅됨.
console.log(JSON.stringify(userForJSON));   // JSON-encoded, serialized, stringified, marshalled라고 불림

//  JSON은 데이터 교환을 목적으로 만들어진 언어에 종속되지 않는 포맷. 자바스크립트 특유의 객체 프로퍼티는 JSON.stringify가 처리할 수 없음. ex) 함수, 심볼, undefined
