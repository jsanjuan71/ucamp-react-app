import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import ProductService from '../../services/products.service';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../PageTitle/PageTitle';

{/** Componente para crear un nuevo producto */}
function ProductCreate() {

    {/** Definimos los state */}
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')

    {/** Iniciamos el hook useNavigate */}
    const navigate = useNavigate()

    {/** Se invoca cuando se da clic en el boton guardar porque es type submit */}
    const handleSubmit = (evt) => {
        {/* esto es para evitar que el Form intente hacer un request a su atributo action
          * el cual no ponemos para poder controlar la llamada al servicio
        */}
        evt.preventDefault()

        {/** Se arma el payload (data a enviar al servicio) */}
        const data = {
            "title": title,
            "description": description ,
            "price": price,
            "stock": stock
        }

        {/** Llamamos al servicio de crear producto y esperramo respuesta */}
        ProductService.createProduct(data)
            .then( response => {
                console.log(response)
                {/** evauamos que sea respuesta positiva */}
                if(response.status == 200) {
                    toast.success("Producto creado correctamente")
                    {/** Despues de 2 segundos redirigimos automaticamente para productos */}
                    setTimeout( navigate , 3000, "/products" )
                    {/** el hook navigate es como dar clic en un enlace pero sin necesidad de que lo haga el usuario */}
                } else {
                    {/** Avisamos el error desde el servicio */}
                    toast.error(response.statusText)
                }
            })
            .catch( error => {
                {/** Avisamos le error interno */}
                console.error(error)
                toast.error(error.message)
            } )
    }

    {/* Cada que un input cambia se invoca a este handler 
    * solo se hace el cambio de state con el set correspondiente
    */}
    const handleChangeInput = (setter, value) => {
        setter(value)
    }
    
   return(
    <div className="App">
        <ToastContainer theme='colored' />
        <PageTitle title={"Crear producto"} goto='/products' />
        {/* El evento onSubmit se da cuando se da clic en un boton Submit dentro de un Form */}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre del producto</Form.Label>
                {/** 
                 * En cada Form.Control se agrego value y onChange
                 * value es solo el state
                 * onChange es el evento cuando cambie el valor del input
                 *  en este evento se invoca a handleChangeInput
                 *  pero no se pone como callback sino que se invoca con 2 valores
                 *      setter -> (funcion set del useState)
                 *      value -> (nuevo valor del state)
                 */}
                <Form.Control type="text" placeholder="Nombre del producto" 
                    value={title} 
                    onChange={ ({target}) => { handleChangeInput(setTitle, target.value) } } 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control as="textarea" rows={3}
                    value={description}
                    onChange={ ({target}) => { handleChangeInput(setDescription, target.value) } }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" rows={3} 
                    value={price}
                    onChange={ ({target}) => { handleChangeInput(setPrice, target.value) } }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Stock</Form.Label>
                <Form.Control type="number" rows={3} 
                    value={stock}
                    onChange={ ({target}) => { handleChangeInput(setStock, target.value) } }
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                {/** importante, type submit para que dispare el evento onSubmit del Form */}
               <Button type='submit'>Guardar</Button>
            </Form.Group>
        </Form>
    </div>
   ) 
}

export default ProductCreate