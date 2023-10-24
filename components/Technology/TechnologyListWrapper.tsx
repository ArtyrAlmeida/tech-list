import { Text, View } from 'react-native';
import TechnologyList from './TecnologyList';

const TechnologyListWrapper: React.FC = (props) => {
    return <View>
        <View>
            <View>
                <Text>Criadas</Text>
                <Text>5</Text>
            </View>
            <View>
                <Text>Concluídas</Text>
                <Text>5</Text>
            </View>
        </View>
        <TechnologyList />
    </View>
}

export default TechnologyListWrapper;