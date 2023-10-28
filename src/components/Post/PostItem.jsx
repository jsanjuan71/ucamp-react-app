import {Row, Col, Card} from 'react-bootstrap'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import moment from 'moment'


function PostItem({post}) {

    return(
        <Row>
            <Col md="6">
                <Card className="mb-3">
                    <Card.Body>
                        <div className=''>
                            <h2>{post.header}</h2>
                            <sup>{ moment(post.createdAt).calendar() }</sup>
                        </div>
                        
                        <p>{post.content}</p>
                        <hr />

                        {post.isUseful === true ? (<FaThumbsUp />) : (<FaThumbsDown /> ) }

                    </Card.Body>
                </Card>
            </Col>
        </Row>
        
    )
}

export default PostItem