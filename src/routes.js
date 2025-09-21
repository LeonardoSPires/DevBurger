// src/routes.js
import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer.js';

import authMiddleware from './app/middlewares/auth.js';

import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import ProductController from './app/controllers/ProductController.js';
import CategoryController from './app/controllers/CategoryController.js';
import OrderController from './app/controllers/OrderController.js';

const routes = Router();

const upload = multer(multerConfig);

// públicas
routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

// tudo abaixo exige auth
routes.use(authMiddleware);

// produtos
routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);

// categorias
routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);

// pedidos
routes.post('/orders', OrderController.store);

export default routes;
