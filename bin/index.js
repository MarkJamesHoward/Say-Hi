#!/usr/bin/env node
function SayHiStandard() {
  return "Standard Say hi";
}
let SayHiPlugin;
try {
  SayHiPlugin = await import("@markjameshoward/say-hi-plugin");
} catch (e) {
  console.log("no plugins found");
  SayHiPlugin = {
    Execute: () => SayHiStandard(),
  };
}
console.log(SayHiPlugin.Execute());
export {};
