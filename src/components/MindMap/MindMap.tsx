import { Spiel } from "../Spiel"
import { MapEntry } from "./MapEntry"
import { technologies } from "./technologies"

export const MindMap = () => (
    <div className='h-full md:h-screen w-screen flex flex-col justify-start items-center px-20 md:px-40 md:flex-row md:justify-between'>
        <div className='w-full md:w-1/3'>
            <Spiel title='Technologies'>
                Throughout my 5 year career, I&#39;ve had the opportunity to work with multilpe technologies and work styles in different environments. Here&#39;s a look at some of those skills
            </Spiel>
        </div>
        <div className='max-h-[440px] max-w-[600px] md:min-w-[600px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {technologies.map((tech) => <MapEntry key={tech.name} tech={tech} />)}
        </div>
    </div>
)