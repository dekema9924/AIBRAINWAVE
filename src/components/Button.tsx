
interface Props {
    text: string
}

function Button(props: Props) {
  return (
    <>
        <button className=' bg-white text-sm font-bold capitalize text-black w-full h-10 rounded-md '>{props.text}</button>
    </>
  )
}

export default Button