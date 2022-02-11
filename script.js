let array = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let out = document.querySelector('.out');

for (let i = 0; i < array.length; i++) {
  const day = new Date();

  if (i < 5 && array[i] !== (array[day.getDay() - 1])) {
    out.innerHTML += `${array[i]}<br>`;
  } else if (i > 4 && array[i] !== (array[day.getDay() - 1])) {
    out.innerHTML += `<i>${array[i]}</i><br>`;
  }

  if (array[day.getDay() - 1] == array[i]) {
    out.innerHTML += `<b>${array[i]}</b><br>`;
  }
}