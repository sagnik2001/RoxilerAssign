const { getTodos, getUsersById } = require("../controllers/GetUsers")

const router = require("express").Router()

router.get("/",getTodos)

module.exports = router