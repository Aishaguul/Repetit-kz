import './Ostav.css';
import React from "react";
import Ostavki from "./Ostavki";

class Ostav extends React.Component {
    constructor(props) {
        super(props);
        this.OstavZayav = this.OstavZayav.bind(this);
        this.NeOstavZayav = this.NeOstavZayav.bind(this);
        this.state = {isOstavIn: false};
    }

    OstavZayav() {
        this.setState({isOstavIn: true});
    }

    NeOstavZayav() {
        this.setState({isOstavIn: false});
    }
тз
    render() {
        const isOstavIn = this.state.isOstavIn;
        let button;

        if (isOstavIn) {
            button = <NeOstav onClick={this.NeOstavZayav} />;
        } else {
            button = <Ostav1 onClick={this.OstavZayav} />;
        }

        return (
            <div>
                <p className="text">Ваше имя:</p>
                <input className="input"/>
                <p className="text1">Ваш возраст:</p>
                <input className="input1"/>
                <p className="text2">Ваш электронный адрес:</p>
                <input className="input2"/>
                <Greeting isOstavIn={isOstavIn} />
                {button}

                <Ostavki name="Ulbosyn" message="Преподаватель истории Казахстана"/>
                <Ostavki name="Aishagul" message="Психолог-педагог"/>
                <Ostavki name="Gulzhakhan" message="Репетитор Математики"/>
                <Ostavki name="Aruzhan" message="Преподаватель английского языка"/>
                <Ostavki name="Zhuldyz" message="Преподаватель русского языка"/>
                <Ostavki name="Myrzabek agai" message="Преподаватель Web-technologies"/>
            </div>
        );
    }
}
function UserGreeting(props) {
    return <h1 className="success_ostav">Вы успешно оставили заявку</h1>;
}

function GuestGreeting(props) {
    return <h1 className="tag_ostav">Оставить заявку</h1>;
}

function Greeting(props) {
    const isOstavIn = props.isOstavIn;
    if (isOstavIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function Ostav1(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Оставить заявку
        </button>
    );
}

function NeOstav(props) {
    return (
        <button className="button" onClick={props.onClick}>
            Вы оставили заявку
        </button>
    );
}

export default Ostav;