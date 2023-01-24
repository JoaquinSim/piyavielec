import { Router } from 'express';
import { getLists, newList } from '../controllers/lists';
import validateToken from './validate-token';

const router = Router();

router.post('/', validateToken, newList);

router.get('/',validateToken, getLists)

export default router;