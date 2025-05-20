import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux'; // Optional: Only if you're using Redux
import sagaPlugin from 'reactotron-redux-saga'; // Optional: Only if you're using Redux Saga

Reactotron.configure({name: 'YourAppName'}) // Controls connection & communication settings
  .useReactNative() // Add all built-in React Native plugins
  .use(reactotronRedux()) // Optional: Use the Redux plugin
  .use(sagaPlugin()) // Optional: Use the Redux Saga plugin
  .connect(); // Let's connect!

// Clear Reactotron on every app load
Reactotron.clear();
const yeOldeConsoleLog = console.log;
// make a new one
/* eslint-disable no-console */
console.log = (...args) => {
  // always call the old one, because React Native does magic swizzling too
  yeOldeConsoleLog(...args);
  // send this off to Reactotron.
  Reactotron.display({
    name: 'CONSOLE',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

export default Reactotron;
