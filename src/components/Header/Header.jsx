import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"

function Header() {
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header