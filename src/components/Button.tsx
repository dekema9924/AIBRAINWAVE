
interface Props {
    text: string
    styles: string
}

function Button(props: Props) {
  return (
    <>
        <button className=' bg-white text-black w-full h-13'>{props.text}</button>
    </>
  )
}

export default Button