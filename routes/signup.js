const express = require('express')
const router = express.Router()
const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signup 注册页
router.get('/', checkNotLogin, (req, res) => {
  res.render('signup', {
    
  })
})

// POST /signup 注册
router.post('/', checkNotLogin, (req, res) => {
  res.send('注册')
})

module.exports = router