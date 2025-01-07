import React from 'react'
import cohere from "../assets/events/tt_cohere.jpg"
import holidayparty from "../assets/events/tt_holidayparty.jpg"
import kobo from "../assets/events/tt_kobo.jpg"
import ng_portrait from "../assets/events/tt_niagaraglen_portrait.jpg"
import ng from "../assets/events/tt_niagaraglen.jpg"
import vena from "../assets/events/tt_vena.jpg"


const Events = () => {
    const photos = [
        {
            id: 1,
            src: cohere,
            title: 'cohere event',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: holidayparty,
            title: 'holiday party',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: ng,
            title: 'Niagara Glen',
            style: 'shadow-sky-400'
        },
        {
            id: 4,
            src: vena,
            title: 'vena event',
            style: 'shadow-white'
        },
        {
            id: 5,
            src: kobo,
            title: 'kobo event',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            src: ng_portrait,
            title: 'Niagara Glen portrait',
            style: 'shadow-blue-600'
        }
    ]
    return (
            <div name='events' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
                    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
                        <div>
                            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Events! {'>:)'} </p>
                        </div>

                        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                            {photos.map(({id,src,title,style}) => (
                                <div key={id} 
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="tech languages used" className='mx-auto'/>
                                <p className='mt-4'>{title}</p>
                            </div>
                            ))}
                        </div>
                    </div>
            </div>
    )
}
 

export default Events 
