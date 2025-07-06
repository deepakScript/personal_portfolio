import React from 'react'

const HeroSection = () => {
    return (
        <section>
            <div>
                <div
                    class="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 border-2 border-amber-300 bg-white shadow-xl transition duration-300 hover:scale-105">
                    <div class="flex h-full justify-center items-center">
                        <span class="font-bold text-gray-500">Scale</span>
                    </div>
                </div>
                <div>
                    <h1>hello world</h1>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
