import React, { ReactNode, useEffect, useState } from "react"
//@ts-ignore
import { UilAngleLeft, UilAngleRight } from '@iconscout/react-unicons'

interface CarouselProps {
    children: ReactNode[]
}

export const Carousel: React.FunctionComponent<CarouselProps> = ({ children }) => {
    const [visibleIndex, setVisibleIndex] = useState(0)
    const [visible, setVisible] = useState(children[visibleIndex])

    const goBack = () => {
        if (visibleIndex === 0) {
            setVisibleIndex(children.length - 1)
        } else {
            setVisibleIndex(visibleIndex - 1)
        }
    }

    const goForward = () => {
        setVisibleIndex((visibleIndex + 1) % children.length)
    }

    useEffect(() => setVisible(children[visibleIndex]), [children, visibleIndex])
    
    return (
        <div className='flex flex-col justify-around'>
            <div className='flex flex-row space-between'>
                <button onClick={() => goBack()}>
                    <UilAngleLeft />
                </button>
                <div className='mx-4'>
                    {visible}
                </div>
                <button onClick={() => goForward()}>
                    <UilAngleRight />
                </button>
            </div>
            <div className='flex flex-row justify-center mt-4'>
                <div className='flex flex-row justify-center rounded-2xl bg-gray-200'>
                    {children.map((child, index) => (
                        <button 
                            key={index} 
                            className={`m-1 w-4 h-4 rounded-lg border-2 border-gray-300 hover:border-gray-400 ${index === visibleIndex ? 'bg-gray-300' : 'bg-inherit'}`} 
                            onClick={() => setVisibleIndex(index)} />
                    ))}
                </div>
            </div>
        </div>
    )
}
