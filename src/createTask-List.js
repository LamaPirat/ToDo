export function createTask(name, date) {
  return {
    id: Date.now().toString(),
    name: name,
    complete: false,
    date: date,
  };
}

export function createList(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}
