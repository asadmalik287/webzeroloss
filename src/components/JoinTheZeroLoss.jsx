import React from 'react'
import circle1 from '../assets/images/circle1.png'
import invite from '../assets/images/invite.png'
import commision from '../assets/images/commision.png'
import webcurve1 from '../assets/images/webcurve1.png'
import webcurve2 from '../assets/images/webcurve2.png'
import vertical from '../assets/images/vertical.png'
const JoinTheZeroLoss = () => {
    return (
        <>
            <section className='bg-[#ECFBF2] lg:py-[100px] py-[48px]'>
                <div className='max-w-[1376px] mx-auto paddingmax'>
                    <h2 className='text-[#282B2B] text-center IBMPlexSansSemiBold text-[18px] lg:text-[40px]  leading-[28px] mdleading-[48px]'>Join the<span className='text-[#64B337]'> ZEROLOSS </span>Affiliate Program</h2>
                    <p className='max-w-[849.65px] pt-[16px] leading-[24px] mx-auto lg:text-[20px] text-[14px] text-center text-[#282B2B] IBMPlexSansRegular'>
                        To earn high commissions, access marketing tools, and boost your income by promoting top-quality products. It's easy to join, with fast payouts and dedicated support.                    </p>
                    <div className="flex w-full lg:flex-nowrap flex-wrap justify-center	  lg:justify-between  lg:mt-[64px] mt-[16px]  gap-8">
                        <div className="w-full relative  purpleGradient  lg:w-[303px] bg-[#131229] p-[16px] lg:p-[32px] rounded-[24px]">
                            <div className='text-center'>
                                <img src={circle1} className='m-auto' />
                            </div>
                            <h3 className='text-[32px] text-center pt-[24px] text-[#D3DBDB]  IBMPlexSansSemiBold leading-[42px]'> Get Started</h3>
                            <p className='pt-[12px] text-[#FCF4F4] leading-[24px] IBMPlexSansRegular text-center'>
                                Sign up for ZeroLoss.ai and obtain your referral link from the ZeroLoss (bot) dashboard.
                            </p>
                            <div className="webcurve1">
                                <img src={webcurve1} className="" />
                            </div>
                        </div>
                        <div className='text-center lg:hidden sm-show'><img className='mx-auto' src={vertical} /></div>
                        <div className="w-full relative purpleGradient  lg:w-[303px] bg-[#131229] p-[16px] lg:p-[32px] rounded-[24px]">
                            <div className='text-center'>
                                <img src={invite} className='m-auto' />
                            </div>
                            <h3 className='text-[32px] text-center pt-[24px] text-[#D3DBDB]  IBMPlexSansSemiBold leading-[42px]'>Invite</h3>
                            <p className='pt-[12px] text-[#FCF4F4] leading-[24px] IBMPlexSansRegular text-center'>
                                Invite your audience, friends, and family to sign up using your referral link.                            </p>
                            <div className="webcurve1">
                                <img src={webcurve2} className="" />
                            </div>
                        </div>
                        <div className='text-center lg:hidden sm-show'>
                            <img src={vertical} className='m-auto' />
                        </div>
                        <div className="w-full  purpleGradient  lg:w-[303px] bg-[#131229] p-[16px] lg:p-[32px] rounded-[24px]">
                            <div className='text-center'>
                                <img src={commision} className='m-auto' />
                            </div>
                            <h3 className='text-[32px] text-center pt-[24px] text-[#D3DBDB]  IBMPlexSansSemiBold leading-[42px]'>Commission</h3>
                            <p className='pt-[12px] text-[#FCF4F4] leading-[24px] IBMPlexSansRegular text-center'>
                                Earn up to 20% in monthly recurring referral incentives, based on the monthly profit.                             </p>
                        </div>
                    </div>
                    <div className="lg:mt-[64px] mt-[16px] text-center">
                        <button className="bg-[#41D87B] leading-[24px] w-[212px] h-[56px] rounded-[6px]">
                            Join Now
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JoinTheZeroLoss
