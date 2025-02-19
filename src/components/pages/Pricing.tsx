import heroicons from '../../assets/hero/hero icons img.png'
import sphere from '../../assets/4-small.png'
import Prices from '../Prices'


function Pricing() {
    return (
        <>
            <div className='mt-24'>
                <div className='relative  hidden lg:block'>
                    <img className=' absolute object-cover w-full scale-100 ' src={heroicons} alt="" />
                    <img className='size-80 m-auto' src={sphere} alt="" />
                </div>
                <div className='flex flex-col lg:my-14 items-center '>
                    <div className='flex gap-4 h-10  items-center'>
                        <span className='border-2 border-r-0 h-full p-2 rounded-md'></span>
                        <p className='text-xs text-purple-100 opacity-55'>GET STARTED WITH BRAINWAVE</p>
                        <span className='.button_curve border-2 border-r-0 h-full p-2 rounded-md rotate-180'></span>
                    </div>
                    <h1 className='my-10 lg:text-[3em] text-4xl pl-4 lg:pl-0 '>Pay once, use forever </h1>
                </div>
            </div>
            <div className='flex flex-col gap-4 lg:flex-row w-11/12 m-auto'>
                <Prices
                    title='Basic'
                    style='text-yellow-600'
                    text='AI chatbot, personalized recommendations'
                    price={"$0"}
                    button='get started'
                    list_1='AI chatbot, personalized recommendations'
                    list_2='Personalized recommendations based on your preferences'
                    list_3='Ability to explore the app and its features without any cost'
                    buttonclass='border-2'
                />
                <Prices
                    title='Premium'
                    style='text-purple-600'
                    text='Advanced AI chatbot, priority support, analytics dashboard'
                    price={"$9.99"}
                    button='get started'
                    list_1='An advanced AI chatbot that can understand complex queries'
                    list_2='An analytics dashboard to track your conversations'
                    list_3='Priority support to solve issues quickly'
                    buttonclass='border-2'
                />
                <Prices
                    title='Enterprise'
                    style='text-orange-600'
                    text='Custom AI chatbot, advanced analytics, dedicated account'
                    price={'$19.99'}
                    button='contact us'
                    list_1='An advanced AI chatbot that can understand complex queries'
                    list_2='Personalized recommendations based on your preferences'
                    list_3='Ability to explore the app and its features without any cost'
                    buttonclass='border_lineargradient w-11/12 h-10  border-2 button_curve   '
                />
            </div>
            <p className='text-xs underline font-bold my-14 text-center cursor-pointer'>SEE THE FULL DETAILS</p>


        </>
    )
}

export default Pricing