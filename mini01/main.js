let target = document.querySelector('#dynamic');

function randomString() {
  let stringArr = ['Learn to HTML', 'Learn to CSS', 'Learn to JavaScript'];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split('');

  return selectStringArr;
}

// ◎ 타이핑 리셋
function resetTyping() {
  target.textContent = '';
  dynamic(randomString());
}

// ◎ 한 글자씩 텍스트 출력하는 함수
// randomArr: 매개변수(Parameter)
function dynamic(randomArr) {
  // console.log(randomArr);
  // if문: 배열에 문자열이 남아 있다면
  if (randomArr.length > 0) {
    // shift(): 배열의 앞에서부터 출력
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());

// console.log(selectString);
// console.log(selectStringArr);

// ◎ 커서 깜빡임 효과
function blink() {
  target.classList.toggle('active');
}
// blink() 0.5s 주기로실행
setInterval(blink, 500);

// ◎ 클래스를 추가 or 제거
// element.classList.toggle(className)
// element.classList.toggle(className, force)

// force: 부울 값
// true -> 클래스 추가, false -> 클래스 제거
