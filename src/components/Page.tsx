import { MutableRefObject, UIEventHandler, useRef, useState } from 'react'
import { Contact } from './Contact'
import { Header } from './Header'
import { MindMap } from './MindMap/MindMap'
import { Outreach } from './Outreach'
import { Projects } from './Projects'
import { Section } from './Section'
import { Timeline } from './Timeline/Timeline'

export const Page = () => {

    return (
        <div className='h-screen w-full overflow-y-scroll snap-mandatory snap-y' id='page'>
            <Section color='bg-indigo-900' id='Header'>
                <Header />
            </Section>
            <Section id='Timeline'>
                <Timeline />
            </Section>
            <Section color="bg-indigo-50" id='Technologies'>
                <MindMap />
            </Section>
            <Section id='Projects'>
                <Projects />
            </Section>
            <Section color='bg-indigo-50' id='Outreach'>
                <Outreach />
            </Section>
            <Section color='bg-indigo-100' id='Contact'>
                <Contact />
            </Section>
        </div>
    )
}