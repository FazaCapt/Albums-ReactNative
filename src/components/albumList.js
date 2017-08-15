import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component { 
    state = { albums: [] };

    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));

            // this.state = { albums: [ {}{}{}]}
        }
    

    render() {
        console.log(this.state);
    return (
        <View>
            <Text>Album List!!!</Text>
        </View>
     );
    }
}

export default AlbumList;