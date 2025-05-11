import { FunctionComponent, ReactElement } from "react"

export interface SpielProps {
    children: ReactElement | string,
    title: string
}

export const Spiel: FunctionComponent<SpielProps> = ({title, children}) => (
    <div className='flex flex-col w-full'>
        <h2 className='text-4xl text-indigo-900 my-4'>{title}</h2>
        <p className='text-lg text-justify w-full'>
            {children}
        </p>
    </div>
)