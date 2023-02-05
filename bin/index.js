#!/usr/bin/env node
function SayHiStandard() {
    return "Standard Say hi";
}
let SayHiPlugin = {
    GetHi: () => SayHiStandard(),
};
try {
    SayHiPlugin = await import("@markjameshoward/say-hi-plugin");
}
catch (e) {
    console.log("no plugins found - using builtin");
}
console.log(SayHiPlugin.GetHi());
export {};
