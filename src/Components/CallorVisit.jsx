import React from 'react'

const CallorVisit = () => {
  return (
    <div className='h-[90vh] bg-black'>
        <div className='text-white text-4xl font-serif tracking-widest text-center pt-10'>
          Call or visit
        </div>

        <div className='flex justify-center items-center gap-10 mt-10 m-8'>

          <div className='w-full h-[400px] p-5 pl-20 rounded-lg shadow-md text-white'>
            <div className='text-xl tracking-widest mb-5 font-semibold font-serif'>
              Send Message
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white">What is your name?</legend>
                <input type="text" className="input w-full" placeholder="Type here" />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white">What is your name?</legend>
                <input type="text" className="input w-full" placeholder="Type here" />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-white">What is your name?</legend>
                <textarea placeholder="Neutral" className="textarea w-full textarea-neutral"></textarea>
              </fieldset>
              
            </div>
          </div>

          <div className=' w-full h-[400px] p-5 rounded-lg shadow-md font-serif text-white'>
            <div className='text-xl tracking-widest mb-5 font-semibold'>
              Marci Metzger - THE RIDGE REALTY GROUP
            </div>
            <div>
              3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
            </div>
            <div>
              (206) 919-6886
            </div>
            <div className='text-xl tracking-widest my-5 font-semibold'>
              Office Hours
            </div>
            <div className='my-5'>
              Open today
              <select defaultValue="Open today" className="select select-ghost ml-3">
                <option disabled={true}>Pick a date</option>
                <option>Mon 08:00 am – 07:00 pm</option>
                <option>Tue 08:00 am – 07:00 pm</option>
                <option>Wed 08:00 am – 07:00 pm</option>
                <option>Thu 08:00 am – 07:00 pm</option>
                <option>Fri 08:00 am – 07:00 pm</option>
                <option>Sat 08:00 am – 07:00 pm</option>
                <option>Sun 08:00 am – 07:00 pm</option>
            </select>
            </div>
            <div className='my-5'>
              Open Daily 8:00 am - 7:00 pm
            </div>
            <div className='my-5'>
              Appointments outside office hours available upon request. Just call!
            </div>
            <div className='my-5'>
              <button className="btn bg-[#5EBB2B] text-white border-[#4eaa0c]">
                <svg aria-label="WeChat logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="white"><path d="M11.606,3.068C5.031,3.068,0,7.529,0,12.393s4.344,7.681,4.344,7.681l-.706,2.676c-.093,.353,.284,.644,.602,.464l3.173-1.798c1.403,.447,4.381,.59,4.671,.603-.208-.721-.311-1.432-.311-2.095,0-3.754,3.268-9.04,10.532-9.04,.165,0,.331,.004,.496,.011-.965-4.627-5.769-7.827-11.195-7.827Zm-4.327,7.748c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Zm8.386,0c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Z"></path><path d="M32,19.336c0-4.26-4.998-7.379-9.694-7.379-6.642,0-9.459,4.797-9.459,7.966s2.818,7.966,9.459,7.966c1.469,0,2.762-.211,3.886-.584l2.498,1.585c.197,.125,.447-.052,.394-.279l-.567-2.46c2.36-1.643,3.483-4.234,3.483-6.815Zm-12.73-.81c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275c0,.705-.571,1.275-1.275,1.275Zm6.373,0c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275-.571,1.275-1.275,1.275Z"></path></g></svg>
                <a href="https://api.whatsapp.com/send/?phone=14259412560&text&type=phone_number&app_absent=0">Message us on WeChat</a>
              </button>
            </div>

          </div>


          


        </div>
    </div>
  )
}

export default CallorVisit