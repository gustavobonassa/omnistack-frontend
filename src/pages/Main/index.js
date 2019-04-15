import React, { Component } from 'react';
import api from '../../services/api';

import logo from "../../assets/logo.svg";

import { Container, SubmitButton } from './styles';

export default class Main extends Component {
    state = {
       newBox: '', 
    };

    handleSubmit = async e => {
        e.preventDefault();

        const response = await api.post('boxes', {
            title: this.state.newBox,
        });

        //aqui vai a resposta do input
        this.props.history.push(`/box/${response.data._id}`); //props.history para acessar a propriedade do routes
    }

    handleInputChange = (e) => {
        this.setState({ newBox: e.target.value }); //target simboliza o input do html, setstate é para alterar os estados
    }

    render() {
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="" />
                    <input 
                        placeholder="Criar um box"
                        value={this.state.newBox}
                        onChange={this.handleInputChange}
                    />
                    <SubmitButton type="submit">Criar</SubmitButton>
                </form>
            </Container>
        );
    }
}
