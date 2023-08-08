import {Row, Col} from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'

function Products() {

    const productos = [
        {
            title: "Producto 1",
            desc: "Descripcion del producto 1",
            imgSrc: "https://res.cloudinary.com/sahj/image/upload/v1626912538/samples/ecommerce/leather-bag-gray.jpg"
        },
        {
            title: "Producto 2",
            desc: "Descripcion del producto 2",
            imgSrc: "https://res.cloudinary.com/sahj/image/upload/v1626912536/samples/people/bicycle.jpg"
        },
        {
            title: "Producto 3",
            desc: "Descripcion del producto 3",
            imgSrc: "https://res.cloudinary.com/sahj/image/upload/v1626912532/samples/food/pot-mussels.jpg"
        },
        {
            title: "Producto 4",
            desc: "Descripcion del producto 4",
            imgSrc: "https://res.cloudinary.com/sahj/image/upload/v1626912532/samples/food/pot-mussels.jpg"
        }
    ]

    return(
        <>
            <h1>Productos de UCamp Store</h1>
            <Row>
                {productos.map(prod => {
                    return (
                        <Col lg={3} md={4} xs={12}>
                            <ProductCard 
                                title={prod.title}
                                description={prod.desc}
                                imageSrc={prod.imgSrc}
                            />
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default Products