import {Button, Card} from 'react-bootstrap'


function ProductCard( props ) {

    const bgColor = 'lightgrey';

    const estiloTitulo = {
        backgroundColor: bgColor
    }

    return (
      <Card style={{width: "20%"}}>
        <Card.Img variant='bottom' src={props.imageSrc}></Card.Img>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant='success' >Agregar</Button>
        </Card.Body>
      </Card>
    )
}

export default ProductCard;