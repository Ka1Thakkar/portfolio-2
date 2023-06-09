import React from 'react';
import { Poppins } from '@next/font/google';
import { useForm, ValidationError } from '@formspree/react';
import Thank from './thank_you';

const poppins = Poppins({
    subsets:["latin"],
    weight:['400']
})

function ContactForm() {
  const [state, handleSubmit] = useForm("myyaqagk");
  if (state.succeeded) {
      return (<Thank />);
  }
  return (
    <div className='mx-auto'>
    <section className={poppins.className}>
      <form onSubmit={handleSubmit} className='bg-black bg-opacity-30 p-10 rounded-xl'>
        <div className='pb-12 text-center'>
          <label className='text-5xl text-white underline-offset-8 underline decoration-red-600'>Contact Me</label>
        </div>
        {/* <div className='pb-2'>
          <label htmlFor="name" className='text-white text-3xl'>Full Name</label>
        </div> */}
        <div className='pb-5'>
          <input type='text' name='Full Name' placeholder='Full Name' className='w-64 sm:w-96 h-10 rounded-lg text-center outline-none font-bold text-gray-500' />
        </div>
        {/* <div className='text-white pb-2 text-3xl'>
            <label htmlFor="email" className=''>Email Address</label>
        </div> */}
        <div className='pb-5'>
            <input
            id="email"
            type="email" 
            name="email"
            placeholder='Email ID'
            className='w-64 h-10 sm:w-96 rounded-lg text-center outline-none font-bold text-gray-500'
            />
        </div>
        {/* <div className='pb-2'>
          <label htmlFor="subject" className='text-white text-3xl'>Subject</label>
        </div> */}
        <div className='pb-5'>
          <input type='text' name='Subject' placeholder='Subject' className='w-64 sm:w-96 h-10 rounded-lg text-center outline-none font-bold text-gray-500' />
        </div>
        <div>
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
        </div>
        <div className='pb-5'>
            <textarea
            id="message"
            name="message"
            className='rounded-lg h-20 w-64 sm:w-96 text-center outline-none font-bold text-gray-500'
            placeholder='Write a message here...'
            />
        </div>
        <div>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
        </div>
        <div className='flex justify-center'>
            <button type="submit" disabled={state.submitting} className='bg-orange-600 rounded-xl px-5 py-2 border-orange-600 border-2 outline-none'>Submit</button>
        </div>
    </form>
    </section>
    </div>
  );
}
function Contact() {
  return (
    <ContactForm />
  );
}
export default Contact;