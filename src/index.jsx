/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Todos } from "./Todos";

render(() => <Todos />, document.getElementById("root"));
