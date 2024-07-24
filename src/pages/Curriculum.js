import React from 'react'

const Curriculum = () => {
    const subjectsP = [
        { code: "ENG1", name: "English" },
        { code: "MATHS1", name: "Mathematics" },
        { code: "SCI1", name: "Science" },
        { code: "SST1", name: "Social studies" },
        { code: "ART1", name: "Art" },
        { code: "PHYED1", name: "Physical Education" }
    ];

    const subjectsS = [
        { code: "ENG2", name: "English" },
        { code: "MATHS2", name: "Mathematics" },
        { code: "SCI2", name: "Science-PCB" },
        { code: "SST2", name: "Social studies" },
        { code: "CSC1", name: "Computer Science" },
        { code: "ART2", name: "Art" },
        { code: "PHYED2", name: "Physical Education" }
    ];

    const subjectsSSS = [
        { code: "PHYS1", name: "Physics" },
        { code: "CHEM1", name: "Chemistry" },
        { code: "BIO1", name: "Biology" },
        { code: "MATHS3", name: "Mathematics" },
        { code: "CSC2", name: "Computer Science" },
        { code: "ENG3", name: "ENGLISH" },
    ];

    const subjectsCom = [
        { code: "ACC1", name: "Accountancy" },
        { code: "BST1", name: "Business Studies" },
        { code: "ECO1", name: "Economics" },
        { code: "MATHS3", name: "Mathematics" },
        { code: "ENG3", name: "ENGLISH" },
    ];


    return (
        <div className='p-10'>
            <p className='text-3xl font-bold text-gray-700'>Curriculum</p>
            <p className='py-2 italic text-gray-700'>The School has students enrolled from grade 1 to grade 12.</p>

            {/* primary */}
            <div>
                <p className='border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2'>Primary school (I-V)</p>
                <div className='flex flex-col md:flex-row place-content-evenly p-5'>
                    <p className=' text-sm md:text-lg md:py-10 md:w-2/4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <div>
                        <table className=" m-2 md:w-96 bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left font-medium text-gray-600">Code</th>
                                    <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left font-medium text-gray-600">Subject Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjectsP.map((subject) => (
                                    <tr key={subject.code} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b border-gray-300">{subject.code}</td>
                                        <td className="py-2 px-4 border-b border-gray-300">{subject.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Secondary */}
            <div>
                <p className='border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2'>Secondary school (VI-X)</p>
                <div className='flex flex-col md:flex-row place-content-evenly p-5'>
                    <p className='text-sm md:text-lg md:py-10 md:w-2/4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <div>
                        <table className="m-2 md:w-96 bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left font-medium text-gray-600">Code</th>
                                    <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left font-medium text-gray-600">Subject Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjectsS.map((subject) => (
                                    <tr key={subject.code} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b border-gray-300">{subject.code}</td>
                                        <td className="py-2 px-4 border-b border-gray-300">{subject.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Senior secondary Science */}
            <div>
                <p className='border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2'>Senior secondary school - Science  (XI-XII)</p>
                <div className='flex flex-col md:flex-row place-content-evenly p-5'>
                    <p className='text-sm md:text-lg md:py-10 md:w-2/4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <div>
                        <table className="m-2 md:w-96 bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left font-medium text-gray-600">Code</th>
                                    <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left font-medium text-gray-600">Subject Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjectsSSS.map((subject) => (
                                    <tr key={subject.code} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b border-gray-300">{subject.code}</td>
                                        <td className="py-2 px-4 border-b border-gray-300">{subject.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Senior secondary Commerce */}
            <div>
                <p className='border-b-2 border-blue-900 text-xl font-bold text-gray-600 py-2'>Senior secondary school - Science  (XI-XII)</p>
                <div className='flex flex-col md:flex-row place-content-evenly p-5'>
                    <p className='text-sm md:text-lg md:py-10 md:w-2/4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <div>
                        <table className="m-2 md:w-96 bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left font-medium text-gray-600">Code</th>
                                    <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left font-medium text-gray-600">Subject Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {subjectsCom.map((subject) => (
                                    <tr key={subject.code} className="hover:bg-gray-50">
                                        <td className="py-2 px-4 border-b border-gray-300">{subject.code}</td>
                                        <td className="py-2 px-4 border-b border-gray-300">{subject.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Curriculum