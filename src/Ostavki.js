import './Ostavki.css';
import React from "react";

const Ostavki = (props) => {
    return(
        <div>
            <p className="Tag">Заявки:</p>
            <div className="ostavki">
                <img src="/img/camera_50.png" className="avatar"/>
                <p className="name">{props.name}</p>
                <p className="message">{props.message}</p>
            </div>
        </div>
    )
}

export default Ostavki;