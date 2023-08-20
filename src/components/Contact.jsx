

const Contact = () => {
  return (
    <div 
    name="contact"
    className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 pt-40 text-white"
    >
        <div className="flex flex-col p-4 pt-60 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">CONTACT</p>
                <p className="py-6">Submit the form below to get in touch with me</p>
            </div>
            
            <div className="flex justify-center items-center">
                <form 
                action="https://getform.io/f/7b249005-74a5-4a0a-a761-d464aaadceda" 
                method="POST"
                className="flex flex-col w-full md:w-1/2">
                    <input 
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none"
                    />
                    <input 
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    className="my-4 p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none"
                    />
                    <textarea 
                    name="message"
                    placeholder="Enter your message"
                    rows="10"
                    className="p-2 bg-transparent border-2 rounded-md
                    text-white focus:outline-none"
                    ></textarea>

                    <button className="text-white bg-gradient-to-b
                    from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
                    flex items-center rounded-md hover:scale-110 duration-300">
                        Let's talk
                    </button>
                </form>
            </div>
        </div>
        <p className="text-right font-bold">copyright &#169; 2023 by Aalia Amin | All Rights Reserved.</p>
    </div>
  )
}

export default Contact