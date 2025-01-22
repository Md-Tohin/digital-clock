const time = document.getElementById("time");
const timeformat = document.getElementById("timeformat");

const format = (value) => {
  return value < 10 ? `0${value}` : value;
};

const showTime = () => {
  let date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let secs = date.getSeconds();

  let checkHr = hr > 12 ? hr % 12 : hr;

  time.innerHTML = `${format(checkHr)} : ${format(min)} : ${format(secs)}`;
  timeformat.innerHTML = hr > 12 ? "PM" : "AM";
};

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showTime, 1000);
});
