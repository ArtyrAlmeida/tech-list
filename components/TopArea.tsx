import { useRef, useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import { ITopAreaProps } from "../interfaces"

const TopArea = (props: ITopAreaProps) => {
    const [input, setInput] = useState<string>("");

    const submitTechnology = () => {
        props.onTechnologySubmit(input);
    }

    return <View>
        <Text>Minhas Tecnologias</Text>
        <View>
            <TextInput placeholder="Adiciona uma nova tecnologia" value={input} onChangeText={(text) => setInput(text)} />
            <Button title="" onPress={submitTechnology}/>
        </View>

    </View>
}

export default TopArea;