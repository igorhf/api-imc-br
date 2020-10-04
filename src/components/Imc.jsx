import React from 'react'
import { Form, Row, Col, Button, Alert } from 'react-bootstrap'
import InputMask from 'react-input-mask';

import './imc.css'

import TabelaResultado from './tabelaResultado'

export default class Imc extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            altura: "",
            peso: "",
            mensagem: "",
            imc: 0,
            radio1: false,
            radio2: false
        }

        this.altura = this.altura.bind(this)
        this.peso = this.peso.bind(this)
        this.calculaImc = this.calculaImc.bind(this)
        this.imcAdulto = this.imcAdulto.bind(this)
        this.imcIdoso = this.imcIdoso.bind(this)
        this.radio1 = this.radio1.bind(this)
        this.radio2 = this.radio2.bind(this)





    }

    altura(event) {
        console.log(event.target.value)
        this.setState({
            altura: event.target.value
        })
    }

    peso(event) {
        this.setState({
            peso: event.target.value.replace(/[^0-9,.?!]/g, '').replace(',', '.')
        })
    }

    imcAdulto() {
        const { altura, peso } = this.state

        const imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)))
        const resultadoIMC = imc.toFixed(2)

        console.log(resultadoIMC)
        if (resultadoIMC < 18.5) {
            var mensagem = 'Baixo peso'
        }
        else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.5) {
            var mensagem = 'Peso normal'
        }
        else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
            var mensagem = 'Excesso de peso'
        }
        else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
            var mensagem = 'Obesidade de Classe 1'
        }
        else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
            var mensagem = 'Obesidade de Classe 2'
        } else {
            var mensagem = 'Obesidade de Classe 3'
        }

        this.setState({
            imc: resultadoIMC,
            mensagem: mensagem
        })
    }

    imcIdoso() {
        const { altura, peso } = this.state

        const imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura)))
        const resultadoIMC = imc.toFixed(2)

        if (resultadoIMC <= 22) {
            var mensagem = 'Baixo peso'
        }
        else if (resultadoIMC > 22 && resultadoIMC < 27) {
            var mensagem = 'Adequado ou eutrófico'
        } else {
            var mensagem = 'Obesidade'
        }

        this.setState({
            imc: resultadoIMC,
            mensagem: mensagem
        })
    }

    calculaImc() {
        const { altura, peso, radio1, radio2 } = this.state
        if (altura != 0 && peso != 0 && radio1 != false || radio2 != false) {
            if (radio1 == true) {
                this.imcIdoso()
            } else {
                this.imcAdulto()
            }
            this.setState({
                mensagem: ""
            })

        } else {
            this.setState({
                mensagem: (
                    <Alert variant="light">
                        É preciso preencher os dois campos, e marcar sua faixa etária
                    </Alert>
                )
            })
        }
    }

    radio1() {
        this.setState({
            radio1: true,
            radio2: false
        })
    }

    radio2() {
        this.setState({
            radio1: false,
            radio2: true
        })
    }

    render() {
        const { altura, peso, mensagem, imc, radio1, radio2 } = this.state
        return (
            <div>
                <h1>Calculadora IMC</h1>
                <div className="">
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Form>
                                <Col xs={12} md={12}>
                                    <Form.Group className="text-left">
                                        <Form.Check onChange={this.radio1} checked={radio1} inline label="Idoso: idade > 65 anos" type='radio' /><br />
                                        <Form.Check onChange={this.radio2} checked={radio2} inline label="Adulto: idade <= 65 anos" type='radio' />
                                    </Form.Group>
                                </Col>
                                <hr />
                                <Col xs={12} md={12}>
                                    <Form.Group>
                                        <Form.Label>Altura</Form.Label>
                                        <InputMask className="form-control" mask="9.99" onChange={this.altura} value={altura} />
                                    </Form.Group>
                                </Col>
                                <Col xs={12} md={12}>
                                    <Form.Group>
                                        <Form.Label>Peso</Form.Label>
                                        <Form.Control onChange={this.peso} value={peso} type="text" />
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
                    {mensagem}
                    <TabelaResultado imc={imc} mensagem={mensagem}></TabelaResultado>
                </div>
            </div>

        )
    }
}