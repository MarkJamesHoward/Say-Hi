#!/usr/bin/env node
const plugin = "@markjameshoward/say-hi-plugin";
function SayHiStandard() {
    return "Standard Say hi";
}
let SayHiPlugin = {
    GetHi: () => SayHiStandard(),
};
try {
    SayHiPlugin = await import(plugin);
}
catch (e) {
    console.log("no plugins found - using builtin");
}
console.log(SayHiPlugin.GetHi());
export {};
