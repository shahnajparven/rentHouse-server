import { Router } from 'express';

import { orderRoute } from './orderRoute.js';
import { userRroute } from './userRoute.js';
import { productRroute } from './productRoute.js';
import { pickupRoute } from './pickupRoute.js';
import { PaymentRoute } from './paymentRoute.js';


const router = Router();

// routes
router.use('/',orderRoute);
router.use('/',userRroute);
router.use('/',productRroute);
router.use('/',pickupRoute);
router.use('/',PaymentRoute);

export default router;