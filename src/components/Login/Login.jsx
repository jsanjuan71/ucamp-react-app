import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../PageTitle/PageTitle';
import UsersService from '../../services/users.service';
import { UserContext } from '../../context/user.context';


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pageTitle, setPageTitle] = useState('Iniciar sesión')
    const [termsChecked, setTermsChecked] = useState(false)

    const { user, login } = useContext(UserContext)

    const navigate = useNavigate()

    const handleSubmit = (evt) => {
        evt.preventDefault()

        setTermsChecked(false)

        const data = {
            "email": email,
            "password": password
        }

        UsersService.login(data)
            .then( ({data}) => {
                console.log(data.result)
                if(data.result ){
                    login(email, data.result)
                    toast.success("Success login")
                    setTimeout(navigate, 3000, "/home")
                }
            })
            .catch(error => {
                console.error(error)
            })

    }

    /* Cada que un input cambia se invoca a este handler 
    * solo se hace el cambio de state con el set correspondiente
    */
    const handleChangeInput = (setter, value) => {
        console.log("value", value)
        setter(value)
    }

    useEffect(() => {
        console.log("useEffect", user)
        if(user.token){
            navigate('/home')
        }
        return () => {
            console.log("useEffect cleanup")
        }
    }, [user])
    
   return(
    <div className="App">
        <ToastContainer theme='colored' />
        <PageTitle title={pageTitle} goto='/' />
        {/* El evento onSubmit se da cuando se da clic en un boton Submit dentro de un Form */}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Escriba su email" 
                    value={email} 
                    onChange={ ({target}) => { handleChangeInput(setEmail, target.value) } } 
                />
                <Form.Text className="text-muted">
                Nunca compartiremos su correo con nadie.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Escriba su contraseña" 
                    value={password}
                    onChange={ ({target}) => { handleChangeInput(setPassword, target.value) } } 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Acepto los términos y condiciones" 
                    value={termsChecked}
                    onChange={ ({target}) => { handleChangeInput(setTermsChecked, target.checked) } }
                />
            </Form.Group>
        
            <Button disabled={termsChecked != true} variant="primary" type="submit">
                Submit
            </Button>
            </Form>
    </div>
   ) 
}

export default Login