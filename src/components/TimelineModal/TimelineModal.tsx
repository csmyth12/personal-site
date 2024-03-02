import { TimelineChunk } from "@/constants"
import { FunctionComponent, useEffect } from "react"
//@ts-ignore
import { UilMultiply } from '@iconscout/react-unicons'


export interface TimelineModalProps {
    chunk: TimelineChunk
    colour: string,
    isOpen: boolean,
    onClose: () => void
}

export const TimelineModal: FunctionComponent<TimelineModalProps> = ({chunk, colour, isOpen, onClose}) => {
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isOpen) {
                e.preventDefault()
                if (e.key === 'Escape') {
                    close()
                }
            }
        }

        const handleMouseDown = (e: MouseEvent) => {
            //@ts-ignore
            if (isOpen && e.target!.id === 'background-blur') {
                close()
            }
        }
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
            document.addEventListener('mousedown', handleMouseDown)
        }

        const close = () => {
            onClose()
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('mousedown', handleMouseDown)
        }
    }, [isOpen, onClose])


    return (
        <>
            {!!isOpen && (
                <div id='background-blur' className='z-40 bg-slate-300/50 w-full h-screen fixed inset-0 flex flex-col justify-center items-center'>
                    <div className={`m-4 bg-white min-w-full min-h-full md:m-20 md:min-w-56 md:min-h-56 md:max-w-96 flex flex-col p-8 border-2 border-${colour} rounded-md`}>
                        <div className='w-full flex flex-row items-end justify-end px-2 self-start'>
                            <button onClick={() => onClose()}>
                                <UilMultiply />
                            </button>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className={`text-xl text-${colour} py-4`}>{chunk.year}</h2>
                            <h3 className='text-lg pb-2'>
                                {chunk.title}
                            </h3>
                            <p className='text-md'>
                                {chunk.description}
                            </p>
                        </div>

                    </div>
                </div>
            )}
       </>
    )
}
