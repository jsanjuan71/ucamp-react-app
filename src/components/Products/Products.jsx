import { useState, useEffect } from 'react'

import {Row, Col} from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'
import ProductService from '../../services/products.service'
import PageTitle from '../PageTitle/PageTitle'
import Header from '../Header/Header'

function Products() {

    const [products, setProducts] = useState( [] )
    

    // Component did mount
    useEffect( () => {
        ProductService.getAllProducts()
            .then( response => {
                setProducts( response.data.result )
            })

        //AccountService.getserInfo()
    }, [] )

    return(
        <>
            <Header />
            <PageTitle title={"Catalogo de productos"} goto={"/"} />
            <Row>
                {products.map( (prod, index) => {
                    return (
                        <Col lg={3} md={4} xs={12}>
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