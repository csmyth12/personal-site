import Image, { StaticImageData } from "next/image"
import { FunctionComponent, ReactNode } from "react"

interface HeaderProps {
    children: ReactNode
}

export const Header: FunctionComponent<HeaderProps> = ({ children }) => (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-center text-white text-4xl'>{children}</h1>
    </div>
)
