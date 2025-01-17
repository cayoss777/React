import './App.css';
import Herramientas from './Componentes/Herramientas';

function App() {
  return (
    
    <div className="App">
        <div className='Definicion'>
        <h1>Herramientas base para DESARROLLO WEB
        FULL STACK</h1>
        </div>
    <Herramientas
    foto='react1'
    titulo='REACT'
    subtitulo="React is a JavaScript library for building user interfaces"
    definicion='React es una biblioteca de JavaScript de código abierto diseñada para construir interfaces de usuario (UI) interactivas y dinámicas, especialmente para aplicaciones de una sola página (SPA). Es mantenida por Meta (anteriormente Facebook) y una gran comunidad de desarrolladores.'/>

<Herramientas
    foto='js'
    titulo='JavaScript'
    subtitulo="JavaScript is the world's most popular programming language"
    definicion='JavaScript es un lenguaje de programación utilizado principalmente para crear interactividad y dinamismo en sitios web. Es uno de los pilares fundamentales del desarrollo web junto con HTML (estructura del contenido) y CSS (diseño visual)'/>


<Herramientas
    foto='css'
    titulo='CSS'
    subtitulo='CSS is the language we use to style an HTML document.'
    definicion='CSS (Cascading Style Sheets, o Hojas de Estilo en Cascada) es un lenguaje de estilo utilizado para describir la presentación (diseño visual) de un documento HTML o XML. CSS permite definir cómo deben mostrarse los elementos en la pantalla, en papel o en otros medios. En pocas palabras, CSS controla la apariencia y el diseño de una página web.'/>

<Herramientas
    foto='html'
    titulo='HTML'
    subtitulo='HTML is the standard markup language for Web pages.'
    definicion='HTML es el Lenguaje de Marcado de Hipertexto (HyperText Markup Language, por sus siglas en inglés). Es el código fundamental que se utiliza para estructurar y presentar el contenido en la World Wide Web.With HTML you can create your own Website.'/>

    </div>
    
  );
}

export default App;
