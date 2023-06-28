const router = require('express').Router();
const Usuario = require('../models/Usuario')
const passport = require('passport');
const { isAuthenticated } = require('../helpers/auth');

router.get('/dashboard', isAuthenticated, async (req, res) => {
    const usuarios = await Usuario.find();
    res.render('dashboard/dashboard',{usuarios});
});

module.exports = router;