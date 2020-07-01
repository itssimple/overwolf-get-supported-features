import { OverwolfGameWithEventSupport, getSupportedFeatures, getSupportedFeaturesOnline } from "./index";

let features = getSupportedFeatures(OverwolfGameWithEventSupport.APEX);
console.log(features);

getSupportedFeaturesOnline(OverwolfGameWithEventSupport.APEX, data => {
  console.log(data);
});
