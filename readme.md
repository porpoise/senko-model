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
