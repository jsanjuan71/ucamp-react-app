import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'
import ProductService from '../../services/products.service'
import PageTitle from '../PageTitle/PageTitle'
import Header from '../Header/Header'
import ProductfirebaseService from '../../services/productsFirebase.service'

function Products() {

    const [products, setProducts] = useState( [] )
    
    const navigateTo = useNavigate()
    
    {/*** https://legacy.reactjs.org/docs/hooks-effect.html */}
    useEffect( () => {
        ProductfirebaseService.getAllProducts()
            .then( response => {
                console.log("response firebase", response)
                setProducts( response )
            })
            .catch( error => {
                console.log("error firebase", error)
            })
        /*ProductService.getAllProducts()
            .then( response => {
                setProducts( response.data.result )
            }) */

        return function () {
            console.log("Se invoca cuando el componente se crea y cuando se destruye")
            console.log("Es usada para limpiar estados anteriores o antes de salir del componente, veremos ejemplos practicos despues")
        }
    }, [] )

    const handleClickOnProduct = (id) => {
        navigateTo( "/products/" + id )
    }

    return(
        <>
            <Header />
            <PageTitle title={"Catalogo de productos"} goto={"/"} />
            <Row>
                {products.map( (prod, index) => {
                    return (
                        <Col lg={3} md={4} xs={12} key={index} onClick={() => handleClickOnProduct(prod.id) }>
                            <ProductCard
                                position={index}
                                {...prod}
                            />
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default Products