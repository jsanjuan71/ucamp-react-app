import {useContext} from 'react'
import {Row, Col, ListGroup, Badge} from 'react-bootstrap'
import PageLayout from '../Layouts/PageLayout'
import { useEffect } from 'react'
import { CartContext } from '../../providers/CartContext'
import CartItem from './CartItem'
import CartItemHeader from './CartItemHeader'
import { moneyFormat } from '../../utils/formatters'
import { IVA } from '../../utils/constants/data'


function Cart() {
    const { cart } = useContext(CartContext)

    return(
        <PageLayout pageTitle={"Lista de compras"} backPage='/products'  >
            {cart.items && cart.items.length > 0 ? 
                (
                    <>
                        <Row>
                            <Col>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <CartItemHeader />
                                    </ListGroup.Item>
                                    {cart.items.map(item => {
                                        return (
                                        <ListGroup.Item>
                                            <CartItem item={item} />
                                        </ListGroup.Item>
                                        )
                                    })}
                                </ListGroup>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                Productos: {cart.total}
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Subtotal: { moneyFormat(cart.amount) }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <span className='text-bold'>A pagar <sub>(Subtotal + IVA)</sub></span>: { moneyFormat(cart.amount * (1 + IVA) ) }
                            </Col>
                        </Row>
                    </>
                    
                ) : (
                    <h1>No hay productos en el carrito</h1>
                )
            }
        </PageLayout>
    )
}

export default Cart