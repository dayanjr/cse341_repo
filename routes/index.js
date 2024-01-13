const router = require('express').Router();
const nameController = require('../controllers/names');
router.get('/',(req,res)=>{
    res.send(nameController.getDayan());
});
router.get('/kevin',(req,res)=>{
    res.send(nameController.getKevin());
});
router.get('/ross',(req,res)=>{
    res.send(nameController.getRoss());
});
module.exports = router;