var express = require('express');
var router = express.Router();

const Product = require('../models/product');
const Brand = require('../models/brand');
const Category = require('../models/category');

const { brandController } = require('../controllers/brandController');
const { categoryController } = require('../controllers/categoryController');
const { itemController } = require('../controllers/itemController');
const { productController } = require('../controllers/productController');


const index = (req, res) => {
  res.render('index', { title: 'Tunguska' });
}

router.get('/', index);

router.get('/brand/list', brandController.list);
router.get('/category/list', categoryController.list);
router.get('/product/list', productController.list);
router.get('/item/list', itemController.list);

router.get('/brand/new', brandController.create.get);
router.post('/brand/new', brandController.create.post);

router.get('/category/new', categoryController.create.get);
router.post('/category/new', categoryController.create.post);

router.get('/product/new', productController.create.get);
router.post('/product/new', productController.create.post);

router.get('/item/new', itemController.create.get);
router.post('/item/new', itemController.create.post);


router.get('/brand/:id', brandController.detail);
router.get('/categorie/:id', categoryController.detail);
router.get('/product/:id', productController.detail);
router.get('/item/:id', itemController.detail);

router.get('/brand/new', brandController.create.get);
router.post('/brand/new', brandController.create.post);

router.get('/category/new', categoryController.create.get);
router.post('/category/new', categoryController.create.post);

router.get('/product/new', productController.create.get);
router.post('/product/new', productController.create.post);

router.get('/item/new', itemController.create.get);
router.post('/item/new', itemController.create.post);

router.get('/brand/:id/delete', brandController.delete.get);
router.post('/brand/:id/delete', brandController.delete.post);

router.get('/categorie/:id/delete', categoryController.delete.get);
router.post('/categorie/:id/delete', categoryController.delete.post);

router.get('/product/:id/delete', productController.delete.get);
router.post('/product/:id/delete', productController.delete.post);

router.get('/item/:id/delete', itemController.delete.get);
router.post('/item/:id/delete', itemController.delete.post);

router.get('/brand/:id/update', brandController.update.get);
router.post('/brand/:id/update', brandController.update.post);

router.get('/categorie/:id/update', categoryController.update.get);
router.post('/categorie/:id/update', categoryController.update.post);

router.get('/product/:id/update', productController.update.get);
router.post('/product/:id/update', productController.update.post);

router.get('/item/:id/update', itemController.update.get);
router.post('/item/:id/update', itemController.update.post);



module.exports = router;