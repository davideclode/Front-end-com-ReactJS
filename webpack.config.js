// Como o arquivo de webpack é executado pelo node então temos acesso aos módulos do node como por exemplo "path"
const path = require("path");

/*
_dirname: indica que estou no diretório fron-end
Na pasta 'src'
E depois o arquivo 'index.js'
*/
module.exports = {
    // Arquivo de entrada na nossa aplicação. o 1º seria index.js
    entry:  path.resolve(__dirname, 'src', 'index.js'),
    // entry: './src/index.js' essa forma pode não funcionar em outros SO

    // Qual arquivo que vai ser gerado depois de convertido
    output: {
        // Passamos a pasta que vai receber o arquivo da build
        path: path.resolve(__dirname, 'public'),
        // Aqui passamos o nome do aquivo onde será gerado o código tradicional
        filename: 'bundle.js'
    },

    // Adicionamos essa parte após instalarmos 'yarn add webpack-dev-server -D'
    devServer: {
        // Caminho para o diretório que contem o caminho público da minha aplicação
        contentBase: path.resolve(__dirname, 'public'),
    },

    // Agora passamos algumas regras para cada tipo de arquivos
    module: {
        rules: [
            // 1º loader. Para isso instalamos o 'yarn add babel-loader'
            // Regra para arquivos do tipo '.js'
            {
                // 1ª propriedade: quero saber todos os arquivos que terminam com .js
                test: /\.js$/,
                // Quando importarmos arquivo JS que está dentro de "node_modules" não queremos que ele passe pelo processo de babel.
                exclude: /node_modules/,
                // Converte utilizando 'babel-loader'
                use: {
                    loader: 'babel-loader',
                }
            },
            // 2º loader: Para isso istalamos yarn add style-loader css-loader
            // Regra para arquivos do tipo '.css'
            {
                test: /\.css$/,
                exclude: /\.node_modules/,
                // Agora como vamos utilizar dois pacotes temos que utilizar ARRAY
                use: [
                    { loader: 'style-loader' }, /* Vai pegar o código interpretado pelo css-loader e injetar dentro do HTML */
                    { loader: 'css-loader' }, /* Vai ser responsável para ler arquivos e importações(ex.: .png) também. */
                ]
            },
            // 3º loader: Para isso instalamos yarn add file-loader
            // Regra para arquivos de imagens
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    },
};