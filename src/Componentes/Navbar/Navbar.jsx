import react from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (

        <nav className="header">
            <div>
                <h1> <Link className="logo" to="/">Site</Link></h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>

                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/signup">signup</Link>

                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="cart">Cart</Link>

                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar