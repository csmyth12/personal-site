const sections = ['Header', 'Timeline', 'Tech', 'Outreach', 'Contact']

export const ScrollBar = () => (
    <div className='hidden md:flex h-24 w-6 rounded-xl border-2 border-white right-4 top-1/2 flex-col'>
        {sections.map((section, index) => (
            <button className='w-4 h-4 border-2 border-gray-50 rounded-xl' key={index}>HELLO</button>
        ))}
    </div>
)