//@ts-ignore
import { UilFileDownload } from '@iconscout/react-unicons'
import { Spiel } from './Spiel'
import { Link } from './Link'

export const Contact = () => (
    <div className='flex flex-col h-full w-full justify-center items-center px-20 md:justify-between md:flex-row md:px-40'>
        <div className='w-full md:w-1/3'>
            <Spiel title='Contact'>
                I am currently seeking new opportunities. If you liked anything you saw here and would like to get in touch, please feel free to contact me or save my resume for a future date.
            </Spiel>
        </div>
        <div className='flex flex-col items-start justify-center lg:pr-40'>
            <p className='text-lg my-2'>Email: <Link href='mailto:conorsmyth12@gmail.com'>conorsmyth12@gmail.com</Link></p>
            <p className='text-lg my-2'>Phone: <Link href='tel:00353894892415'>+353 89 489 2415</Link></p>
            <div className='flex flex-row items-center justify-center my-2'>
                <p className='text-lg mr-2'>Checkout my resume: </p>
                <a href='/ConorSmyth_CV_2024.pdf' download='ConorSmyth_CV.pdf' className='text-indigo-700 hover:text-indigo-950'>
                    <UilFileDownload />
                </a>
            </div>
        </div>
    </div>
)
