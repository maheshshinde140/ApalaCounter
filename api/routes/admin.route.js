import express from 'express';

import { authenticateToken } from '../middleware/verify.js';
import { placeOrder, removeItemQuantityOrder, RemoveOneItemOnOrder } from '../controller/create.and.edit.order.controller.js';
import { getAllBill, getCounterBill } from '../controller/get.order.detail.js';
import { getAllCounterSale } from '../controller/get.counter.sales.js';
import { getTotalOfflineSale } from '../controller/get.total.offline.sales.js';
import { getTotalSale } from '../controller/get.total.sales.js';
import { GetPurchaseOrder } from '../controller/add.product.js';

const admin = express.Router();
admin.get('/getTotalSale', authenticateToken, getTotalSale);
admin.get('/getTotalOfflineSale', authenticateToken, getTotalOfflineSale);
admin.get('/getAllOrderBill', authenticateToken,getAllBill );
admin.get('/getAllCounterSales', authenticateToken,getAllCounterSale );
admin.get('/PurchaseOrderGet',authenticateToken,GetPurchaseOrder);
export default admin;
