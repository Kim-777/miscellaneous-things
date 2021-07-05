console.log('======================================================== 1. Recursion and stack ========================================================');


console.log('======================================================== 2. Rest parameters and spread syntax ========================================================');


function sumAll(...args) {
    let sum = 0;

    for(let arg of args) sum += arg;

    return sum;
}

// 나머지 매개변수는 항상 파라미터 마지막에 위치하고 있어야 합니다.

console.log(sumAll(1,2,3,4));

// spread 문법은 이터러블 객체의 요소를 나열해주는 것 입니다. 꼭 배열이 아니라 이터러블 객체라는 것 알아두기.
let arrayForSpread = [1, 2, 3, 4 ,5];
console.log(Math.max(...arrayForSpread));



console.log('======================================================== 3. Variable scope, closure ========================================================');
// 자바스크립트는 함수 지향 언어. 생성한 함수를 다른 함수에 인수로 넘길 수 있으며, 생성된 곳이 아닌 곳에서 함수를 호출할 수도 있기 때문입니다.
// 자바 명세에는 렉시컬 환경이라는 엔진이 사용하는 객체가 존재.
// 자바스크립트는 쉽게 중첩(nested) 함수를 만들 수 있습니다.

function fnForNested (firstName, lastName) {

    function getFullName() {
        return firstName + " " + lastName;
    }

    console.log(`Hello, ${getFullName()}`);
    console.log(`Bye ${getFullName()}`);
}

let firstNameForNested = 'YeChan';
let lastNameForNested = 'Kim'

console.log(fnForNested(firstNameForNested, lastNameForNested));


const makeCounterForNested = () => {
    let count = 1;
    console.log('makeCounterForNested');

    return function() {
        return count++;
    };
}


let counter = makeCounterForNested();

console.log(counter());
console.log(counter());
console.log(counter());

// 실행 중인 함수, 코드 블록({...}), 스크립트 전체는 렉시컬 환경이라 불리는 내부 숨김 연관 객체(internal hidden associated object)를 갖습니다.
// 렉시컬 환경 객체는 두 부분으로 구성 됩니다. 1. 환경 레코드 - 모든 지역 변수를 프로퍼티로 저장하고 있는 객체. this 값과 같은 기타 정보도 여기에 저장 2. 외부 렉시컬 롼경에 대한 참조 - 외부 코드와 연관됨.




console.log('======================================================== 4. The old "var" ========================================================');


console.log('======================================================== 5. Global object ========================================================');


console.log('======================================================== 6. Function object, NFE ========================================================');


console.log('======================================================== 7. new ========================================================');


console.log('======================================================== 8. setTimeout, setInterval ========================================================');


console.log('======================================================== 9. Decorator, forwarding, call/apply ========================================================');


console.log('======================================================== 10. Function binding ========================================================');


console.log('======================================================== 11. Arrow Functions revisited ========================================================');