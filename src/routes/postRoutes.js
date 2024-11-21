import express from 'express';
import { listarPosts } from '../controllers/postsController.js';



const routes = (app) => {
    // Habilita o middleware JSON para que o Express possa interpretar requisições com corpo JSON.
    app.use(express.json());
    // Rota GET para a raiz '/posts'. Quando uma requisição GET é feita para este endpoint, a função é executada.
    app.get('/posts', listarPosts);
}

export default routes;