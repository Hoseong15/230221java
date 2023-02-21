const loginform = document.querySelector('#login-form')
const logininput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')



function onSubmit(e) {
  e.preventDefault();
  localStorage.setItem('username', logininput.value);
  greeting.innerHTML = 'Hello' + logininput.value;
  greeting.classList.remove('hidden');
  loginform.classList.add('hidden');
  
}

loginform.addEventListener('submit', onSubmit);
// 1)로컬스토리지를 읽어서 이름이 있는지 확인
// 2) 이름이 있으면 h1태그에 "Hello 이름" 출력
// 3. hidden클래스 삭제

const savedUsername = localStorage.getItem('username');
if(savedUsername != null) {
  greeting.innerHTML = 'Hello' + savedUsername;
  greeting.classList.remove('hidden');
  loginform.classList.add('hidden');
}



// 현재날짜
const date = new Date();
console.log(date)


// 기록에 사용하는 시간 원년
const time1 = new Date(0);
console.log(time1)
const time2 = new Date(1313131354678334);
console.log(time2)


// ISO date(국제표준)
const date3 = new Date('2020-07-02')
console.log(date3)
const date4 = new Date('04.08.2015')
console.log(date4)

