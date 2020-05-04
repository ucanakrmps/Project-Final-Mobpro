import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Layout = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1}></View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    box1: {
        width: 50,
        height: 50,
        backgroundColor: 'royalblue'
    },
    box2: {
        width: 50,
        height: 50,
        backgroundColor: 'peru'
    },
    box3: {
        width: 50,
        height: 50,
        backgroundColor: 'greenyellow'
    }
})

export default Layout;