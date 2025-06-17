
import express from 'express';
import * as clientController from '../controllers/ClientController.js';

const router = express.Router();

router.get('/clients', clientController.getClients);

export default router; 
