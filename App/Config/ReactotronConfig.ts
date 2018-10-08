import Reactotron from "reactotron-react-native";
// @ts-ignore
import {reactotronRedux as reduxPlugin} from "reactotron-redux";
import ImmutableObject from "seamless-immutable";
import DebugConfig from "@root/App/Config/DebugConfig";

if (DebugConfig.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!

  Reactotron
    .configure({name: "Healthcare Highways", host: "192.168.8.100"})
    .useReactNative({
      networking: {
        ignoreUrls: /\/(symbolicate)$/,
      },
    })
    .use(reduxPlugin({onRestore: ImmutableObject}))
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  // swizzle the old one
  const yeOldeConsoleLog = console.log;

// make a new one
  // @ts-ignore
  console.log = (...args) => {
    // always call the old one, because React Native does magic swizzling too
    yeOldeConsoleLog(...args);

    // send this off to Reactotron.
    Reactotron.display({
      name: "CONSOLE.LOG",
      value: args,
      preview: args.length > 0 && typeof args[0] === "string" ? args[0] : null,
    });
  };
}

