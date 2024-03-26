import Image from "next/image"
import Fistbump from '../images/fistbump.jpeg'
import ConorAndSean from '../images/ConorAndSean.jpeg'
import Dancing from '../images/Dancing.jpeg'
import ConorAndCaelan from '../images/ConorAndCaelan.jpg'
import { Carousel } from "./Carousel"
import { Spiel } from "./Spiel"
import { Link } from './Link'

export const Outreach = () => (
    <div className="h-full w-full flex flex-col justify-around lg:flex-row lg:justify-between items-center px-20 md:px-40">
        <div className='w-full lg:w-1/3'>
            <Spiel title='Outreach'>
                <>
                    Over the past 3 years, I have spent over 500 hours volunteering with <Link href='https://barretstown.org/' target="_blank">Barretstown</Link>, a <Link href='https://seriousfun.org/' target='_blank'>SeriousFun</Link> camp in Ireland for children with serious illnesses and their families.
                </>
            </Spiel>
        </div>
        <div className='flex flex-col justify-center items-center mx-4'>
            <Carousel>
                <Image 
                    src={Fistbump} 
                    alt='Conor volunteering with a Barretstown camper'
                    width={550}
                    height={300}
                    className='rounded-lg h-[300px] w-[550px] border-2 border-indigo-900' 
                />
                <Image 
                    src={ConorAndSean}
                    alt='Conor and a fellow volunteer' 
                    width={550}
                    height={300}
                    className='rounded-lg h-[300px] w-[550px] border-2 border-indigo-900' 
                />
                <Image 
                    src={Dancing}
                    alt='Conor dancing at camp'
                    width={550}
                    height={300}
                    className='rounded-lg h-[300px] w-[550px] border-2 border-indigo-900'
                />
                <Image 
                    src={ConorAndCaelan}
                    alt='Conor and his brother, Caelan, at Barretstown Castle'
                    width={550}
                    height={300}
                    className='rounded-lg h-[300px] w-[550px] border-2 border-indigo-900'
                />
            </Carousel>
        </div>
    </div>
)