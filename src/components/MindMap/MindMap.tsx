import { Spiel } from "../Spiel"
import { MapEntry } from "./MapEntry"
import { technologies } from "./technologies"

export const MindMap = () => (
    <div className='h-screen w-screen flex flow-col justify-center items-center px-40 md:flex-row md:justify-between'>
        <div className='w-1/3'>
            <Spiel title='Technologies'>
                <p className="text-lg text-justify">
                    Throughout my 5 year career, I&#39;ve had the opportunity to work with multilpe technologies and work styles in different environments. Here&#39;s a look at some of those skills
                </p>
            </Spiel>
        </div>
            <div className='h-1/2 w-1/2 max-h-[440px] max-w-[600px] md:min-w-[600px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {technologies.map((tech) => <MapEntry key={tech.name} tech={tech} />)}
            </div>
    </div>
)