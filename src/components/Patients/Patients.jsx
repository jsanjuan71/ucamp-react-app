import {Row, Col, ListGroup, Badge} from 'react-bootstrap'
import { patients } from '../../utils/constants/data'
import { FaArrowCircleLeft } from 'react-icons/fa'


function Patients() {
    return(
        <>
             {/* Colocar el boton atras */}
             <Row>
                <Col className='d-flex align-items-center'>
                    <a href='/'>
                        <FaArrowCircleLeft size={32} />
                    </a>
                    {" "}
                    <h1>Productos de UCamp Store</h1>
                </Col>
            </Row>
            
            <Row>
                <Col md={6}>
                    <ListGroup>
                        {patients.map(patient => {
                            return (
                            <ListGroup.Item>
                                <Badge bg="success">
                                    <a className='text-white' href={'/patients/'+ patient.curp}>Ver</a>
                                </Badge>

                                {" " + patient.name}

                            </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default Patients