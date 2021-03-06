const express = require('express')
const router = express.Router()
const checkNotLogin = require('../middlewares/check').checkNotLogin

// GET /signin 登录页
router.get('/', checkNotLogin, (req, res) => {
  // 渲染signin名的ejs模板
  res.render('signin', {
    
  })
})

// POST /signin 登录
router.post('/', checkNotLogin, (req, res) => {
  res.send('登录')
})

module.exports = router
