import { FunctionComponent } from "react"

export interface MapEntryProps {
    tech: { name: string, weight: string }
}

const randomPaddings = ['p-1', 'p-5', 'p-3', 'p-2']

export const MapEntry: FunctionComponent<MapEntryProps> = ({tech}) => {
    const getRandomPadding = () => {
        return randomPaddings[Math.floor(Math.random() * 4)]
    }

    return (
        <div 
            className={
                `m-2 text-center text-${tech.weight} ${getRandomPadding()}`
                + ' transition ease-in-out duration-100 md:hover:scale-125'
                + ' flex flex-col justify-center'
            }
        >
            {tech.name}
        </div>
    )
}