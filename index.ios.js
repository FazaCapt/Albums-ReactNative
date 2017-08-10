// index.ios.js - place code in here for Ios!!!

// import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create  a component

const App = () => (
    <Header headerText={'Faza Ganteng'} />
  );

// render it to the device
AppRegistry.registerComponent('albums', () => App);
