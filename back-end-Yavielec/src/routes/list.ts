import { Router } from 'express';
import { getLists } from '../controllers/lists';
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken, getLists)

export default router;