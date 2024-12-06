import { setupCounter } from "./assets/js/counter";

import viteLogo from "/vite.svg";
import javascriptLogo from "../src/assets/img/javascriptLogo";

document.querySelector("#app").innerHTML = `
  <div>
    ...
    ...
    <a href="/about">About</a> |
    <a href="/blog/article">Article</a>
    <h1>bonjour</h1>
  </div>
`;

setupCounter(document.querySelector("#counter"));
//8adfd9df8bd6334c722f32cb9723de43 : api key

/**
 * eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWRmZDlkZjhiZDYzMzRjNzIyZjMyY2I5NzIzZGU0MyIsIm5iZiI6MTczMzQ4Nzk0OC45MTIsInN1YiI6IjY3NTJlZDRjNTE2ZWRlYWIyOTk5M2Q4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.
 * xkhtqenIXvmRCPu3fwtcvR0wY2Gm-tLGeW7v4Zten_Q
 */