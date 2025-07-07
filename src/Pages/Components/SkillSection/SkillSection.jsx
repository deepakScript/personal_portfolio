import React from 'react'
import RotatingText from './component/RotatingText'

const SkillSection = () => {
    return (
        <section className='padded-container flex flex-col items-center justify-center gap-4 p-4'>
            <div>
                <h1 className='text-5xl font-bold text-blue-700'>Skills</h1>
            </div>
            <div className='flex flex-col-reverse gap-y-7 md:flex-row lg:w-full lg:justify-center lg:gap-30  items-center justify-between p-4'>

                <div>
                    <h5 className='flex text-blue-700 items-center text-7xl gap-5'>
                        Proffiency in <RotatingText
                            texts={['React JS', 'Node JS', 'Next JS', 'SQL', 'MongoDB', 'Tailwind CSS', 'Laravel', 'Postgre SQL',]}
                            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-white"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}
                        />
                    </h5>
                </div>
            </div>
        </section>
    )
}

export default SkillSection
