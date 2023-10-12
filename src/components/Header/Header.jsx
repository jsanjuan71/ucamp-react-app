
import { useContext } from "react"
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"
import { TokenContext } from "../../providers/TokenContext"


function Header() {

    const { logout } = useContext( TokenContext )

    // Este seria el handler pero no vale la pena usarlo, porque directo se invoca a logout en el onClick
    const handleClickLogout = () => {
        logout()
    }

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">UCamp Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/patients">Pacientes</Nav.Link>
                        <NavDropdown title="Productos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/products">Catalogo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/products/customize">Crear</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link onClick={logout} >Salir</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header