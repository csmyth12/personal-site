import { TimelineChunk, timelineColors } from "@/constants"
import { FunctionComponent } from "react"

interface DesktopTimelineEntryProps {
    chunk: TimelineChunk
    index: number
}

const isEven = (n: number) => n % 2 === 0

export const DesktopTimelineEntry: FunctionComponent<DesktopTimelineEntryProps> = ({ chunk, index }) => (
    <div className='flex flex-col justify-center h-full'>
        {!isEven(index) ? (<>
            <TimelineText chunk={chunk} />
            <HorizontalLine colour={timelineColors[index]} />
            <div className='h-1/3 flex flex-col justify-center items-center pb-12'>
                <VerticalLine colour={timelineColors[index]} />
                <TimelineYear year={chunk.year} index={index} />
            </div>
        </>) : (<>
            <div className='h-1/3 flex flex-col justify-center items-center pt-12'>
                <TimelineYear year={chunk.year} index={index} />
                <VerticalLine colour={timelineColors[index]} />
            </div>
            <HorizontalLine colour={timelineColors[index]} />
            <TimelineText chunk={chunk} />
        </>)}
    </div>
)

const TimelineText: FunctionComponent<{ chunk: TimelineChunk}> = ({ chunk }) => (
    <div className='h-1/3 max-w-56 min-w-36 flex flex-col justify-center'>
        <h3 className='font-bold text-lg text-center'>{chunk.title}</h3>
        <p className='text-base text-center'>{chunk.description}</p>
    </div>
)

const TimelineYear: FunctionComponent<{year: string, index: number}> = ({ year, index }) => (
    <h2 className={`text-xl text-center border-2 rounded-full h-16 w-16 px-1.5 py-4 text-${timelineColors[index]} border-${timelineColors[index]}`}>{year}</h2>
)

const HorizontalLine: FunctionComponent<{colour: string}> = ({ colour }) => (
    <div className={`border-2 w-full h-0 m-0 border-${colour}`} />
)

const VerticalLine: FunctionComponent<{colour: string}> =  ({ colour }) => (
    <div className={`m-0 h-full w-0 border-2 border-${colour}`}/>
)
