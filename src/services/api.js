/* Para evitar que qualquer front-end possa fazer requisições e obter dados do nosso back-end, precisamos instalar o **`yarn add cors` na pasta back-end. E alterar também o código no back-end */
// Importamos o 'axios'
import axios from 'axios'

// criamos uma instancia do 'axios'
const api = axios.create( {
    // Aqui passamos a url. Pode ser a mesma que está no 'dev' do insomnia
    baseURL: 'http://localhost:3333',
} );

// Exportamos agora o nosso 'api' para poder usá-la em 'App.js'
export default api;