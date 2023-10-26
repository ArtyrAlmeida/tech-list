import React from 'react';
import { Text, View, Pressable, StyleSheet, Image } from 'react-native';
import { ITechnologyProps } from '../../interfaces';

const completeIcon = require('../../assets/complete.png');
const incompleteIcon = require('../../assets/incomplete.png');
const binIcon = require('../../assets/bin.png');

const Technology = (props: ITechnologyProps) => {
    const technology = props.technology;
    console.log(technology);
    
    const id = technology!.id;

    const toggleCompleted = () => {
        props.onToggleTechnology(id);
    }

    const remove = () => {
        props.onRemoveTechnology(id);
    }

    return <View style={styles.technology}>
        <Pressable onPress={toggleCompleted}>{ technology?.completed ? <Image source={completeIcon} /> : <Image source={incompleteIcon} /> }</Pressable>
        <Text>{technology!.text}</Text>
        <Pressable onPress={remove}><Image source={binIcon}/></Pressable>
    </View>
}

const styles = StyleSheet.create({
    technology: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 14,
    }
})

export default Technology;