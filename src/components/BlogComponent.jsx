import React from 'react'
import BlogCard from './BlogCard'
import overlayimage from '../assets/images/overlayimage.jpeg'
import blogcard1 from '../assets/images/blogcard-1.png'
import blogcard2 from '../assets/images/blogcard-2.png'
import blogcard3 from '../assets/images/blogcard-3.png'
import blogcard4 from '../assets/images/blogcard-4.png'
const BlogComponent = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-[54px]  ">
                <div className="col-span-7 lg:block hidden">
                    <div className='relative h-full  rounded-[10px] border border-[#0E7175]'>
                        <img src={overlayimage} className='w-full h-full object-cover rounded-[10px]' />
                        <div className='px-[24px] flex flex-col justify-end absolute w-full h-full top-0 left-0 overlayblogsingle pb-[40px]'>
                            <h4 className='text-[#F1F8F9] leading-[30px] text-[20px]'>How does the 3 Line Strike Pattern work?</h4>
                            <p className='leading-[24px] IBMPlexSansRegular pt-[24px] text-[#E2E9E9]'>
                                The 3 Line Strike Pattern works as a bullish reversal signal. It involves three consecutive bearish candles, followed by a strong bullish candle that engulfs the previous ones, indicating a potential trend change.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-span-5">
                    <BlogCard image={blogcard1} />
                </div>
            </div>
            <div className="grid lg:pt-[64px] pt-[15px]  grid-cols-1 lg:grid-cols-12 gap-[15px]">
                <div className="col-span-4">
                    <BlogCard image={blogcard2} />
                </div>
                <div className="col-span-4">
                    <BlogCard image={blogcard3} />
                </div>
                <div className="col-span-4">
                    <BlogCard image={blogcard4} />
                </div>
            </div>
        </>
    )
}

export default BlogComponent
