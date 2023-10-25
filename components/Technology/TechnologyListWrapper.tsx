import { Button, Text, View } from 'react-native';
import Technology from './Technology';
import { ITechnology, ITechnologyProps } from '../../interfaces';

const TechnologyListWrapper = (props:ITechnologyProps) => {
    const completedTechnologies = [];
    props.technologies!.forEach(value => {if(value.completed) completedTechnologies.push(value)});

    return props.technologies!.length > 0 ?
        <View>
            <Button title='Aperte' onPress={() => {console.log(props.technologies);
            }} />
            <View>
                <View>
                    <Text>Criadas</Text>
                    <Text>{props.technologies!.length}</Text>
                </View>
                <View>
                    <Text>Concluídas</Text>
                    <Text>{completedTechnologies.length}</Text>
                </View>
            </View>
            <View>
                {(props.technologies as ITechnology[]).map(e => <Technology onToggleTechnology={props.onToggleTechnology} onRemoveTechnology={props.onRemoveTechnology} technology={e} key={e.id} />)}
            </View>
        </View>
    :
        <View>
            <View>
                <Text>Você ainda não tem tecnologias cadastradas</Text>
                <Text>Crie tarefas e organize seus itens a fazer</Text>
            </View>
        </View>
}

export default TechnologyListWrapper;