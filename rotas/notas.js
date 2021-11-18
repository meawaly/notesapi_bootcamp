const express = require("express");

const router = express.Router();

router.get("/", function(req, res){
    res.send("GET notas");
});
router.post("/", function (req, res){
    console.log(req.body);

    res.send("post notas")
});

module.exports = router;