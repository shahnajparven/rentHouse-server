import { Router } from 'express';

import { orderRoute } from './orderRoute.js';
import { userRroute } from './userRoute.js';
import { productRroute } from './productRoute.js';
import { pickupRoute } from './pickupRoute.js';
import { PaymentRoute } from './paymentRoute.js';


const router = Router();

// routes
router.use('/order',orderRoute);
router.use('/user',userRroute);
router.use('/product',productRroute);
router.use('/pickup',pickupRoute);
router.use('/payment',PaymentRoute);

export default router;