import React from 'react'
import { Form, Row, Col, Button, Container, Alert } from 'react-bootstrap'
import './imc.css'

export default class Imc extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            altura: 0,
            peso: 0,
            mensagem: ""
        }

        this.altura = this.altura.bind(this)
        this.peso = this.peso.bind(this)
        this.calculaImc = this.calculaImc.bind(this)


    }

    altura(event) {
        this.setState({
            altura: event.target.value
        })
    }

    peso(event) {
        this.setState({
            peso: event.target.value
        })
    }

    calculaImc() {
        const { altura, peso } = this.state
        if (altura != 0 && peso != 0) {

        } else {
            this.setState({
                mensagem: (
                    <Alert variant="light">
                        É preciso informar os valores dois campos
                    </Alert>
                )
            })
        }


    }

    render() {
        const { altura, peso, mensagem } = this.state
        return (
            <div>
                <h1>Calculadora de IMC</h1>
                <div className="">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Form>
                                <Col xs={12} md={12}>
                                    <Form.Group>
                                        <Form.Label>Altura</Form.Label>
                                        <Form.Control onChange={this.altura} value={altura} type="number" />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Form.Group>
                                        <Form.Label>Peso</Form.Label>
                                        <Form.Control onChange={this.peso} value={peso} type="number" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label></Form.Label>
                                        <Button onClick={this.calculaImc} variant="warning">Calcular</Button>{''}
                                    </Form.Group>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                    <h1>{mensagem}</h1>
                </div>
            </div>

        )
    }
}