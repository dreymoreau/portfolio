import React from 'react'
import css from '../assets/code-assets/mongodb.jpg'
import html from '../assets/code-assets/html.png'
import javascript from '../assets/code-assets/javascript.png'
import nextjs from '../assets/code-assets/nextjs.png'
import node from '../assets/code-assets/node.png'
import tailwind from '../assets/code-assets/tailwind.png'
import reactImage from '../assets/code-assets/react.png'
import github from '../assets/code-assets/github.png'

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: nextjs,
            title: 'Next Js',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: node,
            title: 'NodeJS',
            style: 'shadow-green-700'
        },
        {
            id: 8,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        }
    
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-black to-gray-800 w-full h-full text-white'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies that I have worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


                {techs.map(({id,src,title,style}) => (
                    <div key={id} 
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="tech languages used" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience
