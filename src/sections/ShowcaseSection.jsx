import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id='work' className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* Left */}
                <div className='first-project-wrapper'>
                    <div className='image-wrapper'>
                        <img src="/images/project1.png" alt="Ryde" />
                    </div>
                    <div className='text-content'>
                        <h2>
                            On-Demand Rides Made Simple with a powerful, user-Friendly App called Ryde
                        </h2>
                        <p className='text-white-50 md:text-xl'>
                            An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.
                        </p>
                    </div>
                </div>
                {/* Right */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project'>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.png" alt="library Management platform" />
                        </div>
                        <h2>
                            Library Management Platform
                        </h2>
                    </div>

                    <div className='project'>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/project3.png" alt="YC Directory" />
                        </div>
                        <h2>
                            YC Directory - A Startup Showcase App
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection
