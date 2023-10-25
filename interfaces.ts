export interface ITechnology {
    text: string;
    id: number;
    completed: boolean;
}

export interface ITechnologyProps {
    onToggleTechnology: (id: number) => void;
    onRemoveTechnology: (id: number) => void;
    technology?: ITechnology;
    technologies?: ITechnology[];
}

export interface ITopAreaProps {
    onTechnologySubmit: (text: string) => void;
}