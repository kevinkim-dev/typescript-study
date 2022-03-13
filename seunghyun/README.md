# 타입스크립트 스터디

- 강의: [인프런 타입스크립트 입문 -by 캡틴판교](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%85%EB%AC%B8/dashboard)
- 교안: [타입스크립트 핸드북](https://joshua1988.github.io/ts/intro.html)

## 타입스크립트 소개와 배경

- [공식문서](https://www.typescriptlang.org/)

### 타입스크립트?

- 자바스크립트에 타입을 부여한 언어이자 확장된 언어
- 브라우저에서 실행하려면 컴파일이 필요

### 왜 써야하는가?

- 타입이 생기면서 자바스크립트에서 생겼던 실수등을 화면에서 확인하기 전에 잡을 수 있다.
  - 타입을 틀리는 경우
  - 오탈자가 생기는 경우
  - 함수의 argument와 반환값에 대한 실수를 잡을 수 있다.
- 타입을 정의하면서 해당 타입에 제공되는 함수를 자동완성 할 수 있어서 작성이 빨라진다.

### 자바스크립트를 타입스크립트 처럼 코딩하기

- /\*\* 후 자동완성되는 javascript doc을 이용해서 typedef, param, property 등을 정의하면 typescript의 장점을 javascript에서 경험해 볼 수 있다.

<br>
<hr>
<br>

## 타입스크립트 시작하기

### 타입스크립트 프로젝트 시작하는 방법

- tsconfig.json 생성 후 속성 지정해주기

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "noImplicitAny": true
  }
}
```

<br>
<hr>
<br>

## 타입스크립트 기초 - 변수와 함수 타입 정의하기

### 문자열, 숫자, 배열

- 변수 정의시 변수명 뒤에 : <타입> 을 통해서 정의 가능
  - array라면 Array<element type> 을 통해서 정의 가능
  - '<element type>[] = 배열' 과 같이도 정의 가능

### 튜플, 객체, 진위값

- 튜플은 배열과 비슷하지만, 위치마다 다른 타입이 들어갈 수 있다.
- 객체는 중괄호와 : object로 선언한다
  - 객체 property도 타입을 지정하고 싶다면, 중괄호 한번 더 사용
- 진위값은 boolean으로 정의


### 함수

- 함수는 parameter 반환값을 모두 타입 정의를 해줄 수 있다
- 정의된 parameter 이상이 들어오면 오류로 알려준다
  - ?표를 사용해서 정의한 optional parameter를 통해서 갯수의 다양성을 줄 수 있다

### 인터페이스
- 미리 속성을 정의하므로써 중복된 긴 타입 명시를 해결할 수 있다.
```typescript
interface User {
  name: string,
  age: number,
  address: string
}
```
- 함수도 인터페이스로 parameter를 먼저 정의하고 사용할 수 있다.
```typescript
interface SumFunction {
  (a: number, b:number): number
}

var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a + b;
}
```

### 타입 별칭
- 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미
- type으로 정의하면 이름 위에 마우스를 올렸을 때 type 구조 확인 가능
  - 하지만 type이 확장이 불가능하기 때문에 interface로 사용하는 것을 추천


### 연산자를 이용한 타입 정의
- | 를 이용하여 타입을 여러개 사용하도록 정의할 수 있다.
  - 인터페이스나 타입별칭을 | 로 연결한 경우 공통부분만 지원하므로 타입가드 이용 권장
  - 인자로 넘길때는 | 로 연결된 타입 별칭중 하나는 만족시키게 넘겨야한다
- & 를 이용하여 타입 별칭을 연결 한 경우, 합집합처럼 모든 속성을 지원한다
  - parameter를 넘길 때 모든 속성을 다 가진 객체를 넘겨야 한다.

### 이넘(Enums)
- 특정 값들의 집합을 의미하는 자료형
- 타입 지정을 하지 않으면 기본은 number
- 변수에 값을 지정하면 그 타입에 맞춰서 지정된다.

### 클래스
- constructor로 지정한 것은 객체가 생길 때 실행되는 코드
- __proto__를 이용해서 상속기능을 사용할 수 있다.
  - proto로 상속받은 속성은 변경 불가능, console에서 __proto__로 한단계 더 내려가야 볼 수 있다.
- ts의 클래스는 시작할 때 attribute를 정의해 줘야 한다.
  - private, public, readonly 를 사용해서 다양하게 제작 가능

### generic
- 재사용성이 높은 컴포넌트를 만들때 자주 활용하는 특징
  - 여러가지 타입이 동시에 들어올 때 출력에 함수를 사용할 경우 제약이 생김
- 호출하는 순간 들어온 parameter의 타입을 저장해서 출력도 같은 타입으로 내보냄
- interface에도 generic을 적용할 수 있다
  - generic을 적용할 속성에 T를 적어서 사용