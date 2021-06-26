let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
}


const takeItLazy = () => {

    setTimeout(() => {
        console.log('hello there');
    }, 1000);
    // 이벤트 루프를 이해하기 위한 Lazing 처리

    console.log('hello here!');
}


takeItLazy();
// hello here이 먼저 나옴. 그리고 there 출력;