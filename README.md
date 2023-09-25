# Possible memory in FloatingUI

[Memlab](https://facebook.github.io/memlab/) reports that there are memory
leaks when using Web components and React hooks from Floating UI.

## How to test

1. Install dependencies. `npm install`.
2. Build the project. `npm run build`.
3. Start a server. `npm run preview.

There are two different scenarios to use with Memlab. `scenario.good.cjs`
does not report any issue. `scenario.bad.cjs` reports a memory leak.

* Run the good scenario with `npx memlab run -v --scenario sceneario.good.cjs`
* Run the bad scenario with `npx memlab run -v --scenario sceneario.bad.cjs`
