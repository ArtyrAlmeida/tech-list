import React from 'react';
import { Text, View, Button } from 'react-native';
import { ITechnology, ITechnologyProps } from '../../interfaces';


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

    return <View>
        <Button  title={technology!.completed ? 'Completed' : "Not completed"} onPress={toggleCompleted} />
        <Text>{technology!.text}</Text>
        <Button title='Delete' onPress={remove} />
    </View>
}

export default Technology;