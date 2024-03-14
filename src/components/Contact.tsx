//@ts-ignore
import { UilFileDownload } from '@iconscout/react-unicons'
import { Spiel } from './Spiel'

export const Contact = () => (
    <div className='flex flex-col h-full w-full justify-around items-center px-20 md:justify-between md:flex-row md:px-40'>
        <div className='w-full md:w-1/3'>
            <Spiel title='Contact'>
                <p>I am currently seeking new opportunities! If you liked anything you saw here and would like to get in touch, please feel free to contact me or save my resume for a future date.</p> 
            </Spiel>
        </div>
        <div className='flex flex-col items-start justify-center lg:pr-40'>
            <p className='text-lg my-2'>Email: <a href='mailto:conorsmyth12@gmail.com' className='text-indigo-700 hover:text-indigo-950'>conorsmyth12@gmail.com</a></p>
            <p className='text-lg my-2'>Phone: <a href='tel:00353894892415' className='text-indigo-700 hover:text-indigo-950'>+353 89 489 2415</a></p>
            <div className='flex flex-row items-center justify-center my-2'>
                <p className='text-lg mr-2'>Checkout my resume: </p>
                <a href='/ConorSmyth_CV_2024.pdf' download='ConorSmyth_CV.pdf' className='text-indigo-700 hover:text-indigo-950'>
                    <UilFileDownload />
                </a>
            </div>
        </div>
    </div>
)
