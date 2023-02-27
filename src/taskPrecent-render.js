const number = document.getElementById("number");
const skillContainer = document.querySelector(".skill");
const circle = document.getElementById("circle");
var lastCount = 0;

export function setCircle(prec) {
  let precent = (1 - prec).toFixed(1);
  let counter = lastCount;
  //   skillContainer.style.setProperty(
  //     "--task-precentage-from",
  //     `${counter / 100}`
  //   );
  //   skillContainer.style.setProperty("--task-precentage-to", `${precent}`);

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
