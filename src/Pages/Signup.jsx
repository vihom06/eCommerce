import React from 'react'

const Signup = () => {
  return (
    <section>
      <div className='w-full h-full flex justify-center items-center relative py-7'>

        <div className=' absolute translate-x-56  -z-10 h-52 w-60 rounded-full shadow-2xl shadow-green-800 blur-2xl bg-amber-400 border'></div>

        <div className='absolute translate-x-56 translate-y-32 top-0 left-0 -z-10 h-[550px] w-[700px] rounded-full border-l-[100px] bg-orange-800 blur-3xl'></div>

        <div className='absolute -translate-x-56 bottom-0 right-0 -z-10 h-[550px] w-[700px] rounded-full border-t-[100px] border-r-[100px] border-blue-800 blur-3xl'></div>

        {/* main box */} 
        <div className='w-full max-w-3xl bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl border py-36 m-16 p-10 '>
          <form className='flex flex-col items-center gap-8'>

            <h1 className='text-4xl font-bold text-center'>New to VENDORA</h1>
            <h1 className='-mt-6 text-4xl font-bold text-center font-serif bg-gradient-to-r from-blue-600 to-orange-800 bg-clip-text text-transparent '>SIGNUP</h1>

            <div className='flex items-center gap-6 w-full px-8'>

              <label className='w-24 text-lg font-semibold font-serif'>
                Name
              </label>

              <input
                className='bg-white/60 flex-1 text-center border rounded-md transition-all hover:scale-[1.01] hover:shadow-lg hover:border-orange-300 focus:outline-none py-2'
                placeholder='First Name'
                type="text"
              />

              <input
                className='bg-white/60 flex-1 text-center border rounded-md transition-all hover:scale-[1.01] hover:shadow-lg hover:border-orange-300 focus:outline-none py-2'
                placeholder='Last Name'
                type="text"
              />
            </div>

            <div className='flex items-center gap-6 w-full px-8'>

              <label className='w-24 text-lg font-semibold font-serif'>
                Email
              </label>

              <input
                className='bg-white/60 flex-1 text-center border rounded-md transition-all hover:scale-[1.01] hover:shadow-lg hover:border-orange-300 focus:outline-none py-2'
                placeholder='Email Address'
                type="email"
              />
            </div>

            <div className='flex items-center gap-6 w-full px-8'>

              <label className='w-24 text-lg font-semibold font-serif'>
                Phone
              </label>

              <input
                className='bg-white/60 flex-1 text-center border rounded-md transition-all hover:scale-[1.01] hover:shadow-lg hover:border-orange-300 focus:outline-none py-2'
                placeholder='Phone Number'
                type="email"
              />
            </div>

            <div className='flex items-center gap-6 w-full px-8'>

              <label className='w-24 text-lg font-semibold font-serif'>
                Password
              </label>

              <input
                className='bg-white/60 flex-1 text-center border rounded-md transition-all hover:scale-[1.01] hover:shadow-lg hover:border-orange-300 focus:outline-none py-2'
                placeholder='Password'
                type="email"
              />
            </div>

            <div className='flex items-center gap-6 w-full px-8'>

              <label className='w-24 text-lg font-semibold font-serif'>
                Company
              </label>

              <input
                className='bg-white/60 flex-1 text-center border rounded-md transition-all hover:scale-[1.01] hover:shadow-lg hover:border-orange-300 focus:outline-none py-2'
                placeholder='Company Name'
                type="email"
              />
            </div>

            <button
              type='submit'
              className=' mt-6 w-[85%] py-3 rounded-2xl text-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-orange-600/50 to-blue-700 shadow-lg shadow-orange-300/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-400/50 active:scale-[0.98] backdrop-blur-xl'>
              Signup
            </button>

          </form>
        </div>

      </div>
    </section>

  )
}

export default Signup
