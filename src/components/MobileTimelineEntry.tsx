import { TimelineChunk, timelineColors } from "@/constants"
import { FunctionComponent, useState } from "react"
import { TimelineModal } from "./TimelineModal/TimelineModal"


interface MobileTimelineEntryProps {
    chunk: TimelineChunk
    index: number
}

export const MobileTimelineEntry: FunctionComponent<MobileTimelineEntryProps> = ({ chunk, index }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className={`flex flex-col justify-center h-32 items-center`}>
            <div className={`h-full w-0 border-2 border-${timelineColors[index]} bg-${timelineColors}`} />
            <button className={
                `text-xl text-center border-2 rounded-full h-24 w-24 px-3 py-8 bg-indigo-50 text-${timelineColors[index]} border-${timelineColors[index]} hover:bg-${timelineColors[index]} hover:text-white`
            }
                onClick={() => setModalIsOpen(true)}
            >
                {chunk.year}
            </button>
            <div className={`h-full w-0 border-2 border-${timelineColors[index]}`} />
            <TimelineModal 
                chunk={chunk}
                colour={timelineColors[index]}
                isOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
            />
        </div>
    )
}
