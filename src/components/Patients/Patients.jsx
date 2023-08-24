import {Row, Col, ListGroup, Badge} from 'react-bootstrap'
import { patients } from '../../utils/constants/data'
import PageTitle from '../PageTitle/PageTitle'
import Header from '../Header/Header'


function Patients() {
    return(
        <>
            <Header />
            <PageTitle title={"Pacientes de UCamp"} goto='/' />
            
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