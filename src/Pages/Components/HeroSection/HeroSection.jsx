import React from 'react'
import Card from './components/card'
import deepak from "../../../assets/deepak.jpg"
import SplitText from '../../../components/SplitText/SplitText'
import GradientText from './components/GradientText'

const HeroSection = () => {
    return (
        <section className='padded-container'>
            <div className='flex flex-col-reverse gap-y-7 md:flex-row lg:w-full lg:justify-center lg:gap-30  items-center justify-between p-4'>
                <div>
                    <div className='w-fit flex-wrap text-center'>
                        <h1>
                            <SplitText
                                text="Hello, I'm Deepak Chhantyal"
                                className="text-4xl font-bold whitespace-normal"
                                delay={100}
                                duration={0.3}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                            // onLetterAnimationComplete={handleAnimationComplete}
                            />
                        </h1>
                        <p className='text-lg text-center md:text-center mt-2'>

                            <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="custom-class"
                            >
                                A passionate web developer with a love for crafting interactive and user-friendly digital experiences.
                            </GradientText>
                        </p>
                    </div>
                </div>
                <div>
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
