const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

multer({
    limits: { fieldSize: 25 * 1024 * 1024 }
})

const FarmController = require('../controllers/farms.controller')
const ItemsController = require('../controllers/items.controller')
const VouchersController = require('../controllers/vouchers.controller')
const OrdersController = require('../controllers/orders.controller')
const CartController = require('../controllers/cart.controller')
const AccessController = require('../controllers/access.controller')
const AuthController = require('../controllers/auth.controller')

// signup
router.post('/signup', AccessController.signUp)
// login
router.post('/login', AccessController.login)
// get verification code
router.post('/verification', AccessController.getVerificationCode)
//check expire verification code
router.post('/verification/check', AccessController.checkVerification)
// change password
router.put('/password/change', AccessController.changePassword)
// update info 
router.put('/users/update/:userId', AccessController.updateInfo)
// refresh token
router.post('/refreshToken', AuthController.handleRefreshToken)
// logout
router.post('/logout', AccessController.logout)
// contact
router.post('/contact', AccessController.contact)

//items
router.post('/items', upload.single('image'), ItemsController.addItem)
router.get('/items', ItemsController.getItem)
router.get('/items/farm/:name', ItemsController.getItemByFarm)
router.get('/items/:id', ItemsController.getItemID)
router.put('/items/:id', upload.single('image'), ItemsController.updateItem)
router.delete('/items/:id', ItemsController.deleteItem)

//farms
router.post('/farms', upload.single('image'), FarmController.addFarm)
router.get('/farms', FarmController.getFarm)
router.get('/farms/:id', FarmController.getFarmID)
router.put('/farms/:id', FarmController.updateFarm)
router.delete('/farms/:id', FarmController.deleteFarm)

//vouchers
router.post('/vouchers', VouchersController.addVoucher)
router.get('/vouchers', VouchersController.getVoucher)
router.get('/vouchers/:name', VouchersController.getVoucherByName)
router.get('/vouchers/:id', VouchersController.getVoucherID)
router.put('/vouchers/:id', VouchersController.updateVoucher)
router.delete('/vouchers/:id', VouchersController.deleteVoucher)

//orders
router.post('/orders', OrdersController.addOrder)
router.post('/orders/noAccount/:itemId', OrdersController.addOrderNoAccount)
router.get('/orders', OrdersController.getOrder)
router.get('/orders/:id', OrdersController.getOrderID)
router.get('/orders/users/:userId', OrdersController.getOrdersByUserId)
// router.get('/orders/shipping/:userId', OrdersController.getOrdersShipping)
router.put('/orders/:id', OrdersController.updateOrder)
router.delete('/orders/:id', OrdersController.deleteOrder)
router.delete('/ordersAnonymus', OrdersController.deleteOrderNoAccount)
router.post('/orders/payment', OrdersController.paymentOrder)
router.put('/changeStatus/:id', OrdersController.changeStatus)

//cart
router.post('/carts', CartController.addCart)
router.get('/carts/:id', CartController.getCart)
router.delete('/carts/:itemId', CartController.deleteCart)

//adim
router.get('/customers', AccessController.getCustomers)

module.exports = router