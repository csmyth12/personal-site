import { Link } from './Link';
import { Spiel } from './Spiel';

export const Projects = () => (
    <div className="h-full w-full flex flex-col justify-around lg:flex-row lg:justify-between items-center px-20 md:px-40">
        <div className='w-full lg:w-1/3'>
            <Spiel title='Projects'>
                <p className='text-lg text-justify w-full'>
                    I have recently started working on some personal projects in my spare time. You can check them out by following the links provided in this section.
                </p>
            </Spiel>
        </div>
        <div className='w-full lg:w-1/3'>
            <ol className='list-disc'>
                <li>
                    <p className='text-2xl'>
                        <Link href='https://csmyth12.github.io/list-ranker/'>Ranker</Link>
                    </p>
                    <p>A website that helps users rank lists of items through a series of 1 on 1 comparisons</p>
                </li>
            </ol>
        </div>
    </div>
)
