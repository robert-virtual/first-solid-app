import { createEffect, createSignal, For } from "solid-js";

export function Todos() {
  function initTodos() {
    let todos = [];
    if (localStorage.todos) {
      todos = JSON.parse(localStorage.todos);
    }
    return todos;
  }
  const [todos, setTodos] = createSignal(initTodos());
  const [todo, setTodo] = createSignal("");
  function addTodo(e) {
    e.preventDefault();
    setTodos([...todos(), todo()]);
    setTodo("");
  }
  createEffect(() => {
    console.log(todos());
    localStorage.todos = JSON.stringify(todos());
  });

  return (
    <>
      <h2>Todos</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="new Todo..."
          value={todo()}
          onInput={({ target }) => setTodo(target.value)}
        />
      </form>
      <ol>
        <For each={todos()}>
          {(todo) => {
            return <li>{todo}</li>;
          }}
        </For>
      </ol>
    </>
  );
}
