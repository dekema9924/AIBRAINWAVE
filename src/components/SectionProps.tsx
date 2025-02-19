import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface sectionProps {
    img: string
    title: string
    text: string
}

function SectionProps(props: sectionProps) {
  return (
    <>
        <div className=" w-full h-80 p-6 flex flex-col gap-4 col-span-1 border-2  my-1 border-gray-800 rounded-2xl">
            <h1 className='text-2xl '>{props.title}</h1>
            <p className="text-gray-400 w-11/12">{props.text}</p>
            <div className="flex justify-between">
                <img src={props.img} alt="propsImg" />
                <div className="flex items-center my-16 gap-2 cursor-pointer ">
                     <p className='text-xs font-black'>EXPLORE MORE</p>
                     <ArrowForwardIosIcon/>
                </div>
            </div>
        </div>
    </>
  )
}

export default SectionProps