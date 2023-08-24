import { useParams } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import { patients } from '../../utils/constants/data'
import { profilePicture } from '../../utils/constants/media'
import { FaMapPin } from 'react-icons/fa'
import PageTitle from '../PageTitle/PageTitle'

/* Usando el modulo react-router-dom importamos el hook useParams */
/* Importamos la data desde la coleccion de data */
/* Importamos la imagen de perfil desde las constantes */
/* Usando el modulo react-icons podemos usar los iconos de FontAwesome */


function Patient() {
    /** Obtenemos el parametro del url --> /patients/:curp */
    const {curp} = useParams()
    /** Con ese dato lo buscamos de la lista de clientes */
    const data = patients.find(patient => patient.curp === curp)

    return(
        <>
            <PageTitle title={curp.toUpperCase()} goto='/patients' />
            {/* Colocar la tarjeta con la info del paciente */}
            <Row>
                <Col md={3}>
                    <Card style={{width: "100%"}}>
                        <Card.Img variant='bottom' src={ profilePicture }></Card.Img>
                        <Card.Body>
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                            {data.age} años</Card.Text>
                            <p className='d-flex align-items-center'>
                                <FaMapPin />
                                {data.city}
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Patient