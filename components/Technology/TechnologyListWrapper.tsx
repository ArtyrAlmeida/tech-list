import { StyleSheet, Text, View, Image } from 'react-native';
import Technology from './Technology';
import { ITechnology, ITechnologyProps } from '../../interfaces';

const clipboardIcon = require('../../assets/clipboard.png')

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
            <View style={styles.noTechView}>
                <Image source={clipboardIcon} />
                <View>
                    <Text style={styles.noTechHeader}>Você ainda não tem tecnologias cadastradas</Text>
                    <Text style={styles.noTechText}>Crie tarefas e organize seus itens a fazer</Text>
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
        marginBottom: 20,
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
    },
    noTechView: {
        flex: 0,
        paddingHorizontal: 10,
        paddingVertical: 48,
        borderTopColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    noTechHeader: {
        fontSize: 14,
        color: '#808080',
        fontWeight: '700',
        textAlign: 'center',
    },
    noTechText: {
        fontSize: 14,
        color: '#808080',
        textAlign: 'center',
    }

})

export default TechnologyListWrapper;