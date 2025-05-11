import { motion } from "motion/react";

export const Intro = () => {
    return <div className='w-full max-h-vh bg-blue-200 flex-row justify-center items-center' >
        <motion.div className='w-64 h-64 bg-red-400' initial={{rotate: 0}} animate={{rotate: 360 }}/>
    </div>
}