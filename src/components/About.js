import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-full bg-gradient-to-b from-gray-800
    to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>About</p>
            </div>

            <p className='text-xl mb-20'>
                Prior to the pandemic I was a freelancing artist, as a photographer and painter. Through the pandemic, I got a concussion as I was in the crypto space. Learning about smart contracts made me super interested into how to build it. As I was taking time from the crypto space, I started learning how to code. I found my passion of software development unexpectedly and transitioned into tech. It has allowed me to connect with lots of amazing developers in tech while working on client projects to achieve their goals as well as building projects focused on my passions. 
            </p>
        </div>
    </div>
  )
}

export default About