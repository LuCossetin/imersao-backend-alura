import conectarAoBanco from '../config/dbconfig.js';

// A função conectarAoBanco retorna uma promessa que, quando resolvida, fornece a conexão com o banco.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);


    // Função assíncrona para obter todos os posts do banco de dados.
    export default async function getTodosPosts() {
    // Obtém o banco de dados 'imersao-instalike' da conexão.
    const db = conexao.db('imersao-instalike');
    // Obtém a coleção 'posts' do banco de dados.
    const colecao = db.collection('posts');
    // Executa uma consulta para encontrar todos os documentos na coleção 'posts' e retorna um array com os resultados.
    return colecao.find().toArray();
  }