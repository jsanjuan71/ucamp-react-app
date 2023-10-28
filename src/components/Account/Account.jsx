import { useState, useEffect } from "react";
import PageLayout from "../Layouts/PageLayout";
import UsersService from "../../services/users.service";
import { Button, Col, Row } from "react-bootstrap";


function Account () {

    const [account, setAccount] = useState({})

    useEffect(() => {
       UsersService.getAccountInfo()
        .then( ({error, data}) => {
            console.log("error", error)
            console.log("data", data)
            if(error) {
                console.error(error)
            } else {
                setAccount(data.result)
            }
        
        })
    }, [])


    return (
        <PageLayout pageTitle={"Account info"} backPage="/"  >
            <Row className="w-50 border p-2">
                <Col md="4" className="border">
                    <img src={"/logo192.png"} alt="avatar" className="img-fluid" />

                </Col>
                <Col className="align-items-center">
                    <h2>
                        {account.role === 'admin'? (
                            <span className="text-secondary">Administrador: </span>
                        ): (
                            <span className="text-secondary">Usuario: </span>
                        )} 
                        {" "} {account.firstname} {account.lastname}
                    </h2>
                    <br />
                    <strong>{account.email}</strong>
                    <br />
                    <Button variant="primary" className="mt-2">Editar</Button>
                </Col>
            </Row>
        </PageLayout>
    )
    
}

export default Account;