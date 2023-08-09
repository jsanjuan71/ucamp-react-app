import {Button, Card, Badge} from 'react-bootstrap'


function ProductCard( props ) {

    const bgColor = 'lightgrey';

    const estiloTitulo = {
        backgroundColor: bgColor
    }

    return (
      <Card style={{width: "100%"}}>
        <Card.Img variant='bottom' src={props.imageSrc}></Card.Img>
        <Card.Body>
          <Card.Title>
            {props.title}
            <sub><Badge bg="light" text="muted">Quedan {props.stock}</Badge></sub>
          </Card.Title>
          <p>
            {props.description}
          </p>
          <p>${props.price.toFixed(2)} MXN</p>
          <hr />
          <Button variant='success' >Agregar</Button>
        </Card.Body>
      </Card>
    )
}

export default ProductCard;