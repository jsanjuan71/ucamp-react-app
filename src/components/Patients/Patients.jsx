import {Row, Col, ListGroup, Badge} from 'react-bootstrap'
import { patients } from '../../utils/constants/data'
import PageTitle from '../PageTitle/PageTitle'
import Header from '../Header/Header'
import PageLayout from '../Layouts/PageLayout'


function Patients() {
    return(
        <>
            <PageLayout pageTitle={"Pacientes de UCamp"} backPage='/'  >
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
            </PageLayout>
            
            
        </>
    )
}

export default Patients