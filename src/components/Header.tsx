import Image from "next/image"
import { FunctionComponent } from "react"
import Profiler from '../images/ConorSmyth.jpg'

export const Header: FunctionComponent = () => (
    <div className='flex flex-col-reverse md:flex-row h-full w-full justify-start md:justify-between px-20 md:px-40 items-center text-white'>
        <div className='flex flex-col w-full md:w-1/2'>
            <h1 className='text-4xl border-b-2 border-white mb-4'>Conor Smyth</h1>
            <p className='text-justify text-md pb-4 md:text-lg md:p-0'>
                I am a frontend developer with five years of hands-on experience spanning digital marketing, fintech, and the restaurant industry. My expertise lies in React, GraphQL, Apollo, Typescript, Tailwind, and Node.js, forming the backbone of my tech stack. Moreover, I bring a solid understanding in Angular, Redux, Sass, Java, and REST to the table.
                <br />
                In addition to my technical prowess, I have thrived in agile environments, where I have seamlessly transitioned between roles beyond traditional development responsibilities. I have a solid foundation in Behavior-Driven Development (BDD) and have honed my skills in crafting automated test code to ensure robust solutions.
            </p>
        </div>
        <div className='w-1/2 h-1/2 flex flex-col justify-center items-end'>
            <Image alt='Picture of Conor' src={Profiler} height='310' width='250' className='rounded-lg border-white border-2' />
        </div>
    </div>
)
