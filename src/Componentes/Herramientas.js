import React from "react";

function Herramientas(){
    return(
        <div className="herramienta">
            <img className="foto"
            src={require("../fotos/react1.png")}
            alt="foto react"/>
            <div className="texto">
                <p className="texto-arriba">HTML</p>
                <p className="texto-abajo">HTML is the standard markup language for Web pages.</p>
                <p className="texto-bajo">With HTML you can create your own Website.</p>
            </div>
        </div>
        
    );

}
export default Herramientas;