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
// 자바스크립트에서 함수는 이곳저곳 전달될 수 있고, 객체로도 사용될 수 있습니다. 

// 코드 변경 없이 캐싱 기능 추가하기
function slow(x) {
    console.log(`slow(${x})을/를 호출함`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if(cache.has(x)) {
            return cache.get(x);
        }

        let result = func(x);

        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);
console.log(slow(1));
console.log("다시 호출: " + slow(1));

console.log(slow(2));
console.log("다시 호출: " + slow(2));

//  바깥 코드에서 봤을 때, 함수 slow는 래퍼로 감싼 전후 동일한 일을 수행합니다. 단순히 캐싱 기능이 추가된 것 뿐입니다.

// 위에서 구현한 캐싱 데코레이터는 객체 메서드에선 제대로 작동하지 않습니다.
let worker = {
    someMethod() {
        return 1;
    },
    slow(x) {
        console.log(`slow(${x})를 호출했습니다.`);
        return x * this.someMethod();
    }
}

console.log(worker.slow(1));
// worker.slow = cachingDecorator(worker.slow)는 에러를 발생 시킵니다. worker.slow 메서드에서 호출하는 this의 컨텍스트를 잃어 버리기 때문입니다.
// func.call(context, arg1, arg2, ...)로 context(this)를 고정해줄 수 있습니다.

function sayAnimal(howSound) {
    console.log(this.animal, " ", howSound);
}


let rabbit = {
    animal: "토끼"
}

let bear = {
    animal: "곰"
}

sayAnimal.call(rabbit, "욤욤");
sayAnimal.call(bear, "그르르릉");


// 이제 cachingDecorator의 인수로 들어오는 함수가 context를 잃지 않게 수정해 보겠습니다!
function cachingDecorator2(func) {
    let cache = new Map();

    return function(x) {
        if(cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x); // call의 인수로 context를 바인딩 해주었습니다!
        cache.set(x, result);
        return result;
    }
}
worker.slow = cachingDecorator2(worker.slow);
console.log(worker.slow(1));
console.log(worker.slow(1));

// 인수의 계수가 1개가 아닌 2개 이상의 경우를 고려하여 다시 cacingDecorator를 업그레이드 해주겠습니다.
let worker3 = {
    slow(min, max) {
        console.log(`worker3 데코레이팅 민: ${min}, 맥스: ${max}`);
        return min + max;
    }
}

function cachingDecorator3(func, hash) {
    let cache = new Map();
    return function() {
        let key = hash(arguments);
        if(cache.has(key)) {
            return cache.get(key);
        }
        let result = func.call(this, ...arguments);

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return args[0] + ',' + args[1];
}

worker3.slow = cachingDecorator3(worker3.slow, hash);

console.log(worker3.slow(3, 5));
console.log("다시 호출: " + worker3.slow(3, 5));


// func.call(this, ...arguments) 대신 func.apply(this, arguments)를 사용해도 됩니다.
// call과 apply의 문법적 차이는 call이 복수 인수를 따로따로 받는 대신 apply는 인수를 유사 배열 객체로 받는다는 것 뿐입니다.
// 이처럼 컨텍스트와 함께 인수 전체를 다른 함수에 전달하는 것을 콜 포워딩(call forwarding)이라고 합니다.




console.log('======================================================== 10. Function binding ========================================================');

// 사라지는 'this'
let user10 = {
    firstName: "준",
    sayHi() {
        console.log(`안녕, ${this.firstName}!`);
    }
};
setTimeout(user10.sayHi, 1000); // 안녕, undefined!
let boundFunc = user10.sayHi.bind(user10);
setTimeout(boundFunc, 1000); // 안녕, 준!




console.log('======================================================== 11. Arrow Functions revisited ========================================================');

// 화살표 함수는 단순히 함수를 '짧게' 쓰기 위한 용도로만 쓰이지 않습니다. 
// 자바스크립트에선 함수를 생성하고 그 함수를 어딘가에 전달하는 것이 아주 자연스럽습니다. 이때 함수가 컨텍스트를 잃을 수 있는데, 화살표 함수를 사용하면 현재 컨텍스트를 잃지 않아