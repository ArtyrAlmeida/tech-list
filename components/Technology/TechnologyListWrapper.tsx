import { StyleSheet, Text, View } from 'react-native';
import Technology from './Technology';
import { ITechnology, ITechnologyProps } from '../../interfaces';

const TechnologyListWrapper = (props:ITechnologyProps) => {
    const completedTechnologies = [];
    props.technologies!.forEach(value => {if(value.completed) completedTechnologies.push(value)});

    return <View style={styles.generalWrapper}>
            <View style={styles.statsWrapper}>
                <View style={styles.stats}>
                    <Text style={styles.createdStats}>Criadas</Text>
                    <Text style={styles.statsNumber}>{props.technologies!.length}</Text>
                </View>
                <View style={styles.stats}>
                    <Text style={styles.completedStats}>Concluídas</Text>
                    <Text style={styles.statsNumber}>{completedTechnologies.length}</Text>
                </View>
            </View>
            { props.technologies!.length > 0 ?
                <View>
                    {(props.technologies as ITechnology[]).map(e => <Technology onToggleTechnology={props.onToggleTechnology} onRemoveTechnology={props.onRemoveTechnology} technology={e} key={e.id} />)}
                </View>
            :
            <View>
                <View>
                    <Text>Você ainda não tem tecnologias cadastradas</Text>
                    <Text>Crie tarefas e organize seus itens a fazer</Text>
                </View>
            </View>
            }
        </View>

       
}

const styles = StyleSheet.create({
    generalWrapper: {
        marginTop: 32,
    },
    statsWrapper: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    stats: {
        flex: 0,
        flexDirection: 'row',
        gap: 8,
    },
    createdStats: {
        fontSize: 14,
        color: '#4EA8DE',
    },
    completedStats: {
        color: '#8284FA',
    },
    statsNumber: {
        color: 'white',
        padding: 1,
        width: 20,
        textAlign: 'center',
        backgroundColor: '#333333',
        borderRadius: 999,
    }
})

export default TechnologyListWrapper;