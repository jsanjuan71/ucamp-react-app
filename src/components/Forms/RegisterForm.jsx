

import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Container, Form, Button, Row, Col} from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import UsersService from '../../services/users.service'
import { ToastContainer, toast } from 'react-toastify';

function RegisterForm() {

    const styles = {
        padding: '20px',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        width: '480px',
        borderRadius: '3%',
    }

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [aintRobot, setAintRobot] = useState(false)

    const navigate = useNavigate()

    const handleEmailChange = ( {target} ) => {
        setEmail(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            firstname: name,
            lastname,
            age,
            email,
            password
        }
        
        UsersService.signup(data)
            .then(response => {
                console.log("REGISTER done", response.data)
                toast.success("Usuario registrado correctamente")
                setTimeout( navigate, 3000, '/?userEmail='+ email  )
            })
            .catch(err => {
                console.log("REGISTER error", err.response.data.error)
                toast.error(err.response.data.error)
            })
    
    }

    return (
        <>
            <ToastContainer theme='colored' />
            <Container className='d-flex'>
                <Row className='mx-auto align-items-center' >
                    <Col>
                        <Form onSubmit={handleSubmit} style={styles}>
                            <Form.Group>
                                <h1>Registro</h1>
                            </Form.Group>
                            <hr className='text-muted' />
                            <Form.Group>
                                <FloatingLabel label="Nombre" className="mb-3">
                                    <Form.Control type="text" placeholder='Nombre'
                                        value={name}
                                        onChange={ ({target}) => setName(target.value) }
                                        required
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Apellido" className="mb-3">
                                    <Form.Control type="text" placeholder='Apellido'
                                        value={lastname}
                                        onChange={ ({target}) => setLastname(target.value) }
                                        required
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Edad" className="mb-3">
                                    <Form.Control type="number" min={18} max={99} placeholder='Edad'
                                        value={age}
                                        onChange={ ({target}) => setAge(target.value) }
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Email" className="mb-3">
                                    <Form.Control type="Email" placeholder="Email" 
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Contraseña" className="mb-3">
                                    <Form.Control type="password" placeholder="Contraseña" 
                                        value={password}
                                        onChange={ ({target}) => setPassword(target.value) }
                                        required
                                        minLength={6}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <hr />
                            <Form.Group>
                                <Form.Check type="checkbox" label={<span>Acepto los <a href='/termsandconditions'>Términos y condiciones</a></span>} 
                                    value={aintRobot}
                                    onChange={ ({target}) => setAintRobot(target.checked) }
                                />
                            </Form.Group>
                            <hr />
                            <Form.Group>
                                <a href="/"> ¿Ya tienes una cuenta? Inicia sesión </a>
                            </Form.Group>
                            <hr />
                            <Button variant="primary" type="submit" disabled={ aintRobot === false  }> Iniciar sesión </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RegisterForm