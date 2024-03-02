import { FunctionComponent, ReactNode } from "react"

interface TextProps {
    children: ReactNode
}


export const Text: FunctionComponent<TextProps> = ({ children }) => (
    <section className='w-full h-screen flex flex-col justify-center items-center'>
        <p className='mx-8 text-justify text-md md:text-2xl h-1/2'>
            {children}
        </p>
    </section>
)
