#!/usr/bin/env node
const plugin = "@markjameshoward/say-hi-plugin";
function SayHiStandard() {
  return "Standard Say hi";
}
let app = {
  GetHi: () => SayHiStandard(),
};
try {
  app = await import(plugin);
} catch (e) {
  console.log("no plugins found - using builtin");
}
console.log(app.GetHi());
