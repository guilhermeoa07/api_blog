const express = require('express');
const router = express.Router();
const controller = require('../controller/autor_controller');

router.post('/', controller.post);
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);
router.put('/admin/:id', controller.put);
router.put('/:slug', controller.putBySlug);
router.delete('/', controller.del);

module.exports = router;