import { onCleanup, onMount } from "solid-js";

export function About() {
  onMount(() => {
    console.log("About Component Mounted");
  });
  onCleanup(() => {
    console.log("About Component Cleapup");
  });
  return (
    <>
      <h2>About</h2>
    </>
  );
}
