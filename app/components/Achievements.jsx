import React from 'react'

const Achievements = () => {
  return (
    <div>
        <h1 className='text-[#a984ff69] text-center text-[58px] leading-[58px] font-extrabold'>ACHIEVEMENTS</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className="p-2 rounded-md bg-[#a984ff23]">
                <div className="">
                    <img src="/cer.jpeg" alt="" />
                </div>
                <div className="flex text-start py-2 items-center gap-2">
                    <img src="/google.png" className='w-[50px]' alt="" />
                    <div className="">
                        <h1 className=''>Foundations of User Experience (UX) Design</h1>
                        <p className='text-sm text-gray-200'>Google</p>
                    </div>
                </div>
            </div>
            <div className="p-2 rounded-md bg-[#a984ff23]">
                <div className="">
                    <img src="/cer.jpeg" alt="" />
                </div>
                <div className="flex text-start py-2 items-center gap-2">
                    <img src="/google.png" className='w-[50px]' alt="" />
                    <div className="">
                        <h1 className=''>Foundations of User Experience (UX) Design</h1>
                        <p className='text-sm text-gray-200'>Google</p>
                    </div>
                </div>
            </div>
            <div className="p-2 rounded-md bg-[#a984ff23]">
                <div className="">
                    <img src="/cer.jpeg" alt="" />
                </div>
                <div className="flex text-start py-2 items-center gap-2">
                    <img src="/google.png" className='w-[50px]' alt="" />
                    <div className="">
                        <h1 className=''>Foundations of User Experience (UX) Design</h1>
                        <p className='text-sm text-gray-200'>Google</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievements