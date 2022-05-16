import { createEffect, createSignal, onCleanup, onMount, Show } from "solid-js";
import { About } from "./About";
import styles from "./App.module.css";

function App() {
  function initCount() {
    if (localStorage.count && localStorage.count != undefined) {
      return Number(localStorage.count);
    }
    return 0;
  }
  const [count, setCount] = createSignal(initCount());

  const [show, setShow] = createSignal(true);
  const [name, setName] = createSignal("");
  createEffect(() => {
    console.log(`Count: ${count()}`);
    localStorage.count = JSON.stringify(count());
  });
  return (
    <>
      <h1>Hola mundo {name()}</h1>
      <div class={styles.box}>{count()}</div>
      <button class={styles.btn} onClick={() => setCount(count() + 1)}>
        click me
      </button>
      <br />

      <label>
        Nombre
        <input
          type="text"
          value={name()}
          onInput={({ target }) => setName(target.value)}
        />
      </label>
      <label>
        <input type="checkbox" onInput={() => setShow(!show())} />
        Mostrar About
      </label>
      <Show when={show()}>
        <About />
      </Show>
    </>
  );
}

export default App;
