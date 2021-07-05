// 배열 만들기 
let shopping = ["book", "milk", "ball", "noodles"]; 
let mess = [{name: "김예찬", age: 29}, 2, "안녕하십니까!"] // 배열의 요소엔 다양한 데이터 유형을 저장할 수 있음


// 배열 항목의 접근과 수정
shopping[0]; // returns "book"
// 배열의 각 요소에 접근 할땐 인덱스로 접근해야 합니다. 인덱스는 0부터 시작합니다.

shopping.length // length 프로퍼티를 이용해 배열의 크기를 알 수 있습니다.

// 위의 배열의 특성은 배열을 for문과 같은 반복문과 같이 사용되어지기에 최적화 되어 있습니다.


// 배열 내부에 배열이 들어 갈수도 있습니다.
let random = ["1, "2", ["일", "이"]];
random[2][1] // "이"


// pop/push, shift/unshift
let arrayForEx = ["사과", "바나나", "우유", "초코바", "쌀"];

// pop은 마지막 요소를 리턴하며 배열에서 제거 합니다.
arrayForEx.pop(); // "쌀"을 리턴하며 배열에서 제거

// push는 배열의 마지막에 인자로 받은 값을 추가
arrayForEx.push("보리") "보리"를 배열의 마지막에 추가

// shift는 배열의 맨 앞의 요소를 꺼내며 리턴합니다.
arrayForEx.shift(); // "사과"를 리턴하며 배열에서 제거

// unshift는 배열의 맨 앞에 인자를 추가합니다.
arrayForEx.unshift("굴비"); // 배열의 맨 앞에 굴비 추가

// arr.splice(start[, deleteCount, elem1, ..., elemN]);
// start 인덱스부터 deleteCount 만큼 요소를 제거하고 elemN까지의 요소를 추가하고, 제거 된 요소를
// 배열에 담아 리턴
arrayForEx.splice(1, 3, "초코볼", "코코볼") // "바나나", "우유", "초코바" 제거 후 리턴
// ["굴비", "초코볼", "코코볼", "보리"]

// arr.slice([start], [end]) start 인덱스에서 end 인덱스 전까지 요소를 복사한 새로운 배열을 반환
let subArray = arrayForEx.slice(1, 3) // ["초코볼", "코코볼"];

// arr.concat(arg1, arg2...) arr 속한 요소와 인자로 받은 값의 요소나 값을 합해 새로운 배열 리턴
subArray.concat(["카카오볼", "네이버볼"], "라이브볼")
// ["초코볼", "코코볼", "카카오볼", "네이버볼", "라이브볼"]

// arr.forEach(function(item, index, array) {}); 주어진 콜백 함수를 각 요소에서 호출, 사용
let numArr = [1, 2, 3, 4, 5]
numArr.forEach((item, index, array) => { 
	console.log(`${item}은 ${array}의 ${index}번째`); 
})

// indexOf, lastIndexOf, includes 메서드는 문자열에 있는 메서드와 동일하지만 배열의 요소를
// 대상으로 한다는 점만 다릅니다.
let arr = [1, 0, false];
console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1
console.log(arr.includes(1)); // true;

// find, findIndex, 특정한 요소를 찾거나, 요소의 인덱스를 찾는 메서드
let interns = [
	{id: 1, name: "예찬", age: 29},
	{id: 2, name: "보성", age: 28},
	{id: 3, name: "재연", age: 24},
	{id: 4, name: "하경", age: 29},
]

let thirdIntern = intern.find((intern) => intern.id === 3)
console.log(thirdIntern) // {id: 3, name: "재연"}


// filter find가 해당하는 요소 하나를 리턴하는 반면, 조건을 충족하는 모든 요소를 찾아야 한다면
// filter를 사용하면 됩니다.

let oldInterns = interns.filter((intern) => intern.age >= 29)
console.log(oldInterns.length) // 2
 
// map 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환해줍니다.
let whatever = ["zz", "bbb", "eeee", "bbbbb"]
let lengths = whatever.map((item) => item.length);
console.log(legnths) // [2, 3, 4, 5];
 

// reverse 요소를 역순으로 정렬
console.log([1,2,3,4,5].reverse()); [5,4,3,2,1];


// split은 문자의 메서드로 인자 값을 기준으로 문자열을 나눠준 후 배열에 담아서 반환해줍니다.
let names = "yechan, bosung, hakyung, jaeyun";
let arr = names.split(", ");

for (let name of arr) {
	console.log(name+ "안녕!");	
}

// join은 인수(glue)를 접착제처럼 사용해 배열 요소를 모두 합쳐 문자열을 만들어줍니다.
let str = arr.join(';');
console.log(str); // "yechan;bosung;hakyung;jaeyun"


// reduce와 reduceRight는 2번 째 인자 값으로 initial을 받습니다.
// 콜백함수에 각 요소에 반복되는 작업과 그 작업을 통해 반환된 return 값을 다음 요소의
// 첫번째 인수(accumulator)로 넘겨줍니다. 
// 2번째 initial 인수 값이 주어졌다면 첫번째 요소의 accumulator는 그 값이 되고, 주어지지 않았다면
// 첫번째 요소를 initial의 값으로 사용합니다.
// reduceRight는 같은 작업을 요소의 맨 마지막 부분부터 시작하는 메서드입니다.
let arr = [1. 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result) // 15


// Array.isArray
// 자바스크립트의 배열은 독립된 자료형이 아니라 객체형에 속합니다.
// 따라서 typeof 연산자로 배열과 객체를 구분할 수 없습니다.
// Array.isArray(arg)는 arg값이 배열이면 true, 아니면 false 값을 반환해줍니다.

console.log(Array.isArray({})) // false;
console.log(Array.isArray([]) // true;