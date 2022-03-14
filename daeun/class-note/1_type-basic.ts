//JS 문자열 선언
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Caot', 'Thor', 'Hulk'];
let items: number[] = [1, 2, 3];

// TS 튜플 : 모든 인덱스에 타입이 정의되어있는 배열
let address2: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
let person: object = {
    name: 'capt',
    age: 100
};
let person_type: {name: string, age:number} = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show: boolean = true;
