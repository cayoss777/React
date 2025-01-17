import React from "react";

function Herramientas(props){
    return(
        <div className="herramienta">
            <img className="foto"
            src={require(`../fotos/${props.foto}.png`)}
            alt="foto react"/>
            <div className="texto">
                <p className="texto-arriba">{props.titulo}</p>
                <p className="texto-abajo">{props.subtitulo}</p>
                <p className="texto-bajo">{props.definicion}</p>
            </div>
        </div>
        
    );

}
export default Herramientas;