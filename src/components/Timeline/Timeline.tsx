import { DesktopTimelineEntry } from "./DesktopTimelineEntry"
import { MobileTimelineEntry } from "./MobileTimelineEntry"

export const Timeline = () => {
    const chunks = [
        { year: '2014', title: 'Start university', description: 'Studying Computer Applications at DCU.' },
        { year: '2017', title: 'Internship', description: '5 month internship with AOL.' },
        { year: '2018', title: 'Graduate', description: 'Finish university in November.' },
        { year: '2019', title: 'Join Fidelity', description: 'Start as a graduate in Fidelity.' },
        { year: '2021', title: 'Join Toast', description: 'Join Toast as a Frontend Engineer.' },
        { year: '2023', title: 'Career break', description: 'Leave Toast to take a break and travel Australia.' },
        { year: '2024', title: 'Move to London', description: 'This is where you come in.' }
    ]
    return (
        <div className='h-fit lg:h-screen w-full lg:px-40'>
            <div className="flex lg:hidden flex-col py-8 h-full justify-center">
                {chunks.map((chunk, index) => {
                    return (
                        <MobileTimelineEntry key={chunk.year} chunk={chunk} index={index} />
                    )
                })}
            </div>
            <div className='hidden lg:flex flex-row justify-center h-full'>
                {chunks.map((chunk, index) => {
                    return (
                        <DesktopTimelineEntry key={chunk.year} chunk={chunk} index={index} />
                    )
                })}
            </div>
        </div>
    )
}