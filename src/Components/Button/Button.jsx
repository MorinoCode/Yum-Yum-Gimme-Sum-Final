import './Button.scss'

//variant darkBtn or lightBtn
const Button = ({variant , children, onClick}) => {
  return (
    <button onClick={onClick} className={variant}>
        {children}
    </button>
  )
}

export default Button