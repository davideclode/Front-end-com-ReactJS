import React from 'react';
import {render} from 'react-dom';

// Ao exportarmos App lá no App.js, agora podemos 'importar' aqui no 'index.js'
import App from './App'; /* './App.js' */

/* Chamamos o método render
JSX: HTML dentro de javascript. Isso é possível poque estamos utilizando '@babel/preset-react' que se encontra no arquivo "babel.config.js".
Significa que quero renderizar "h1" dentro da "div" com id 'app'. essa div encontra-se em 'index.html'
*/
/* Toda componente que criamos no react, nós podemos escrever essa função como uma tag de HTML */
// render( <h1>Hello every body !!!</h1>, document.getElementById('app') );
render( <App/>, document.getElementById('app') );