let out = document.querySelector('.out');
let out1 = document.querySelector('.out-1');
let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let arrMonth = ['Декабря', 'Января', 'Февраля', 'Марта', 'Апреля', 'Мая',
  'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября'
];

function getFullTime1() {
  let nowDate = new Date();
  let textSecond = 'секунд';
  let textMinutes = 'минут';
  let textHours = 'час';
  let year = nowDate.getFullYear();
  let month = arrMonth[nowDate.getMonth() + 1];
  let day = nowDate.getDate();
  let textDay = days[(nowDate.getDay())];
  let hours = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let seconds = nowDate.getSeconds();
  let s = seconds % 10;
  let m = minutes % 10;


  if (s == 1 && seconds !== 11) {
    textSecond = textSecond + 'а';
  } else if (seconds == 12 || seconds == 13 || seconds == 14) {
    textSecond = textSecond + '';
  } else if (s >= 2 && s <= 4) {
    textSecond = textSecond + 'ы';
  }

  if (m == 1 && minutes !== 11) {
    textMinutes = textMinutes + 'а';
  } else if (minutes == 12 || minutes == 13 || minutes == 14) {
    textMinutes = textMinutes + '';
  } else if (m >= 2 && m <= 4) {
    textMinutes = textMinutes + 'ы';
  }

  if ((hours >= 2 && hours <= 4) || (hours >= 22 && hours <= 24)) {
    textHours = textHours + 'а';
  }

  if ((hours >= 5 && hours <= 20) || hours == 0) {
    textHours = textHours + 'ов';
  }

  out.innerHTML = `Сегодня ${textDay} ${day} ${month} ${year} года 
  ${hours} ${textHours} ${minutes} ${textMinutes} ${seconds} ${textSecond}`;
}

function getFullTime2() {
  let nowDate = new Date();
  let year = nowDate.getFullYear();
  let month = zero(nowDate.getMonth() + 1);
  let day = zero(nowDate.getDate());
  let hours = zero(nowDate.getHours());
  let minutes = zero(nowDate.getMinutes());
  let seconds = zero(nowDate.getSeconds());

  out1.innerText = `'${day}.${month}.${year} - ${hours}:${minutes}:${seconds}'`;
}



function zero(x) {
  return (x < 10) ? '0' + x : x;
}

getFullTime1();
getFullTime2();
setInterval(getFullTime1, 1000);
setInterval(getFullTime2, 1000);