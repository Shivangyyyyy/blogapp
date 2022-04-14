const { createblog } = require("../controllers/blog");

const router = require("express").Router();

router.post("/create-blog", createblog);

module.exports = router;