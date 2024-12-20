/*
    변수 유효범위
        1. 변수 : 특정한 { } 안에서 선언 하지 않은 변수
        2. 지역 변수 : 특정한 { } 안에서 선언한 변수, 선언된 { } 밖에서 호출 불가능
            { } : if(){}, for(){}, function(){}
        3. 매개 변수 : 함수 호출 시 인자값을 저장하는 변수
*/
// =============전역 / JS 전체 / 대한민국==============
let 전역변수 = '대한민국';
// =============지역 / IF 구역 / 인천광역시============
if(true){
    let 지역변수1 = '인천광역시'
    console.log(전역변수) // 대한민국 ok
    console.log(지역변수1) // 인천광역시 ok
// =============지역 / FOR 구역 / 부평구============
    for(let i = 0; i<=10; i++){
        let 지역변수2 = `부평구`
        console.log(전역변수) // 대한민국 ok
        console.log(지역변수1) // 인천광역시 ok
        console.log(지역변수2) // 부평구 OK
    }
    console.log(전역변수) // 대한민국 ok
    console.log(지역변수1) // 인천광역시 ok
    // console.log(지역변수2) // 부평구 fail
}
// =============지역 / 함수 구역 / 수원============
function 수원(){
    let 지역변수3 = '수원시'
        console.log(전역변수) // 대한민국 ok
        // console.log(지역변수1) // 인천광역시 fail
        // console.log(지역변수2) // 부평구 fail
}
// [1] 활용1
let star = '' // 전역변수
for(let i = 1; i <= 10; i++){
    // let star = '' // 지역변수
    star += '*'; // 누적합계
}
console.log(star);
// for에서 선언된 변수는 for 안에서만 사용하낟.

// [2] 활용2, 사람의 이름을 입력받아 배열에 모두 저장하시오
let 이름배열 = [ ] // 전역변수 배열, 배열은 누적으로 사용하기 위해서
function 등록함수(){
    let 이름 = prompt('이름 : ') // 지역변수, 이름을 입력받아 배열 저장
    이름배열.push(이름); // 지역변수 값을 전역변수 배열에 추가한다
}
// - 입력 1번의 함수가 종료되었을때 변수 몇개?? 데이터 몇개??
// - 이름(지역변수)X, 이름배열(전역변수)O, '유재석'(데이터) O
// - 이름배열 = ['유재석']

// JS파일 사용 범위
// 1. <head> <script src="4_함수.js"></script> </head> 
// body내 마크업들이 구성되기 전에 스크립트 읽어드린다.

// 2. <body> 마크업 가장 하단에 <script src="4_함수.js"></script>
// body 내 마크업들을 구성하고 스크립트 읽어드린다.

// 3. 여러 js 파일이 하나의 html에서 호출할 때 변수/함수 공유(순서는 위에서 아래로)