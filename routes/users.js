const {  getUsersById } = require("../controllers/GetUsers")

const router = require("express").Router()

router.get("/:id",getUsersById)

module.exports = router