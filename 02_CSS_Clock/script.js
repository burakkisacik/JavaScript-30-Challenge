const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const sec = now.getSeconds();
  const secInDegrees = (sec / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secInDegrees}deg)`;

  const min = now.getMinutes();
  const minInDegrees = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minInDegrees}deg)`;

  const hour = now.getHours();
  const hourInDegrees = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourInDegrees}deg)`;
}

//run setDate function every 1 second
setInterval(setDate, 1000);
