const number = window.document.getElementById("number");
const skillContainer = window.document.querySelector(".skill");
const circle = window.document.getElementById("circle");
var lastCount = 0;

export function setCircle(prec) {
  let precent = (1 - prec).toFixed(1);
  let counter = lastCount;

  console.log(number);

  circle.setAttribute("stroke-dashoffset", 450 - 450 * precent);

  if (precent > counter / 100) {
    setInterval(() => {
      if (counter == precent * 100) {
        clearInterval;
        return;
      } else {
        counter += 1;
        number.innerHTML = `${counter}%`;
        lastCount = counter;
      }
    }, 10);
  } else if (precent < counter / 100) {
    setInterval(() => {
      if (counter == precent * 100) {
        clearInterval;
        return;
      } else {
        counter -= 1;
        number.innerHTML = `${counter}%`;
        lastCount = counter;
      }
    }, 10);
  } else {
    return;
  }
}
