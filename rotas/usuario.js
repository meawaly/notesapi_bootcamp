const express = require("express");

const router = express.Router();

router.get("/", function(req, res){
    res.send("GET usuario");
});
router.post("/", function (req, res){
    console.log(req.body);

    res.send("post usuario")
});

router.put("/" , function (req, res) {
    res.send("put usuario");
});

router.delete("/" , function (req, res) {
    res.send("delete usuario");
});
module.exports = router;