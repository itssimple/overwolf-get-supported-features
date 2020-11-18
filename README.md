# Overwolf - Get supported features

This module lets you fetch the supported features that you can register for each game (that supports it).

This works best from within a Overwolf application, if you want to register actual features/events from games you play, it can't fetch events from i.e. the web.

## How to use (in Overwolf applications)

Load the library either by importing it or loading it before the code that needs to use it.

```js
/* Don't register listeners like this.. */
overwolf.games.onGameLaunched.addListener((info) => {
  let supportedFeatures = overwolf.games.getSupportedFeatures(info.classId);
  console.log(supportedFeatures); // { game: "APEX", events: [ ... all the events ] }
});

/* You can also fetch the supported features like this */
let supportedFeatures = overwolf.games.getSupportedFeatures(
  OverwolfGameWithEventSupport.Overwatch
);

/* And if the plugin should be outdated on what features are available, you can always use this */

overwolf.games.getSupportedFeaturesOnline(
  OverwolfGameWithEventSupport.APEX,
  (features) => {
    console.log(features);
  }
);
```

## How to use (in javascript outside of Overwolf)

```js
let {
  getSupportedFeatures,
  getSupportedFeaturesOnline,
  OverwolfGameWithEventSupport,
} = require("overwolf-games-features");

let supportedFeatures = getSupportedFeatures(
  OverwolfGameWithEventSupport.Overwatch
);

console.log(supportedFeatures);
```

## For more information about Overwolf and their applications

**Developers** - Join their [Official Developer Discord](https://discord.gg/overwolf-developers)

**End users** - Join their [Official Discord](https://discord.gg/overwolf)

**Anyone with questions about this module**

Feel free to join [my Discord](https://discord.gg/6fP8vWW)
