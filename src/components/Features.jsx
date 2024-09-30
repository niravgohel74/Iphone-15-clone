import { useGSAP } from '@gsap/react'
import React from 'react'
import { animateWithGsap } from '../utils/animations'
import { exploreVideo } from '../utils'

const Features = () => {
    useGSAP(() => {
        animateWithGsap('features_title', {opacity: 1, y: 0})
    }, [])
  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>Features 
        <div className='screen-max-width'>
            <div className='mb-12 w-full'>
                <h1 id='feature-title' className='section-heading'>Explore the full story.</h1>
            </div>
            <div className='flex flex-col justify-center items-center overflow-hidden'>
               <div className='mt-32 mb-24 pl-24'>
                    <h2 className='text-6xl lg:text-7xl font-semibold'>iphone.</h2>
                </div> 
               <div className='mt-32 mb-24 pl-24'>
                    <h2 className='text-6xl lg:text-7xl font-semibold'>Forged in titanium.</h2>
                </div> 
                <div className='flex-center flex-cl sm:px-10'>
                    <div className='relative h-[50vh w-full flex items-center' >
                        <video playsInline id="exploreVideo" className='w-full h-full object-cover object-center' preload='none' muted autoPlay>
                            <source src={exploreVideo} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features