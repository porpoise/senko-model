# `senko-model`

two-way input binding for react

## install

`npm i senko-model`

depends on `react` and `@types/react`, but if you're developing a react app you *should* have these lmfao

## before `senko-model`

**0/420** dermatologists recommend react.

```js
import { useState } from "react";
// import { model } from "senko-model"; NO SENKO MODEL

function TrashReactComponent() {
    const [trashState, setTrashState] = useState("TRASH LLLLLLLLLLLLL");

    // TRASH TRASH EW GROSS LLLLLLLLLL
    return (
        <input 
            value={trashState} 
            onChange={e => setTrashState(e.target.value)}
        />
    );
}
```

## after `senko-model`

**420/69** dermatologists recommend `senko-model`.

don't yell at me that this breaks the standards of react development, react is literally all about messing with standards (see: `class`**`Name`**, **`html`**`For`, `onChange` vs `onInput`, JSX in its entirety)

```js
import { useState, createElement as trashCreateElement } from "react";
import { factory as modelFactory } from "senko-model";

// use this, modified, factory function for JSX
// can be configured in tsconfig/babelrc/etc
const createElement = modelFactory(trashCreateElement);

function GOATReactComponent() {
    const [goatState, setGoatState] = useState("goat");

    // LOOK AT THE S*X APPEAL OF THIS TWO-WAY BINDING
    // NO GROSS REACT
    return (
        <input model={[goatState, setGoatState]} />
    );
}
```

## alternate, doesn't override `createElement`

if overriding `createElement` really bothers you <3

```js
import { useState } from "react";
import { model } from "senko-model";

function GOATReactComponent() {
    const [goatState, setGoatState] = useState("goat");

    // LOOK AT THE S*X APPEAL OF THIS TWO-WAY BINDING
    // NO GROSS REACT
    return (
        <input {...model(goatState, setGoatState)} />
    );
}
```
