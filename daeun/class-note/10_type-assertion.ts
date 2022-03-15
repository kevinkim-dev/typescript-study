// 타입 단언(type assertion)
var a;
a = 20;
a = 'a';
var b = a; // b: any로 추론
var b2 = a as string; // b2: string으로 추론

// DOM API 조작
var div = document.querySelector('div'); // div: HTMLDivElement | null 로 추론
var div2 = document.querySelector('div') as HTMLDivElement;