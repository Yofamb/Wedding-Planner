const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const db = new Sequelize('mysql://root:@localhost/wedding-planner')

router.get('/attractions/:category', async function (req, res) {
    
})

router.get('/favorites/:userId', async function (req, res) {
    
})

router.get('/attractions/:userId', async function (req, res) {
    
})

router.post('/attractions/book',async function (req, res) {
  
})

router.post('/attractions/favorite',async function (req, res) {
  
})

router.post('/register',async function (req, res) {
  
})

router.post('/login',async function (req, res) {
  
})


module.exports = router
