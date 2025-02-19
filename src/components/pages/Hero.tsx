import curve from '../../assets/hero/curve.png'
import Button from '../Button'
import robot from '../../assets/hero/robot.jpg'
import herobg from '../../assets/hero/hero-background.jpg'
import squarePlus from '../../assets/plus-square.svg'
import file from '../../assets/file-02.svg'
import home from '../../assets/home-smile.svg'
import search from '../../assets/search-md.svg'
import carimg from '../../assets/notification/image-1.png'
import profile1 from '../../assets/notification/image-2.png'
import profile2 from '../../assets/notification/image-3.png'
import profile3 from '../../assets/notification/image-4.png'
import yourlogo from '../../assets/yourlogo.svg'
import Section from './Section'
import loading from '../../assets/loading.png'
import heroring from '../../assets/hero/hero rings img.png'
import heroicons from '../../assets/hero/hero icons img.png'

function Hero() {
    return (
        <>

            <div className='plus_icon  border-[.1px] border-gray-700 h-fit pb-14'>
                <div className='  -z-1 w-full h-full bg-cover relative' style={{ backgroundImage: `url(${herobg})` }}>
                    <img className='absolute w-full h-full object-cover opacity-40' src={heroring} alt="" />
                    <div className='lg:w-6/9 max-w-[700px]  m-auto flex flex-col justify-center items-center '>
                        <div className='relative flex flex-col justify-center items-center'>
                            <img className=' absolute object-cover w-full h-full scale-155 top-40 hidden md:block ' src={heroicons} alt="" />

                            <h1 className='lg:text-[3em] text-[2.3em] font-bold text-center pt-14  '>
                                Explore the Possibilities of AI Chatting with <span className=' relative'>Brainwave <img className='w-80 absolute left-0' src={curve} alt="curve_img" /></span>
                            </h1>
                            <p className='text-blue-100 opacity-80 md:text-2xl m-auto max-w-[700px] text-center my-10 w-11/12'>Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave, the open AI chat app.</p>
                            <Button styles='bg-white text-black w-42 h-13' text='Get Started' />

                        </div>
                        <div className='border_lineargradient  mt-15  relative rounded-lg '>
                            <div className='  bg-gray-700 '>
                                <div className='h-[1.9rem] '></div>
                            </div>
                            <div className='overflow-hidden relative w-full max-w-[1600px] h-[600px] flex flex-col items-center '>
                                <img className='object-cover rounded-lg scale-140 ' src={robot} alt="robot_img" />
                                <div className='flex gap-4 justify-center items-center absolute top-[500px] max-w-[400px]  z-50 w-11/12 h-14 before:content-[""] before:absolute before:w-full before:h-full before:bg-gray-900 before:-z-1 before:opacity-60 before:rounded-4xl'>
                                    <img className='w-10' src={loading} alt="" />
                                    <p className='text-2xl'>AI is generating</p>
                                </div>
                            </div>
                            <div className='animate_box hidden lg:flex border-2 border-gray-500 w-72 h-24 justify-center rounded-2xl gap-10 absolute top-90 -left-30 bg-gray-900'>
                                <img style={{ width: "24px" }} src={squarePlus} alt="squareSVG" />
                                <img style={{ width: "24px" }} src={file} alt="fileSVG" />
                                <img style={{ width: "24px" }} src={home} alt="homeSVG" />
                                <img style={{ width: "24px" }} src={search} alt="searchSVG" />
                            </div>
                            <div className='hidden animate_box lg:flex border-2 border-gray-500  w-72 h-24 justify-center items-center rounded-2xl gap-4 absolute top-80 -right-30 bg-gray-900'>
                                <img className='h-15 rounded-2xl' src={carimg} alt="carimg" />
                                <div>
                                    <p className='font-semibold'>Code generation</p>
                                    <div className='flex gap-4'>
                                        <div className='flex gap-2'>
                                            <img className='w-7 h-7 rounded-full' src={profile1} alt="profile" />
                                            <img className='w-7 h-7 rounded-full' src={profile2} alt="profileimg" />
                                            <img className='w-7 h-7 rounded-full' src={profile3} alt="profileimg" />
                                        </div>
                                        <p className='text-gray-400'>1m ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-400 my-12 text-sm hidden lg:block'>HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT</p>
                        <div className='justify-between w-full hidden lg:flex'>
                            <img src={yourlogo} alt="yourlogo" />
                            <img src={yourlogo} alt="yourlogo" />
                            <img src={yourlogo} alt="yourlogo" />
                            <img src={yourlogo} alt="yourlogo" />
                            <img src={yourlogo} alt="yourlogo" />
                        </div>
                    </div>
                </div>

            </div>
            <Section />

        </>
    )
}

export default Hero