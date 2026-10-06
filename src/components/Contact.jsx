

// const Contact = () => {
//   return (
//     <div 
//     name="contact"
//     className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 pt-40 text-white"
//     >
//         <div className="flex flex-col p-4 pt-80 justify-center max-w-screen-lg mx-auto h-full">
//             <div className="pb-8">
//                 <p className="text-4xl font-bold inline border-b-4 border-gray-500">CONTACT</p>
//                 <p className="py-6">Submit the form below to get in touch with me</p>
//             </div>
            
//             <div className="flex justify-center items-center">
//                 <form 
//                 action="https://getform.io/f/7b249005-74a5-4a0a-a761-d464aaadceda" 
//                 method="POST"
//                 className="flex flex-col w-full md:w-1/2">
//                     <input 
//                     type="text"
//                     name="name"
//                     placeholder="Enter your name"
//                     className="p-2 bg-transparent border-2 rounded-md
//                     text-white focus:outline-none"
//                     />
//                     <input 
//                     type="text"
//                     name="email"
//                     placeholder="Enter your email"
//                     className="my-4 p-2 bg-transparent border-2 rounded-md
//                     text-white focus:outline-none"
//                     />
//                     <textarea 
//                     name="message"
//                     placeholder="Enter your message"
//                     rows="10"
//                     className="p-2 bg-transparent border-2 rounded-md
//                     text-white focus:outline-none"
//                     ></textarea>

//                     <button className="text-white bg-gradient-to-b
//                     from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto
//                     flex items-center rounded-md hover:scale-110 duration-300">
//                         Let's talk
//                     </button>
//                 </form>
//             </div>
//         </div>
//         <p className="text-right font-bold">copyright &#169; 2023 by Aalia Amin | All Rights Reserved.</p>
//     </div>
//   )
// }

// export default Contact


const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b
      from-black to-gray-800 px-6 sm:px-8 md:px-4
      pt-20 sm:pt-24 pb-8 text-white"
    >
      <div
        className="flex flex-col justify-center
        max-w-screen-lg mx-auto w-full"
      >
        {/* Heading */}
        <div className="pb-8 sm:pb-10">
          <p
            className="text-3xl sm:text-4xl font-bold inline
            border-b-4 border-gray-500"
          >
            CONTACT
          </p>

          <p className="py-5 sm:py-6 text-sm sm:text-base text-gray-300">
            Submit the form below to get in touch with me
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center items-center w-full">
          <form
            action="https://getform.io/f/7b249005-74a5-4a0a-a761-d464aaadceda"
            method="POST"
            className="flex flex-col w-full sm:w-5/6 md:w-2/3 lg:w-1/2"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border-2 border-gray-500
              rounded-md text-white placeholder-gray-400
              focus:outline-none focus:border-cyan-500
              duration-200"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-3 bg-transparent border-2 border-gray-500
              rounded-md text-white placeholder-gray-400
              focus:outline-none focus:border-cyan-500
              duration-200"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="7"
              className="p-3 bg-transparent border-2 border-gray-500
              rounded-md text-white placeholder-gray-400
              focus:outline-none focus:border-cyan-500
              duration-200 resize-y"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="text-white bg-gradient-to-b
              from-cyan-500 to-blue-500
              px-6 py-3 my-8 mx-auto
              flex items-center rounded-md
              hover:scale-105 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center sm:text-right text-xs sm:text-sm
      font-bold text-gray-400 mt-10 sm:mt-16">
        Copyright © 2023 by Aalia Amin | All Rights Reserved.
      </p>
    </div>
  );
};

export default Contact;