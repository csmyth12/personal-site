import Image from "next/image"
import Fistbump from '../images/fistbump.jpeg'
import ConorAndSean from '../images/ConorAndSean.jpeg'
import ConorAndCaelan from '../images/ConorAndCaelan.jpg'
import Dancing from '../images/Dancing.jpeg'
import { Carousel } from "./Carousel"
import { Spiel } from "./Spiel"

export const Outreach = () => (
    <div className="h-full w-full flex flex-col justify-around md:flex-row md:justify-between items-center px-40">
        <div className='w-1/3'>
            <Spiel title='Outreach'>
                <p className='text-lg text-justify w-full'>
                    Over the past 3 years, I have spent over 500 hours volunteering with <a className='text-indigo-700 hover:text-indigo-950' href='https://barretstown.org/' target="_blank">Barretstown</a>, a <a className='text-indigo-700 hover:text-indigo-950' href='https://seriousfun.org/' target='_blank'>SeriousFun</a> camp in Ireland for children with serious illnesses and their families.
                </p>
            </Spiel>
        </div>
        <div className='w-1/3 flex flex-col justify-center items-center mx-4'>
            <Carousel>
                <Image src={Fistbump} alt='Conor volunteering with a Barretstown camper' width='500' height='400' className='rounded-lg' />
                <Image src={ConorAndSean} alt='Conor and a fellow volunteer' width='500' height='400' className='rounded-lg' />
                <Image src={ConorAndCaelan} alt='Conor and his brother, Caelan, at Barretstown Castle' width='500' height='200' className='rounded-lg' />
                <Image src={Dancing} alt='Conor dancing at camp' width='500' height='400' className='rounded-lg' />
            </Carousel>
        </div>
    </div>
)