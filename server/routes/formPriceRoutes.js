const express = require('express');
const router = express.Router();
const formController = require('../controller/formPriceController'); 

// GET form price by form name
router.get('/:formName/price', formController.getFormPrice);

// PUT update form price by form name
router.put('/:formName/price', formController.updateFormPrice);

// POST submit a form
router.post('/submit', formController.submitForm);

router.get('/getall', formController.getAllFormPrices);

module.exports = router;
