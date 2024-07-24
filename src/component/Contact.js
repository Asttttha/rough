import React, { useState } from 'react'
import { MdError } from 'react-icons/md';

const Contact = () => {

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(true);
    const [tandc, setTandc] = useState(false)

    const verifyEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleChange = (e) => {
        setEmail(e.target.value);
        setValidEmail(verifyEmail(e.target.value));
    };


    return (
        <div className='flex flex-col-reverse md:flex-row p-4 md:p-10'>
            <form className='md:w-2/4 bg-white'>
                <fieldset className='w-full p-5 flex flex-col justify-start gap-2'>
                    <legend className='text-3xl font-bold text-gray-700 pt-5 pb-1 mb-5 border-b-2 border-blue-900'>Tell us</legend>
                    <label for="fname" className='italic text-l border-l-2 p-2 border-blue-900 '>First name:</label>
                    <input type="text" id="fname" name="fname" className='border-2 border-black-900 rounded p-2 md:w-full w-72' required />
                    <label for="lname" className='italic text-l border-l-2 p-2 border-blue-900'>Last name:</label>
                    <input type="text" id="lname" name="lname" className='border-2 border-black-900 rounded p-2 md:w-full w-72' required />
                    <label for="email" className='italic text-l border-l-2 p-2 border-blue-900' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address.">Email:</label>
                    <input type="email" id="email" name="email" className="border-2 border-black-900 rounded p-2 md:w-full w-72" value={email} onChange={handleChange} required />
                    {!validEmail && <p className='text-red-600 italic text-sm'>
                        Enter a valid email address!</p>}
                    <label for="message" className='italic text-l border-l-2 p-2 border-blue-900'>Message:</label>
                    <textarea type="text" id="message" name="message" rows="4" cols="50" className='border-2 border-black-900 rounded p-2 md:w-full w-72' required />
                    <div className="italic text-l border-l-2 flex gap-2 p-2 border-blue-900">
                        <input htmlFor="terms" type='checkbox' className='w-4' required/>
                        <p>I agree to the{' '}
                            <a href="https://example.com/" className="text-blue-900 underline">
                                Terms and Conditions
                            </a>
                        </p>
                    </div>
                    <button type='submit' className='bg-blue-950/100 text-white rounded p-2 my-2 w-1/4'>Send</button>
                </fieldset>
            </form>
            <div className='md:w-2/4 bg-blue-950/100 text-white p-10'>
                <p className='py-2 italic text-center text-2xl text-gray-100'>Hi there, we are grateful to have you here :)</p>
                <div className="md:w-2/4 mb-4">
                    <h3 className="text-xl font-semibold text-xl mb-4"> Address</h3>
                    <p className="mb-2">Springdale Public School</p>
                    <p className="mb-2">123 Education Lane, Cityville, State, ZIP Code, <br />Phone: +1 (123) 456-7890</p>
                    <p>Email: <a href="mailto:info@springdale.edu" className="text-blue-400 hover:underline">info@springdale.edu</a></p>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.844660969761!2d-122.40187268464847!3d37.78511657975839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c3f71f91f%3A0x21b6b7b9d1e71bfc!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1676498566402!5m2!1sen!2sus"
                    width="100%"
                    height="60%"
                    style={{ padding: '4px' }}
                    title="Google Maps Location" />

            </div>
        </div>
    )
}

export default Contact