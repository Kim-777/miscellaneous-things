// Proxy
//  Proxy는 특정 객체를 감싸 프로퍼티 읽기, 쓰기와 같은 객체에 가해지는 작업을 중간에서 가로채는 객체로, 가로채진 작업은 Proxy 자체에서 처리되기도 하고, 원래 객체가 처리하도록 그대로 전달되기도 합니다.
// 프락시는 다양한 라이브러리와 몇몇 브라우저 프레임워크에서 사용되고 있습니다. 이번 챕터에선 프락시를 어떻게 실무에 적용할 수 있을지 다양한 예젤ㄹ 통해 살펴보겠습니다.

let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;
console.log(target.test);


let user = {
    name: "김예찬",
    age: 29
};


console.log(user.name)

user.sayHi = function () {
    console.log("안녕하세요! 김예찬이라고 합니다.")
}