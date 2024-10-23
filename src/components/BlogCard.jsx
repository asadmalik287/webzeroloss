
import React from 'react'

const BlogCard = ({image}) => {
    return (
        <>
            <div className='rounded-[10px] shadow-[0px_3px_2px_0px_rgba(25,33,61,0.1)] border border-[#DCE0DD] '>
                <img src={image} className='w-full rounded-t-[10px]' />
                <div className='p-[32px]  bg-[#fff]'>
                    <h3 className='text-[#032123] leading-[30px] IBMPlexSansSemiBold text-[20px]'>
                        Boost Results Using Effective Triggers
                    </h3>
                    <p className='leading-[24px] text-[#282B2B] pt-[24px] IBMPlexSansRegular'>
                        Exploring blockchain and cryptocurrency vulnerabilities that threaten overall blockchain security....
                    </p>
                    <div className='flex items-center justify-between pt-[32px]'>
                        <span className='leading-[24px] IBMPlexSansRegular text-[#282B2B]'>08-19-2024</span>
                        <button className='w-[40px] bg-[#DFFDEE] flex items-center justify-center h-[40px] rounded-[8px] border border-[#DFFDEE]'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={15}
                                height={15}
                                viewBox="0 0 15 15"
                                fill="none"
                            >
                                <path
                                    d="M7.32678 1.54724L13.7998 7.72605L7.32678 13.9049"
                                    stroke="#083A3C"
                                    strokeWidth="1.3125"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M13.7999 7.72607L1.19995 7.72607Z" fill="#083A3C" />
                                <path
                                    d="M13.7999 7.72607L1.19995 7.72607"
                                    stroke="#083A3C"
                                    strokeWidth="1.3125"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard
