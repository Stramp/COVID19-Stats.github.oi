import React from 'react';
import { Card, Table } from 'react-bootstrap'



export default (props) => {

    return (
        <Card id="lista" style={{ borderRadius: '0.5rem' }} >
            <Table responsive hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Estado</th>
                        <th>Casos</th>
                        <th>Mortes</th>
                        <th style={{ textAlign: 'end' }}>Atualizado:</th>
                    </tr>
                </thead>
                <tbody>

                    {props.dados.map((item, ind) =>

                        < tr key={ind} >
                            <td>{ind}</td>
                            <td>{item.state}</td>
                            <td>{item.cases}</td>
                            <td>{item.deaths}</td>
                            <td style={{ textAlign: 'end' }}>{props.dataConvert(item.datetime)}</td>
                        </tr >

                    )}

                </tbody>
            </Table>
        </Card >

    )
}