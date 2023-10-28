
import { useContext, useEffect, useState } from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { TokenContext } from "../../providers/TokenContext"
import { FaShoppingCart } from 'react-icons/fa'
import { Badge } from 'react-bootstrap'
import { CartContext } from "../../providers/CartContext"
import UsersService from "../../services/users.service"

function Header({isDarkMode = false}) {

    const { logout } = useContext( TokenContext )

    const { cart } = useContext( CartContext )

    const [user, setUser] = useState({ firstname: 'Usuario' })

    // Este seria el handler pero no vale la pena usarlo, porque directo se invoca a logout en el onClick
    const handleClickLogout = () => {
        logout()
    }
    
    useEffect(() => {
        UsersService.getAccountInfo()
            .then( ({data}) => {
                setUser(data.result)
            })
    }, [])

    return(
        <Navbar expand="lg" className="bg-body-tertiary bg ">
            <Container>
                <Navbar.Brand href="/">UCamp Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/patients">Pacientes</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products">Catalogo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item title="Ver carrito" href="/products/customize">Crear</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/cart/list"><Badge><FaShoppingCart /> {cart.total}</Badge></Nav.Link>
                        <NavDropdown title="Blog" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/blog">Generales</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item title="Ver carrito" href="/blog/me">Mías</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={user.firstname} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/account">Información</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout} title="Ver carrito" href="/products/customize">Salir</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header