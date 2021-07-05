export const WEEKDAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
export const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

export const MONTHS2 = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря"
];
function get_date() {
  let date = new Date();
  date.setDate(date.getDate() + 4);
  return date;
}

export const EVENTS = [
  { id: 1, date: new Date(), title: "title1", content: "content1" },
  { id: 2, date: get_date(), title: "title2", content: "content2" }
];
