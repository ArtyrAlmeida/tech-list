import { useRef, useState } from "react"
import { View, Text, TextInput, Image, StyleSheet, Pressable } from "react-native"
import { ITopAreaProps } from "../interfaces"

const plusIcon = require('../assets/plus.png');

const TopArea = (props: ITopAreaProps) => {
    const [input, setInput] = useState<string>("");

    const submitTechnology = () => {
        props.onTechnologySubmit(input);
    }

    return <View>
        <Text style={styles.title}>Minhas Tecnologias</Text>
        <View style={styles.inputArea}>
            <TextInput style={styles.input} placeholder="Adiciona uma nova tecnologia" value={input} onChangeText={(text) => setInput(text)} />
            <Pressable style={styles.addButton} onPress={submitTechnology}><Image source={plusIcon} /></Pressable>
        </View>

    </View>
}

const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontSize: 23,
      fontWeight: '900',
      color: '#4EA8DE',
      marginBottom: 56
    },
    inputArea: {
        justifyContent: 'space-between',
        flex: 0,
        flexDirection: 'row',
    },
    input: {
        padding: 16,
        backgroundColor: '#262626',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#0D0D0D',
        color: '#808080',
        fontSize: 16,
        width: '80%'
    },
    addButton: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        fontSize: 16,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
    },
  });

export default TopArea;