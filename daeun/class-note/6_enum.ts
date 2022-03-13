// 숫자형 이넘
enum Shoes {
    Nike, // 0
    Adidas, // 1
    Newbalance // 2
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

// 문자형 이넘
enum Shoes_str {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes_str = Shoes_str.Nike;
console.log(myShoes_str); // '나이키'


// 예제
enum Answer {
    Yes = 'Y',
    No = 'N',
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('정답입니다');
    }
    if (answer === Answer.No) {
        console.log('오답입니다');
    }
}
// askQuestion('예스');
askQuestion(Answer.Yes);