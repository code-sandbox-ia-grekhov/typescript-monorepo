function* testCoroutine() {
  console.log("Start");
  const firstValue = yield "Pause 1";
  console.log("Start 2: ", firstValue);
  const secondValue = yield "Pause 2";
  console.log("End");
}

const gen = testCoroutine();
console.log(gen.next());
console.log(gen.next("Hello"));
console.log(gen.next());

// Лог:
// Start
// { value: 'Pause 1', done: false }
// Start 2:  Hello
// { value: 'Pause 2', done: false }
// End
// { value: undefined, done: true }
