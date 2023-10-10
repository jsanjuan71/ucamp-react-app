

import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import UsersService from '../../services/users.service'
import { ToastContainer, toast } from 'react-toastify';

function LoginForm() {

    const styles = {
        padding: '20px',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        width: '480px',
        borderRadius: '5px',
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [aintRobot, setAintRobot] = useState(false)

    const handleEmailChange = ( {target} ) => {
        setEmail(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            email,
            password
        }
        
        UsersService.login(data)
            .then(response => {
                console.log("LOGIN done", response.data)
                toast.success("Acceso correcto")
            })
            .catch(err => {
                console.log("LOGIN error", err.response.data.error)
                toast.error(err.response.data.error)
            })
    
    }

    return (
        <>
            <ToastContainer theme='colored' />
            <div style={styles}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <label>Email</label>
                        <Form.Control type="email" placeholder="Escriba su correo electrónico" 
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Form.Group>
                    <hr />
                    <Form.Group>
                        <label>Contraseña</label>
                        <Form.Control type="password" placeholder="Escriba su contraseña" 
                            value={password}
                            onChange={ ({target}) => setPassword(target.value) }
                        />
                    </Form.Group>
                    <hr />
                    <Form.Group>
                        <Form.Check type="checkbox" label="No soy robot" 
                            value={aintRobot}
                            onChange={ ({target}) => setAintRobot(target.checked) }
                        />
                    </Form.Group>
                    <hr />
                    <Button variant="primary" type="submit" disabled={ aintRobot === false  }> Iniciar sesión </Button>

                </Form>
            </div>
        </>
    )
}

export default LoginForm