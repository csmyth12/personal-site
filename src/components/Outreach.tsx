import { Carousel } from "./Carousel"
import { Spiel } from "./Spiel"

export const Outreach = () => (
    <div className="h-full w-full flex flex-col justify-around lg:flex-row lg:justify-between items-center px-20 md:px-40">
        <div className='w-full lg:w-1/3'>
            <Spiel title='Outreach'>
                <p className='text-lg text-justify w-full'>
                    Over the past 3 years, I have spent over 500 hours volunteering with <a className='text-indigo-700 hover:text-indigo-950' href='https://barretstown.org/' target="_blank">Barretstown</a>, a <a className='text-indigo-700 hover:text-indigo-950' href='https://seriousfun.org/' target='_blank'>SeriousFun</a> camp in Ireland for children with serious illnesses and their families.
                </p>
            </Spiel>
        </div>
        <div className='flex flex-col justify-center items-center mx-4'>
            <Carousel>
                <img 
                    src='/images/fistbump.jpeg' 
                    alt='Conor volunteering with a Barretstown camper' 
                    className='rounded-lg h-[300px] w-[550px]' 
                />
                <img 
                    src='/images/ConorAndSean.jpeg'
                    alt='Conor and a fellow volunteer' 
                    className='rounded-lg h-[300px] w-[550px]' 
                />
                <img 
                    src='/images/Dancing.jpeg' 
                    alt='Conor dancing at camp'
                    className='rounded-lg h-[300px] w-[550px]'
                />
                <img 
                    src='/images/ConorAndCaelan.jpg'
                    alt='Conor and his brother, Caelan, at Barretstown Castle'
                    className='rounded-lg h-[300px] w-[550px]'
                />
            </Carousel>
        </div>
    </div>
)