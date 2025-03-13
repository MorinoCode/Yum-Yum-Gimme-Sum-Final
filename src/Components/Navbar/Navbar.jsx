import './Navbar.scss'

// variant menuPage om du använder denna komponnet in Menu.jsx
// variant cartPage om du använder denna komponnet in Cart.jsx
// variant statusPage om du använder denna komponnet in status.jsx eller receipt.jsx

const Navbar = ({variant ,children}) => {
  return (
    <nav className={variant}>
        {children}
    </nav>
  )
}

export default Navbar