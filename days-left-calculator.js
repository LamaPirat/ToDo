export function daysLeftCalculator(task) {
  let dueDay = new Date(task.date);
  let today = new Date(getCurrentDate());
  let difference = dueDay.getTime() - today.getTime();
  let daysLeft = Math.ceil(difference / (1000 * 3600 * 24));

  return daysLeft;
}

function getCurrentDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today;
}
