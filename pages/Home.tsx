import { useState } from "react";
import TechnologyListWrapper from "../components/Technology/TechnologyListWrapper"
import { View } from 'react-native';
import { ITechnology } from "../interfaces";
import TopArea from "../components/TopArea";

const Home: React.FC = (props) => {
    const [technologies, setTechnologies] = useState<ITechnology[]>([{ text: "Exemplo", id: 0, completed: false }]);
    //rsetTechnologies([{ text: "Exemplo", id: 0, completed: false }]);
    const handleToggleTechnology = (id: number) => {
        console.log(id);
        const index = technologies.findIndex(value => value.id === id);
        const aux = [...technologies];
        aux[index].completed = aux[index].completed ? false : true;
        setTechnologies(aux);
    }

    const handleRemoveTechnology = (id: number) => {
        const index = technologies.findIndex(value => value.id === id);
        const aux = [...technologies];
        aux.splice(index, 1);
        setTechnologies(aux);
    }

    const handleTechnologySubmit = (text: string) => {
        const maxIndex = Math.max(...technologies.map(e => e.id));
        const aux = [...technologies];
        aux.push({
            completed: false,
            text,
            id: maxIndex + 1,
        });

        setTechnologies(aux);
    }

    return <View>
        <TopArea onTechnologySubmit={handleTechnologySubmit} />
        <TechnologyListWrapper onRemoveTechnology={handleRemoveTechnology} onToggleTechnology={handleToggleTechnology} technologies={technologies} />
    </View>
}

export default Home;