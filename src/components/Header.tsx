import { useState } from 'react'
import logo from '../assets/brainwave-symbol.svg'
import Button from './Button'
import heroring from '../assets/hero/hero rings img.png'
import heroicons from '../assets/hero/hero icons img.png'




function Header() {
  const [isClicked, setIsClicked] = useState(false)

  isClicked ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

  return (
    <>
      <header className='border-b-[1px] border-gray-800 h-24 flex items-center justify-between fixed w-full z-50 before:content-[""] before:absolute before:w-full before:h-full  before:bg-black before:opacity-[.8] before:-z-1 before:backdrop-blur-lg  '>
      <div className=''>
        <ul style={{height: isClicked ? "100vh" : "0", padding: isClicked ? "40px" : "0px" }} className={`transition-all z-40 duration-700 overflow-hidden gap-5 text-[2em] text-gray-400 font-semibold list-none flex flex-col items-center  lg:hidden  absolute right-0 top-24 w-full h-[100vh] bg-black after:content-[""]  `}>
          <img className='absolute scale-[1.7] -z-1 opacity-[.5]' src={heroring} alt="" />
          <img className='absolute scale-[1.2] -z-1  bottom-80' src={heroicons} alt="" />

          <li  className='hover:text-purple-600'>FEATURES</li>
          <li className='hover:text-purple-600'>PRICING</li>
          <li className='hover:text-purple-600'>HOW TO USE</li>
          <li className='hover:text-purple-600'>ROADMAP</li>
          <li className='hover:text-purple-600'>NEW ACCOUNT</li>
          <li className='hover:text-purple-600'>SIGN IN</li>
        </ul>
        </div>
        <div className='flex items-center gap-3 absolute ml-5 '>
          <img className='' src={logo} alt="logo" />
          <h1 className='text-4xl font-bold'>Brainwave</h1>
        </div>
        
        <ul className=' hidden gap-5 text-xs text-gray-400 font-semibold list-none lg:flex '>
          <li className='--font-code'>FEATURES</li>
          <li>PRICING</li>
          <li>HOW TO USE</li>
          <li>ROADMAP</li>
        </ul>
       
    
        <div className='mr-5 items-center gap-4 hidden lg:flex '>
          <li className='text-xs font-semibold text-gray-400 hover:text-white'>NEW ACCOUNT</li>
          <div className='border_lineargradient w-34 h-10  border-2 button_curve '>
            <Button styles=' bg-[rgba(14,12,21)] w-[129px] h-[32px] text-xs ' text='SIGN IN'/>
          </div>
        </div>
        <div className='border-2 w-14 h-13 rounded-md rounded-tr-[24px] cursor-pointer mr-4 flex lg:hidden flex-col items-center justify-center'>
            <div  onClick={()=>setIsClicked(!isClicked)} className='bg-[rgba(14,12,21)] w-12 h-11/12 flex flex-col items-center justify-center'>
              <span className={isClicked ? "w-7 h-2 border-t-2 block rotate-40 translate-[5px] translate-x-[-1px] transition-all duration-700" : 'w-7 h-2 border-t-2 block transition-all duration-700'}></span>
              <span className={isClicked ? "w-7 h-2 border-t-2 block -rotate-40 translate-[-2px] translate-x-[3px] transition-all duration-700" : 'w-7 h-2 border-t-2 block transition-all duration-700'}></span>
            </div>
        </div>

      </header>

   
    </>
    
  )
}

export default Header