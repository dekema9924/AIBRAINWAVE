
import Button from '../Button'
import check_img from '../../assets/check.svg'
import logo from '../../assets/brainwave-symbol.svg'
import figma_logo from '../../assets/collaboration/figma.png'
import ps_logo from '../../assets/collaboration/photoshop.png'
import discord_logo from '../../assets/collaboration/discord.png'
import slack_logo from '../../assets/collaboration/slack.png'
import raindrop_logo from '../../assets/collaboration/raindrop.png'
import protopie_logo from '../../assets/collaboration/protopie.png'
import framer_logo from '../../assets/collaboration/framer.png'
import notion_logo from '../../assets/collaboration/notion.png'
import curve from '../../assets/collaboration/curve-1.svg'
import curve_2 from '../../assets/collaboration/curve-2.svg'
import Service from './Services'

const images = [slack_logo, framer_logo, raindrop_logo, discord_logo, notion_logo, protopie_logo, figma_logo, ps_logo]


function Collaboration() {
  return (
    <>
      <div className=' border-2 border-gray-800'>
        <div className=' overflow-hidden plus_icon relative  absoloute -top-12  flex   flex-col lg:flex-row lg:items-center '>
          <div className='p-8 '> {/*  first div*/}
            <h1 className='lg:text-[4em] text-2xl  text-white w-80 lg:w-96 my-10 '>AI Chat App for seamless collaboration</h1>
            <div className='flex flex-col gap-4'>
              <div>
                <div className='flex gap-6 text-white text-xl'>
                  <img src={check_img} alt="check_img" />
                  <p>Seamless Integration</p>
                </div>
                <p className='w-80 text-purple-200 my-2 opacity-[.7]'>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>
              </div>
              <div className='flex gap-6 my-8 text-white text-xl'>
                <img src={check_img} alt="check_img" />
                <p>Smart Automation</p>
              </div>
              <div className='flex gap-6 text-white  text-xl'>
                <img src={check_img} alt="check_img" />
                <p>Top-notch Security</p>
              </div>
              <div className='border_lineargradient w-34 h-10  border-2 button_curve my-10  '>
                <Button styles=' bg-[rgba(14,12,21)] w-[129px] h-[32px] text-xs ' text='TRY IT NOW' />
              </div>
            </div>
          </div>

          <img className='size-80 hidden lg:block lg:mt-80' src={curve} alt="" />


          {/*  second div eith circle*/}
          <div className='flex flex-col  lg:mt-24'>
            <p className='lg:w-96 p-4 lg:my-4 text-purple-200  opacity-[.7]'>With smart automation and top-notch security, it's the perfect solution for teams looking to work smarte</p>
            <div className="w-[400px] my-10 relative h-[400px] border-2 border-gray-700  m-auto lg:m-0 rounded-full flex items-center justify-center">
              <ul className="absolute inset-0">
                {images.map((collab, index) => {
                  const angle = (360 / images.length) * index; // Evenly distribute images in a circle
                  return (
                    <li
                      key={index}
                      className="absolute left-[185px] top-[180px]"
                      style={{
                        transform: `rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg)`, // Positioning and counter-rotation
                      }}
                    >
                      <div className="border-2 rounded-lg border-gray-700 z-50 bg-black ">
                        <img className="size-9 scale-[.7]" src={collab} alt="logo" />
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="border-2 border-gray-700 w-66 h-66 rounded-full flex items-center justify-center">
                <div className="border_lineargradient w-24 h-24 rounded-full">
                  <div className="bg-[rgba(14,12,21)] w-full h-full rounded-full flex items-center justify-center">
                    <img src={logo} alt="logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className='size-80 hidden lg:block' src={curve_2} alt="curveSVG" />
        </div>
        <Service/>
      </div>
      {/* last div for whole component*/}
    </>
  )
}

export default Collaboration