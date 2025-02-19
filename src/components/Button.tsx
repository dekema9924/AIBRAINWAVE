
interface Props {
    text: string
    styles: string
}

function Button(props: Props) {
  return (
    <>
        <button className={`button_curve  ${props.styles}`}>{props.text}</button>
        
    </>
  )
}

export default Button