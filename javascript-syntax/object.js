let user = {
    name: 'john',
    age: 30,
}


user.sayHi = function() {
    console.log('안녕하세요');
}

user.sayHi();


// 생성자 함수와 일반 함수에는 기술적 차이가 없음. 하지만 두 관례를 따름
//  1. 함수 이름의 첫 글자는 대문자
//  2. new라는 연산자를 붙여서 실행

function User(name) {
    this.name = name;
    this.isAdmin = false;
}


let bora = new User('보라');
console.log(bora.name);

// 심볼형 : 유일한 식별자를 만들고 싶을 때 사용
// Symbol(); 심볼 이름을 파라미터로 넣어줄 수 있음
let id = Symbol("id");

// 유일성이 보장되기 때문에 같은 이름을 넣어줘도 심볼 값은 다릅니다.
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2);

// 심볼은 자동으로 형 변환이 되지 않음

// Symbols in a literal
//  리터럴을 사용해 객체를 만들 경우, 대괄호를 사용해 심볼형 키를 만들어야 함.
let user2 = {
    name: 'Yechan',
    [id]: 123
}


// 전역 심볼 : 전역 심볼 레지스트리 안에 심볼들을 만들어 놓고, 심볼에 접근하면 항상 동일한 심볼을 반환해줌
let idFirst = Symbol.for("id");
console.log(idFirst);
let idAgain = Symbol.for('id');
console.log(idFirst === idAgain);