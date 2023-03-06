const router = require('express').Router();
const sequelize = require('../sequelize/DBconnector')
const {QueryTypes} = require('sequelize')

router.route('/id/:id')
.get(async (req,res)=>{
    var query = `SELECT count(case when q${req.params.id}=1 then 1 end) as a1,count(case when q${req.params.id}=2 then 1 end) as a2,count(case when q${req.params.id}=3 then 1 end) as a3,count(case when q${req.params.id}=4 then 1 end) as a4  FROM mbti.result;`
    sequelize.query(query,{
        type: QueryTypes.SELECT,
        raw:true
    }).then((results, metadata)=>{
        res.send(results[0])
    },(err)=>{
        res.send(err)
    })
})

router.route('/total')
.get(async(req,res)=>{
    let totalResult={}
    for(let i=0;i<8;i++){
        var query = `SELECT count(case when q${i}=1 then 1 end) as a1,count(case when q${i}=2 then 1 end) as a2,count(case when q${i}=3 then 1 end) as a3,count(case when q${i}=4 then 1 end) as a4  FROM mbti.result;`
        let result = await sequelize.query(query,{
            type: QueryTypes.SELECT,
            raw:true
        })
        totalResult[`q${i}`]=result[0]
    }
    res.send(totalResult)
})

module.exports = router;