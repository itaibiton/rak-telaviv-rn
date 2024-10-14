// index.ts
import { registerRootComponent } from 'expo';
import App from './src/app/App'; // Update the path to point to your App.tsx in the src folder

// App.js

import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
    default: "native",
});

registerRootComponent(App);
