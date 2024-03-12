import { FunctionComponent, ReactNode } from "react"

interface TextProps {
    children: ReactNode
}


export const Text: FunctionComponent<TextProps> = ({ children }) => (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <p className='mx-8 text-justify max-w-[50%] text-md md:text-2xl'>
            {children}
        </p>
    </div>
)
