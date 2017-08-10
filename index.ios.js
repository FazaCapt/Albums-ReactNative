// index.ios.js - place code in here for Ios!!!

// import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create  a component

const App = () => (
    <Text>Some text</Text>
  );

// render it to the device
AppRegistry.registerComponent('albums', () => App);
