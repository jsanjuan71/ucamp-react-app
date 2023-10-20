import {useContext, useState} from 'react'
import {Row, Col, ListGroup, Alert} from 'react-bootstrap'
import PageLayout from '../Layouts/PageLayout'
import { useEffect } from 'react'
import { CartContext } from '../../providers/CartContext'
import CartItem from './CartItem'
import CartItemHeader from './CartItemHeader'
import { moneyFormat } from '../../utils/formatters'
import { IVA } from '../../utils/constants/data'
import { PayPalButtons } from '@paypal/react-paypal-js'


function Cart() {
    const { cart } = useContext(CartContext)

    const style = {"layout":"vertical"};

    const [isPaid, setIsPaid] = useState(false)

    const handleCreateOrder = (data, actions) => {
        const order = actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: (cart.amount * (1 + IVA)).toFixed(2),
                        currency_code: "MXN"
                    },
                    description: "Compra de productos en UCamp Store",
                    shipping_preference: "NO_SHIPPING"
                }
            ],
            merchant_name: "UCamp Store"
            
        })

        console.log("order", order)

        return order

    }

    const handleCancelledPayment = (data, actions) => {
        console.log("data", data)
        console.log("actions", actions)

    }

    const handlePaidOrder = (data, actions) => {
        console.log("data", data)
        console.log("actions", actions)
        setIsPaid(true)
    }

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

                        <hr/>
                        
                        <Row>
                            <Col md={4}>
                                {!isPaid ? (
                                    <PayPalButtons
                                        disabled={false}
                                        forceReRender={[style]}
                                        fundingSource={undefined}
                                        createOrder={handleCreateOrder}
                                        onApprove={ handlePaidOrder }
                                        onCancel={ handleCancelledPayment}
                                    />
                                    ): (
                                        <Alert variant='success'>Pago realizado</Alert>
                                    )
                                }
                                
                            </Col>
                        </Row>
                        
                    </>
                    
                ) : (
                    <Alert variant='warning'>No hay productos en el carrito</Alert>
                )
            }
        </PageLayout>
    )
}

export default Cart