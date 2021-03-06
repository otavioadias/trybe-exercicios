function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function daysMonth() {
  let daysList = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let listDays = document.createElement("li");

    if ((day === 4) | (day === 11) | (day === 18)) {
      listDays.className = "day friday";
      listDays.innerHTML = day;
      daysList.appendChild(listDays);
    } else if (day === 25) {
      listDays.className = "day holiday friday";
      listDays.innerHTML = day;
      daysList.appendChild(listDays);
    } else if ((day === 24) | (day === 31)) {
      listDays.className = "day holiday";
      listDays.innerHTML = day;
      daysList.appendChild(listDays);
    } else {
      listDays.className = "day";
      listDays.innerHTML = day;
      daysList.appendChild(listDays);
    }
  };
};
daysMonth();


