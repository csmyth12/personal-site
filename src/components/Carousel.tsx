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
    )
}
