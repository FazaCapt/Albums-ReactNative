// index.ios.js - place code in here for Ios!!!

// import a library to help create a component
import React from 'react';
import ReactNative from 'react-native';

// Create  a component

const App = () => {
  return (
    <Text>Some text</Text>
  );
};

// render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);
