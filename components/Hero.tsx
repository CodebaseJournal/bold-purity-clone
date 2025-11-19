import React from 'react'

const Hero = () => {
    return (
        // MAIN CONTAINER: relative, always tall.
        <section className={'relative overflow-hidden h-[90vh] md:h-dvh'}>

            {/* 1. BACKGROUND IMAGE (Using <picture> for image swapping) */}
            <picture className="absolute inset-0 w-full h-full z-0">
                {/* Desktop Source (Loads on screens 768px and wider) */}
                <source
                    media="(min-width: 768px)"
                    srcSet={"/bold-purity-homepage.png"}
                />
                {/* Mobile Source (Loads by default, or smaller screens) */}
                <img
                    src={"/bold-purity-homepage-mobile.png"}
                    alt={'hero'}
                    className="w-full h-full object-cover object-center md:object-right"
                />
            </picture>

            {/* 2. TEXT CONTENT OVERLAY (Always absolute) */}
            <div className="
                absolute z-10 w-full h-full flex flex-col justify-start items-center pt-24

                md:justify-center md:items-start         /* Vertically center, left align */
                md:pt-0 md:px-20                         /* Remove top padding, apply side padding */
            ">

                {/* Text Wrapper - This is the floating box on mobile */}
                <div
                    className="
                    flex flex-col gap-4 max-w-sm py-8 px-6 text-center md:text-left md:bg-transparent md:shadow-none md:rounded-none md:max-w-xl "
                >

                    {/* "Beyond the Surface" tag */}
                    <span className="bg-white px-3 py-1 rounded-md uppercase text-xs font-semibold self-center md:self-start">
                        Beyond the Surface
                    </span>

                    {/* Heading text */}
                    <div className={'hero-text text-white'}>
                        <h1 className={'uppercase font-montserrat'}>
                            <span className="block">UNLOCK PURE</span>
                            <span className="block">GLOW WITH</span>
                            <span className="block">BOLDPURITY</span>
                        </h1>
                    </div>

                    {/* Subheading text */}
                    <p className="md:text-xl text-white">Let your skin feel pure love.</p>

                    {/* "Shop Now" button */}
                    <button className="bg-white text-primary-400 px-8 py-3 rounded-sm font-semibold uppercase text-sm mt-3 hover:bg-gray-100 transition-colors self-center md:self-start">
                        SHOP NOW
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Hero