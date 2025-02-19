
import Button from './Button'
import check from '../assets/check.svg'

interface PricesProps {
    title: string
    style: string
    text: string
    price:string | null
    list_1: string
    list_2: string
    list_3: string
    button: string
    buttonclass: string

}


function Prices(props: PricesProps) {
    return (
        <>
            <div className='border-1 border-gray-700 h-[660px] w-11/12 m-auto rounded-lg p-4'>
                <h1 className={`text-4xl ${props.style}`}>{props.title}</h1>
                <p className='text-gray-400 text-lg w-fit'>{props.text}</p>

                <p className='text-[3em] flex items-center my-4'><span className='font-bold  text-[1.6em]'>{props.price}</span></p>
               <div className={props.buttonclass}>
                    <Button styles={` text-xs cursor-pointer font-bold text-black w-full h-13 uppercase bg-[rgba(14,12,21)]  h-[33px] text-xs text-white `} text={props.button} />
               </div>

                <ul className='mt-10'>
                    <li className='flex items-center gap-4'>
                        <img src={check} alt="" />
                        <p>{props.list_1}</p>
                    </li>
                    <li className='flex items-center gap-4 my-14'>
                        <img src={check} alt="" />
                        <p>{props.list_2}</p>
                    </li>
                    <li className='flex items-center gap-4'>
                        <img src={check} alt="" />
                        <p>{props.list_3}</p>
                    </li>
                </ul>

            </div>
        </>
    )
}

export default Prices