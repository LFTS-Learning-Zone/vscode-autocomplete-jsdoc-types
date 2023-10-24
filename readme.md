# Welcome to VSCode hinting and JS Types

This doc is meant to explore a bit how VSCode deals with duck typing in javascript.

You will find the following:

- What exactly VSCode shows in autocomplete with *extended* objects from a base one
- What functions autocomplete from a given set of types as arguments
- How composite types work and could work as "pseudo-interfaces"
- That Types ARE NOT rule enforcers, just HINTS. Function implementations still can be agnostic or reflect something totally different

Take a look in both files, they contain comments hinting what vscode should do (at the writing momment).

I reccomend running the program first, then looking into [index.mjs](./index.mjs), later to [classes.mjs](./classes.mjs), and then back to [index.mjs](./index.mjs)

## Running file to see outputs

1. Clone this project (git clone)
2. Open terminal at root of folder
3. With Node installed, type: "node index.mjs" to see sample implementations running;

## Checking how VSCode deals with its autocomplete

In order to do this, you'll need to open the [classes.mjs](./classes.mjs)![Uploading Tela Login.png…]()
 file and fiddle around.

I reccomend using <kbd>CTRL + SPACE</kbd> often to activate autocomplete while editing the source code.

For every function (or new function), give it typed parameters and experiment accessing properties and methods.
