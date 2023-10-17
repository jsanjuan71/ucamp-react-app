import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import {Button, Card, Badge} from 'react-bootstrap'
import ProductService from '../../services/products.service';
import PageTitle from '../PageTitle/PageTitle';
import { CartContext } from '../../providers/CartContext';



function ProductCard( {isQuickView = true, ...props} ) {

    const {id} = useParams()
    const [product, setProduct] = useState({...props})

    const { addProductToCart } = useContext( CartContext )

    useEffect( () => {
      if(!props.id)  {
        ProductService.getAllProducts()
          .then( response => {
              const prod = response.data.result.filter( prod => prod.id === id )
              console.log("prod", prod[0])
              setProduct(prod[0])
        })
      }
    }, [] )

    return (
      <>
        {/** En caso de no tener id es porque viene desde ruta, 
         * En este caso agregar el encabezado de pagina
         * Es el boton atras con el mensaje detalles del #id
         */}
        {!props.id && (
          <PageTitle title={"Detalles de #"+ product.id} goto='/products' />
        )}
        <Card style={{width: !props.id? "25%" : "100%"  }}>
          <Card.Img variant='bottom' src={product.imageSrc}></Card.Img>
          <Card.Body>
            <Card.Title>
              {product.position} - {product.title}
              {/** Renderizar solo si no estamos en la vista rapida */}
              { !isQuickView && (
                <sub><Badge bg="light" text="muted">Quedan {product.stock}</Badge></sub>
              )}
            </Card.Title>
            <p>
              {/** Renderizar solo si no estamos en la vista rapida */}
              {!isQuickView && product.description}
            </p>
            <p>${product.price?.toFixed(2)} MXN</p>
            <hr />
            <Button variant='success' onClick={ () => addProductToCart(product) } >Agregar</Button>
          </Card.Body>
        </Card>
      </>
    )
}

export default ProductCard;