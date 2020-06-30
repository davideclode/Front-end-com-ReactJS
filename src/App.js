import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

// Agora quero que assim que o meu componente App for exibido na tela eu preciso carregar as informações de projetos que estão contidas na nossa api(array lá do imsomnia). Para isso utilizamos a função 'useEffect'

// Vou importar o meu Header aqui
import Header from './components/Header'; /* Header.js */

// Agora criamos a função App. Tem que ser o mesmo nome do arquivo App.js
// Para poder ter elementes um abaixo do outro no react é necessário utilizar <div></div>
// A FUNÇÃO 'App' É O NOSSO 1º COMPONENTE
// Componente pai
function App() {
    // Criando dois projetos
    /* 'useState' retorna duas posições: 
    1. Variável com o seu valor inicial 
    2. Função para atualizarmos esse valor
    Logo, vamos utilizar o conceito e DESESTRUTUÇÃO
    Obs.: como "projects" vai sempre ser uma array, é necessário também que useState([]) o seja e vazio
    Obs.: Se "projects" fosse um objeto, então teriamos também useState({}).
    */
    const [projects, setProjects] = useState([]);
    // Em vez disso agora vou substitui o <h1></h1> pelo Header
    // E retirar também a palavra 'div' dentro dos <>

    // Colocamos aqui o useAffect que recebe dois parâmetros:
    // 1º parâmetro: qual função eu quero disparar?
    // 2º parâmetro: quando é que eu quero disparar essa função?
    // Se eu quissesse que essa função fosse disparada toda vez que a variável "projects" tivesse valor alterado, então fariamos "[projects]". Mas eu quere que a função seja disparada a penas 1 vez. Logo de o array vazio '[]'. chama-se array de dependências. Se tivermos alguma variável dentro de "{}", então toda vez que ocorrer alteração em '[]', a variável dentro de "{}" será executada
    useEffect( () => {
        // Quando api.get('projects') retornar uma resposta "então" teremos resposta disponível dentro de "response"
        api.get('projects').then(response => {
            // Vou usar o 'data' para preencher o projeto. Temos que inicializar também nosso projeto com array vazio, ou seja "useState([])". Vale dizer que dentro do "response.data", temos "id", "title" e "owner"
            setProjects(response.data);
            // console.log(response);
        } )
    }, [] );

    // Função para lidar com a adição de novos projetos sem duplicá-las
    //Acrescentamos "async" no final agora.
    async function handleAddProject() {
        // Para javascript comum, usuariamos "projects.push('Novo Projeto)" mas iss criaria projetos duplicados
        // projects.push(`Novo projeto ${Date.now()}`);

/*      Tota vez que a gente quer alterar o valor de "projects" precisamos chamar a função             "setProjects". Então é essa função que devemos chamar. E para isso também vamos utilizar o conceito de IMUTABILIDADE. 
'[]' significa que estamos criando um novo array
'...projects' copiando tudo que já está dentro de projects
`Novo projeto ${Date.now()}` e criando um novo projeto
*/
        // setProjects( [...projects, `Novo projeto ${Date.now()}`] );

        // Lembrando que no "insomnia" enviamos uma requisição do tipo "POST" para rota "projects", enviando "title" e "owner". Portanto, aqui vamos utilizar a nossa "api" para enviar uma requisição do tipo "POST" para rota "projects", enviando "title" e "owner"
        // 
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Davide da Silva"
        } );
        // Assim como no "response.data" do "api.get()" também temos dentro do "response.data" do "api.post()" o "id", "title" e "owner". Portanto fazemos:
        const project = response.data;

        // Agora vou adicionar esse projeto novo no final de array de projetos(projects). Lembrar de adicionar o plugin "   " e acrescentar no arquivo babel.config.js o seguinte: 
        setProjects([...projects, project]);
    } 

    return(
        <>
            {/* Coponente filho */}
            <Header title="Projects" />

                {/* Supomos agora que queremos mostrar noss projeto dentro de uma lista */}
                <ul>
                    {/* Percorendo a lista de "projects" e mostrando cada um deles. Para cada um do projects eu vou exibir agora o "id" e o "title" */}
                    { projects.map( project => <li key={project.id} > {project.title} </li> ) }
                </ul>

                {/* queremos adicionar mais projetos */}
                <button type="button" onClick={handleAddProject}> Adicionar Projeto </button>
        </>
    );
}
// Exportamos agora o nosso componente App
export default App;

