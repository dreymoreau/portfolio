import React from 'react'
import meowApi from '../assets/meowApi.png'
import portfolio from '../assets/portfolio.png'
import treesForLife from '../assets/treesForLife.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: meowApi,
            codeLink: 'https://github.com/dreymoreau/meow-api',
            demoLink: 'https://meow-api.up.railway.app/'
        },
        {
            id: 2,
            src: portfolio,
            codeLink: 'https://github.com/dreymoreau/portfolio',
            demoLink: 'https://dreymoreau.netlify.app/'
        },
        {
            id: 3,
            src: treesForLife,
            codeLink: 'https://github.com/dreymoreau/tree-project',
            demoLink: 'https://treesareneededforlife.netlify.app/'
        }
    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'> 
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div classname='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                
            {
                portfolios.map(({id,src,codeLink,demoLink}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <button onClick={(() => window.open(demoLink, '_blank'))}
                                 rel="noreferrer" 
                                 className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>

                        <button onClick={() => window.open(codeLink, '_blank')}
                                 rel="noreferrer"
                                 className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio