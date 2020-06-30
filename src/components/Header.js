// Toda vez que eu vou ter código JSX preciso importar o React
import React from 'react';

// IMPORTANTE: Quando criarmos uma componente(ex.: App, Header) ela pode ser usada como uma 'tag'
// A exportação também pode ser feita aqui do loado de cima
// O 'Header' é o nosso 2º COMPONENTE
// Para ter acesso ao conteúdo que está na COMPONENTE PAI utilizando DESESTRUTURAÇÃO utilizamos '{title}
export default function Header( {title} ) {
    //Para retornar conteúdo HTML com mais de uma linha usa-se ()
    return (
        <header>
            {/* Agora, queremos mostrar o título da página no lugar de 'React.JS */}
            {/* <h1>ReactJS</h1> */}
            {/* E aqui deixamos só o 'title':*/}
            <h1> {title} </h1>

        </header>
    );
}



 
