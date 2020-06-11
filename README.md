# Overwolf - Get supported features

This module lets you fetch the supported features that you can register for each game (that supports it)

## How to use

Load the library either by importing it or loading it before the code that needs to use it.

```js
/* Don't register listeners like this.. */
overwolf.games.onGameLaunched.addListener((info) => {
    let supportedFeatures = overwolf.games.getSupportedFeatures(info.classId);
    console.log(supportedFeatures); // { game: "APEX", events: [ ... all the events ] }
});
```