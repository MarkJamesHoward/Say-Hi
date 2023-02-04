#!/usr/bin/env node

interface IPluginCommand {
  Execute(): string;
}

function SayHiStandard() {
  return "Standard Say hi";
}

let SayHiPlugin: IPluginCommand = {
  Execute: () => SayHiStandard(),
};

try {
  SayHiPlugin = await import("say-hi-plugin");
} catch (e) {
  console.log("no plugins found - using builtin");
}

console.log(SayHiPlugin.Execute());

export {};
