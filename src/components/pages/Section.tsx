import SectionProps from '../SectionProps'
import plug1 from '../../assets/benefits/icon-1.svg'
import plug2 from '../../assets/benefits/icon-2.svg'
import plug3 from '../../assets/benefits/icon-3.svg'
import plug4 from '../../assets/benefits/icon-4.svg'
import Collaboration from './Collaboration'


function Section() {
    return (
        <>
            <div className="plus_icon relative m-auto hidden lg:block"></div>

            <div className="relative m-auto mt-10 border-[.1px] border-gray-800 top-[-38px]">
                <div >
                    <h1 className='lg:text-[4em]  text-[2em]  max-w-[800px] m-auto  lg:text-center my-7'>Chat Smarter, Not Harder with Brainwave</h1>
                    <div className='glow grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:w-full gap-4'>
                        <div className='ease_animation glow_bg md:col-span-3 md:w-full lg:w-fit lg:col-span-1  overflow-hidden hover:after:opacity-55 relative after:content-[""] after:top-0  after:h-full after:bg-center after:w-80  after:absolute'>
                            <SectionProps
                                img={plug1}
                                title='Ask anything'
                                text="Let's users quickly find answers to their questions without having to search through multiple sources"
                            />
                        </div>
                        <div className='ease_animation glow_bg md:col-span-3 md:w-full lg:w-fit lg:col-span-1  overflow-hidden hover:after:opacity-55 relative after:content-[""] after:top-0  after:h-full after:bg-center after:w-80  after:absolute'>
                            <SectionProps
                                img={plug2}
                                title='Ask anything'
                                text="Let's users quickly find answers to their questions without having to search through multiple sources"
                            />
                        </div>
                        <div className='ease_animation glow_bg md:col-span-3 md:w-full lg:w-fit lg:col-span-1  overflow-hidden hover:after:opacity-55 relative after:content-[""] after:top-0  after:h-full after:bg-center after:w-80  after:absolute'>

                            <SectionProps
                                img={plug3}
                                title='Ask anything'
                                text="Let's users quickly find answers to their questions without having to search through multiple sources"
                            />
                        </div>
                        <div className='ease_animation glow_bg md:col-span-3 md:w-full lg:w-fit lg:col-span-1  overflow-hidden hover:after:opacity-55 relative after:content-[""] after:top-0  after:h-full after:bg-center after:w-80  after:absolute'>

                            <SectionProps
                                img={plug4}
                                title='Ask anything'
                                text="Let's users quickly find answers to their questions without having to search through multiple sources"
                            />
                        </div>
                        <div className='ease_animation glow_bg md:col-span-3 md:w-full lg:w-fit lg:col-span-1  overflow-hidden hover:after:opacity-55 relative after:content-[""] after:top-0  after:h-full after:bg-center after:w-80  after:absolute'>

                            <SectionProps
                                img={plug1}
                                title='Ask anything'
                                text="Let's users quickly find answers to their questions without having to search through multiple sources"
                            />
                        </div>
                        <div className='ease_animation glow_bg md:col-span-3 md:w-full lg:w-fit lg:col-span-1  overflow-hidden hover:after:opacity-55 relative after:content-[""] after:top-0  after:h-full after:bg-center after:w-80  after:absolute'>

                            <SectionProps
                                img={plug2}
                                title='Ask anything'
                                text="Let's users quickly find answers to their questions without having to search through multiple sources"
                            />
                        </div>
                    </div>
                </div>

            </div>
            <Collaboration/>
        </>
    )
}

export default Section