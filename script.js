let array = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < array.length; i++) {
  const d = new Date();

  if (i < 5 && array[i] !== (array[d.getDay() - 1])) {
    document.querySelector('.out').innerHTML += `${array[i]}<br>`;
  } else if (i > 4 && array[i] !== (array[d.getDay() - 1])) {
    document.querySelector('.out').innerHTML += `<i>${array[i]}</i><br>`;
  }

  if (array[d.getDay() - 1] == array[i]) {
    document.querySelector('.out').innerHTML += `${array[i].bold()}<br>`;
  }
}