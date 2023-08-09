import { useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'
import ProductService from '../../services/products.service'

function Products() {

    const [productos, setProductos] = useState([])

    useEffect( () => {
        (async () => {
            const prods = await ProductService.fetchAll()
            if( prods.done ) {
                console.log( "prods", prods.result )
                setProductos( prods.result )
            }
        })()
    }, [] )

    return(
        <>
            <h1>Productos de UCamp Store</h1>
            <Row>
                {productos.map(prod => {
                    return (
                        <Col lg={3} md={4} xs={12}>
                            <ProductCard 
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