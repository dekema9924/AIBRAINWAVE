import discord from '../assets/socials/discord.svg'
import twitter from '../assets/socials/twitter.svg'
import telegram from '../assets/socials/telegram.svg'
import facebook from '../assets/socials/facebook.svg'
import instagram from'../assets/socials/instagram.svg'

function Footer() {
    const socials = [discord, twitter, telegram, facebook, instagram]
  return (
    <>
        <div className="plus_icon relative m-auto"></div>

        <div className='flex flex-col justify-center items-center pt-14 gap-4 border-[1px] border-gray-700'>

            <p className='text-gray-400'>© 2025 All rights reserved</p>
            <p  className='text-gray-400'>Design by <a className='underline text-sm' href="https://featureui99.gumroad.com/">FEATURE UI</a> </p>
            <div className='flex gap-4 m-auto items-center justify-center pb-4 '>
                {
                    socials.map((img, index)=>{
                        return(
                            <img className='size-14  border-gray-700 rounded-full p-2' key={index} src={img} alt="social_icon" />
                        )
                    })
                }

            </div>
        </div>
    </>
  )
}

export default Footer