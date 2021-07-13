// Prototype



console.log("================================= 1. 프로토타입 상속 =================================");
// 프로토타입 상속
// [[Prototype]]
//  객체는 [[Prototype]]이라는 숨김 프로퍼티를 갖습니다. 이 숨김 프로퍼티 값은 null이거나 다른 객체에 대한 참조가되는데, 다른 객체를 참조하는 경우 참조 대상을 '프로토타입'이라 부릅니다.
// 자바스크립트 엔진은 객체에 해당 프로퍼티가 없으면 자동으로 프로토타입에서 프로퍼티를 찾습니다. 이러한 기능을 '프로토타입 상속'이라 부릅니다.
// __proto__를 통해 [[Prototype]]을 가져오고(getter), 설정(setter)할 수 있습니다.

let animal = {
    name: "동물",
    eats: true,
    walk() {
        console.log(`${this.name}이(가) 걷습니다.`)
    }
};
let lion = {
    name: "호랑이",
    jumps: true,
    hunting: true,
}
lion.__proto__ = animal;
console.log(lion.eats); // true
console.log(lion.__proto__); // { eats: true }
lion.walk();
// 프로토타입에서 상속받은 프로퍼티를 '상속 프로퍼티'라고 합니다.
// 프로토타입 체인은 더 길어질 수도 있습니다.


let animal2 = {
	hunting() {
		if(!this.isFull) {
				console.log('사냥을 합니다.');
		} else {
				console.log('배가 불러서 낮잠을 잡니다.');	
		}
	},
	eating() {
		this.isFull = true;
	}
};

let lion2 = {
	name: "무서운 사자",
	__proto__: animal2,
}

lion2.eating();

lion2.hunting(); // "배가 불러서 낮잠을 잡니다."
animal2.hunting(); // "사냥을 합니다."