// function logMessage(value: string) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100); // 오류

// 유니온 타입(|): 하나의 타입 이상을 쓸 수 있음
var seho: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
function askSomeone(someone: Developer | Person) {
    someone.name
    // someone.age // 오류
    // someone.skill // 오류
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발' })
askSomeone({ name: '캡틴', age: 100 })

// 인터섹션 타입(&)
var capt: string & number & boolean; // never
function askSomeone_inter(someone: Developer & Person) {
    someone.name
    someone.age
    someone.skill
}
// askSomeone_inter({ name: '디벨로퍼', skill: '웹 개발' }) // 오류
askSomeone_inter({ name: '디벨로퍼', skill: '웹 개발', age: 34 })