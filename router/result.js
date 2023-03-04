const router = require('express').Router();
const Result = require('../sequelize/model')

const cookieConfig={
    httpOnly:true,
    maxAge:2147483647,
    // signed:true
}

router.route('/')
.post(async(req,res)=>{
    await Result.create({
        q0:req.body.q0,
        q1:req.body.q1,
        q2:req.body.q2,
        q3:req.body.q3,
        q4:req.body.q4,
        q5:req.body.q5,
        q6:req.body.q6,
        q7:req.body.q7,
    })
    res.cookie('done',true,cookieConfig);
    res.send("OK")
})

module.exports = router;