"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
let features = index_1.getSupportedFeatures(index_1.OverwolfGameWithEventSupport.APEX);
console.log(features);
index_1.getSupportedFeaturesOnline(index_1.OverwolfGameWithEventSupport.APEX, data => {
    console.log(data);
});
