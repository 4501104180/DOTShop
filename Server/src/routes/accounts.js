const express = require('express');
const router = express.Router();

// Controllers
const accountsAPI = require('../app/controllers/AccountsAPI');
// Middlewares
const verifyToken = require('../app/middlewares/verifyToken');
const upload = require('../app/middlewares/upload');


router.get('/verify', verifyToken, (req, res) => {
    res.json(!!req.user._id);
});
router.post('/refreshToken', accountsAPI.refreshToken);
router.get('/profile', verifyToken, accountsAPI.getProfile);
router.get('/checkExist/:email', accountsAPI.checkExist);
router.post('/login', accountsAPI.login);
router.post('/register', accountsAPI.register);
router.put('/:accountID', upload.single('image'), accountsAPI.edit);
router.delete('/:accountID', accountsAPI.deletebyID);
router.delete('/', accountsAPI.deletedAll);
router.post('/', upload.single('image'), accountsAPI.insert);
router.get('/', accountsAPI.findAll);

module.exports = router;
