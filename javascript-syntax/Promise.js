// Promise 반환하기
// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// }).then(function(result) {
//     console.log(result);
//     return new Promise((resolve, rejectr) => {
//         setTimeout(() => resolve(result * 2), 1000);
//     })
// }).then(function(result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result * 2), 1000);
//     });
// }).then((result) => {
//     console.log(result);
// })


// thenable
// class Thenable {
//     constructor(num) {
//         this.num = num;
//     }

//     then(resolve, reject) {
//         console.log(resolve);
//         setTimeout(() => resolve(this.num * 2), 1000);
//     }
// }

// new Promise(resolve => resolve(1))
//     .then(result => {
//         return new Thenable(result)
//     })
//     .then(console.log);


// fetch와 체이닝 함께 응용하기
/*
fetch('/article/promise-chaining/user.json')
    .then(function(response) {
        // response.text()는 응답 텍스트 전체가 다운로드되면
        // 응답 텍스트를 새로운 이행 프라미스를 만들고, 이를 반환합니다.
        return response.text();
    })
    .then(function(text) {
        console.log(text); // 원격에서 받아온 파일의 내용
    })
*/

// fetch('/article/promise-chaining/user.json')
//     .then(response => response.json())
//     .then(user => console.log(user.name));



/// async, await
async function fnForAwait() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료되었습니다!"), 1000);
    });

    let result = await promise; //자바스크립트는 이 포인트에서 프라미스가 이행될 때까지 기다리게 됩니다.

    console.log(result);
}

fnForAwait();