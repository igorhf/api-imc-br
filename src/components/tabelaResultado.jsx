import React from 'react'
import { Table } from 'react-bootstrap'
import './imc.css'

export default props => {
    return (

        <div>
            {props.imc != "" && props.mensagem != "" ?
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>CLASSIFICAÇÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.imc}</td>
                            <td>{props.mensagem}</td>
                        </tr>
                    </tbody>
                </Table>
                : ""}

        </div>
    )
}