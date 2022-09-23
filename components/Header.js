import Logo from '../images/logo.png'
export default function Header() {
    return (
        <div className="navbar">
            <div className='logo_container'><img src={Logo} /></div>
            <p className='nav_desc'>React Course - Project 3</p>
        </div>
    )
}