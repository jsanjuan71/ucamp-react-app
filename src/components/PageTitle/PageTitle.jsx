import { Row, Col } from "react-bootstrap"
import { FaArrowCircleLeft } from 'react-icons/fa'

function PageTitle({
    title,
    goto="/"
}) {
    return(
        <Row>
            <Col className='d-flex align-items-center'>
                <a href={goto}>
                    <FaArrowCircleLeft size={32} />
                </a>
                {" "}
                <h1>{title}</h1>
            </Col>
        </Row>
    )
}

export default PageTitle