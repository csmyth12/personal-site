import { useState } from "react"
import { MapEntry } from "./MapEntry"
import { technologies } from "./technologies"

export const MindMap = () => {
    return (
        <div className='h-screen w-screen flex flow-col justify-center items-center'>
                <div className='h-1/2 w-1/2 max-h-[440px] max-w-[600px] md:min-w-[600px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {technologies.map((tech) => <MapEntry key={tech.name} tech={tech} />)}
                </div>
        </div>
    )
}