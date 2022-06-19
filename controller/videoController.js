const express = require('express');
var router = express.Router();

router.get('/', (req, res )=>{
    res.render('users/addOrEdit', {
        viewTitle : "Insert Employee"
    });
});


module.exports = router;