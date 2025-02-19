import check_img from '../../assets/check.svg'
import loading from '../../assets/loading.png'
import service_1 from '../../assets/services/service-1.png'
import service_2 from '../../assets/services/service-2.png'
import service_3 from '../../assets/services/service-3.png'
import recording_1 from '../../assets/recording-01.svg'
import recording_3 from '../../assets/recording-03.svg'
import chrome_cast from '../../assets/chrome-cast.svg'
import disk from '../../assets/disc-02.svg'
import slider from '../../assets/sliders-04.svg'
import play from '../../assets/play.svg'
import Pricing from './Pricing'

function Service() {

    return (
        <>
            <div>
                <h1 className='text-4xl text-white w-full text-center '>Generative AI made for creators.</h1>
                <p className='text-purple-400 my-2 text-center  opacity-[.8]'>Brainwave unlocks the potential of AI-powered applications</p>

                <div>
                    <div className='overflow-hidden border-[1px] bg-gradient-to-r from-[#06021a] from-5% via-[#1f0532] via-[percentage:20%_70%] to-[#10021a] to-100% relative border-gray-700 my-10 rounded-2xl flex items-center justify-center lg:justify-normal w-11/12 m-auto h-[700px] lg:h-fit'>
                        <div className='relative'>
                            <img className='w-full relative z-1 h-[100vh] object-cover ' src={service_1} alt="" />

                        </div>
                        <div className='absolute md:static z-20'>
                            <h1 className='text-4xl text-white'>Smartest AI</h1>
                            <p className='w-66'>Brainwave unlocks the potential of AI-powered applications</p>
                            <div className='my-14 flex flex-col gap-6'>
                                <div className='flex gap-6 text-white  text-xl'>
                                    <img src={check_img} alt="check_img" />
                                    <p>Photo generating </p>
                                </div> <div className='flex gap-6 text-white  text-xl'>
                                    <img src={check_img} alt="check_img" />
                                    <p>Photo enhancey</p>
                                </div>
                                <div className='flex gap-6 text-white  text-xl'>
                                    <img src={check_img} alt="check_img" />
                                    <p>Seamless Integration</p>
                                </div>
                            </div>

                        </div>
                        <div className=' border-2 border-gray-600  h-14 absolute lg:bottom-10 bottom-4 lg:left-40 lg:w-8/12 w-11/12 flex rounded-2xl items-center gap-5 before:content-[""] before:absolute before:w-full before:h-full z-20 before:bg-[#452c63] before:-z-1 before:opacity-[.4] '>
                            <img className='size-10 ml-4' src={loading} alt="loaderSVG" />
                            <p className='text-white font-bold text-xl'>AI is generating</p>
                        </div>

                    </div>

                    <div className='w-full lg:p-10 pt-0 flex flex-col lg:flex-row lg:gap-10 justify-evenly'>
                        <div className='overflow-hidden p-4 flex-col border-[1px] relative border-gray-700 my-10 rounded-2xl flex justify-end lg:justify-normal w-11/12  m-auto h-[600px] '>
                            <img className='w-full absolute z-1 h-[100vh] object-cover' src={service_2} alt="" />
                            <h1 className='text-4xl text-white z-40'>Photo editing</h1>
                            <p className='text-purple-100 my-2 z-40  opacity-[.7]'>Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
                        </div>
                        <div className='overflow-hidden p-4 flex-col gap-7 border-[1px] relative border-gray-700 my-10 rounded-2xl flex justify-end lg:justify-normal w-11/12  m-auto h-[600px] '>
                            <h1 className='text-4xl text-white z-40'>Video generation</h1>
                            <p className='text-purple-100 my-2 z-40  opacity-[.7]'>The world’s most powerful AI photo and video art generation engine. What will you create?</p>
                            <div className='flex items-center justify-around '>
                                <img className='size-14 border-2 rounded-full border-gray-700 p-2' src={recording_1} alt="" />
                                <img className='size-14 border-2 rounded-full border-gray-700 p-2'  src={recording_3} alt="" />
                                <img className='size-14 border-2 rounded-full border-gray-700 p-2'  src={disk} alt="" />
                                <img className='size-14 border-2 rounded-full border-gray-700 p-2'  src={chrome_cast} alt="" />
                                <img className='size-14 border-2 rounded-full border-gray-700 p-2'  src={slider} alt="" />
                            </div>
                            <div className=' bg-black m-auto overflow-hidden'>
                                <img className='scale-[1.2]' src={service_3} alt="machineimg" />
                            </div>
                            <div className='absolute bottom-2 flex items-center gap-1'>
                                <img src={play} alt="" />
                                <span className='w-[300px] rounded-md relative border-[1px] block before:content-[""] before:absolute  before:h-1 before:w-56  before:bg-purple-500 before:-bottom-[1px]'> </span>
                            </div>
                        </div>
                    </div>

                </div>

                <Pricing/>

            </div>

        </>
    )
}

export default Service