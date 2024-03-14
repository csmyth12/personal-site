//@ts-ignore
import { UilFileDownload } from '@iconscout/react-unicons'
import { Spiel } from './Spiel'

export const Contact = () => (
    <div className='flex flex-col h-full w-full justify-center px-40'>
        <Spiel title='Contact'>
            <div className='flex flex-col items-start justify-center'>
                <p className='text-lg my-2'>Email: <a href='mailto:conorsmyth12@gmail.com' className='text-indigo-700 hover:text-indigo-950'>conorsmyth12@gmail.com</a></p>
                <p className='text-lg my-2'>Phone: <a href='tel:00353894892415' className='text-indigo-700 hover:text-indigo-950'>+353 89 489 2415</a></p>
                <div className='flex flex-row items-center justify-center my-2'>
                    <p className='text-lg mr-2'>Checkout my resume: </p>
                    <a href='/ConorSmyth_CV_2024.pdf' download='ConorSmytth_CV.pdf' className='text-indigo-700 hover:text-indigo-950'>
                        <UilFileDownload />
                    </a>
                </div>
            </div>
        </Spiel>
    </div>
)
