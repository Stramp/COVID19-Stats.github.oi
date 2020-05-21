/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Card } from 'react-bootstrap'
import './c-body-style.css'

//const NavBar = new (RB.Navbar);
export default ({ dados }) => {

    return (
        <Card className="caixa">
            <h4>teste</h4>
            <Card.Body className="corpo-card p-0">
                <div className="box-card">
                    <Card.Title className="m-0 p-0">
                        {dados[0]}
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum
                    </Card.Text>
                </div>
                <div className="box-card">
                    <Card.Title className="m-0 p-0">
                        {dados[0]}
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum
                    </Card.Text>
                </div>
                <div className="box-card">
                    <Card.Title className="m-0 p-0">
                        {dados[0]}
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum
                    </Card.Text>
                </div>

                <div className="box-card">
                    <Card.Title className="m-0 p-0">
                        {dados[0]}
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum
                    </Card.Text>
                </div>
                <div className="box-card">
                    <Card.Title className="m-0 p-0">
                        {dados[0]}
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum
                    </Card.Text>
                </div>
                <div className="box-card">
                    <Card.Title className="m-0 p-0">
                        {dados[0]}
                    </Card.Title>
                    <Card.Text>
                        Lorem ipsum
                    </Card.Text>
                </div>
            </Card.Body>

        </Card>


    )
}