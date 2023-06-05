import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#010f33] text-[#bec2cd] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/590a17d8-5ffd-413c-952b-2e516635c478' className='flex flex-col max-w-[600px] w-full'>
            <div className='py-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#00FFFF]'>Contact</p>
                <p className='py-8'>Ready to chat? Submit the form below to get in touch with me.</p>
            </div>
            <input type="hidden" name="_gotcha" style={{display: "none !important"}} />
            <input className='p-2 bg-[#ccd6f6] text-gray-700 rounded-lg' type='text' placeholder='Name' name='name' />
            <input className= 'my-2 p-2 bg-[#ccd6f6] text-gray-700 rounded-lg' type='email' placeholder='Email' name='email' />
            <textarea className='p-2 bg-[#ccd6f6] text-gray-700 rounded-lg' placeholder='Your message' name='message' rows='5' />
            <button className='text-[#00FFFF] rounded-xl border-2 border-[#00FFFF] px-6 py-3 my-8 mx-auto flex items-center hover:bg-[#01345b]'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact