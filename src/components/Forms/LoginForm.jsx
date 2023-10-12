

import React, {useEffect, useState, useContext } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import UsersService from '../../services/users.service'
import { ToastContainer, toast } from 'react-toastify';
import { TokenContext } from '../../providers/TokenContext';

function LoginForm() {

    const styles = {
        padding: '20px',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        width: '480px',
        borderRadius: '3%',
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [aintRobot, setAintRobot] = useState(false)

    const tokenContext = useContext( TokenContext )

    const [searchParams] = useSearchParams()

    const navigate = useNavigate()

    const handleEmailChange = ( {target} ) => {
        setEmail(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setAintRobot(false)

        const data = {
            email,
            password
        }
        
        UsersService.login(data)
            .then(response => {
                console.log("LOGIN done", response.data)
                toast.success("Acceso correcto")
                const token = response.data.result
                //setToken(token)
                tokenContext.setToken(token)
                setTimeout( navigate, 3000, '/home' )

            })
            .catch(err => {
                console.log("LOGIN error", err.response.data.error)
                toast.error(err.response.data.error)
            })
    
    }

    useEffect(() => {  
        if(searchParams.get('email')){
            setEmail(searchParams.get('email'))
        }

        if(tokenContext.token){
            navigate('/home')
        }


    }   , [searchParams, tokenContext])

    return (
        <>
            <ToastContainer theme='colored' />
            <Container className='d-flex'>
                <Row className='mx-auto justify-content-center'>
                    <Col >
                        <Form onSubmit={handleSubmit} style={styles}>
                            <Form.Group>
                                <h1>Inicio de sesión</h1>
                            </Form.Group>
                            <hr />
                            <Form.Group>
                                <FloatingLabel label="Email" className="mb-3">
                                    <Form.Control type="email" placeholder="Email" 
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
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <hr />
                            <Form.Group>
                                <Form.Check type="checkbox" label="No soy un robot" 
                                    value={aintRobot}
                                    onChange={ ({target}) => setAintRobot(target.checked) }
                                />
                            </Form.Group>
                            <hr />
                            <Form.Group>
                                <a href="/register">¿No tienes cuenta? Regístrate</a>
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

export default LoginForm