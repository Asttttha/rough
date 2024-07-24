import React from 'react'

const QuickLinks = () => {
    return (
        <div className='m-5 md:flex '>
            <div className='md:w-2/4 h-screen md:h-auto w-full flex md:m-5 p-6 relative'>
                <img src='https://via.placeholder.com/400' alt='schoolimg' className='rounded md:h-80 h-80 w-72 md:w-2/4 absolute md:left-4 left-0 top-0 ' />
                <div className='rounded bottom-20 absolute md:right-0 bg-blue-950/100 md:bottom-0 md:w-2/4'>
                    <p className='p-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et ipsum at turpis ultricies pellentesque. Ut ut aliquet ligula, id consequat ipsum. Integer id auctor lacus. Duis convallis id nisi ut pretium. Etiam semper et enim quis faucibus. Sed sed sollicitudin tellus, sit amet iaculis ligula. Aenean eget arcu sed velit vulputate sollicitudin. Morbi sed erat iaculis, congue leo id, faucibus enim. Nullam sollicitudin eu arcu ac posuere. Nam eget est et nulla varius malesuada in quis nibh.</p></div>
            </div>
            <div className='md:px-10 flex md:m-5 flex-col md:w-2/4 items-center bg-white rounded'>
                <h1 className='text-3xl p-2 text-gray-700 font-bold'>Quick links</h1>
                <div className='flex flex-wrap m-2 items-center place-content-evenly'>
                    <a
                        href='/contact' target="_blank"
                        rel="noopener noreferrer"
                        className='px-10 py-4 m-2 bg-blue-950/100 rounded '>
                        Contact
                    </a>
                    <a
                        href='https://example.com/' target="_blank"
                        rel="noopener noreferrer"
                        className='px-10 py-4 m-2 bg-blue-950/100 rounded '>
                        Announcements
                    </a>
                    <a
                        href='/academics' target="_blank"
                        rel="noopener noreferrer"
                        className='px-10 py-4 m-2 bg-blue-950/100 rounded '>
                        Academics
                    </a>
                    <a
                        href='/gallery' target="_blank"
                        rel="noopener noreferrer"
                        className='px-10 py-4 m-2 bg-blue-950/100 rounded '>
                        Gallery
                    </a>
                    <a
                        href='https://example.com/' target="_blank"
                        rel="noopener noreferrer"
                        className='px-10 py-4 m-2 bg-blue-950/100 rounded '>
                        Terms & Condition
                    </a>
                    <a
                        href='https://example.com/' target="_blank"
                        rel="noopener noreferrer"
                        className='px-10 py-4 m-2 bg-blue-950/100 rounded '>
                        Privacy Policies
                    </a>
                    <a
                        href='https://example.com/' target="_blank"
                        rel="noopener noreferrer"
                        className='px-10 py-4 m-2 bg-blue-950/100 rounded '>
                        Announcements1
                    </a>
                    <a
                        href='https://example.com/' target="_blank"
                        rel="noopener noreferrer"
                        className='px-10 py-4 m-2 bg-blue-950/100 rounded '>
                        Announcements2
                    </a>
                    <a
                        href='https://example.com/' target="_blank"
                        rel="noopener noreferrer"
                        className='px-10 py-4 m-2 bg-blue-950/100 rounded '>
                        Announcements3
                    </a>
                    <a
                        href='https://example.com/' target="_blank"
                        rel="noopener noreferrer"
                        className='px-10 py-4 m-2 bg-blue-950/100 rounded '>
                        Announcements4
                    </a>
                    <a
                        href='https://example.com/' target="_blank"
                        rel="noopener noreferrer"
                        className='px-10 py-4 m-2 bg-blue-950/100 rounded '>
                        Announcements5
                    </a>
                </div>
            </div>
        </div>
    )
}

export default QuickLinks