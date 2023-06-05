import { Router } from 'express';
import { getAllProducts, createANewProduct } from '../Controller/createAnewProduct';
import { createANewPerson, getAllOrders } from '../Controller/usersController';
import createANewLogin from '../Controller/loginController';
import { loginRequired, loginValidation } from '../middleware/loginVerification';

const router = Router();

router.post('/products', createANewProduct);

router.get('/products', getAllProducts);

router.post('/users', createANewPerson);

router.get('/orders', getAllOrders);

router.post('/login', loginRequired, loginValidation, createANewLogin);

export default router;