// index.ios.js - place code in here for Ios!!!

// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

// Create  a component

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
    

    // return 1;
    // return 2;
  );

// render it to the device
AppRegistry.registerComponent('albums', () => App);
