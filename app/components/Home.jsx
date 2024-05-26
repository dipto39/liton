import React from 'react'

const Home = () => {
  return (
    <div className='relative'>
        
        <h1 className='text-[32px]'>👋 Hi there! I'm Liton Nandi, a passionate UX/UI Designer with over a year of expertise in creating seamless and visually appealing digital experiences.</h1>
        <div className="bg-[#f8f8f838] p-4 rounded-3xl h-[500px] max-w-[800px] mx-auto mt-10 relative">
        <div className="absolute -top-5 -left-32">
            <img src="./left-top.png" alt="" />
        </div>
        <div className="absolute bottom-32 -left-[200px]">
            <img src="./left-bottom.png" alt="" />
        </div>
        <div className="absolute -top-20 -right-40">
            <img src="./figma.png" alt="" />
        </div>
        <div className="absolute bottom-0 -right-40">
            <img src="./right-bottom.png" alt="" />
        </div>
        <iframe className='h-full w-full rounded-3xl' src="https://www.youtube.com/embed/ihPTNp7370s?si=LcLQwLK8cLqOVd06" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

    </div>
  )
}

export default Home