let router = require('express').Router();
const AuthToken = require('../../../utils/auth-token');

const ProcedureManager = require('../../../managers/procedure')

router.put('/give', AuthToken.authenticateToken , ProcedureManager.canUpdate ,async(req,res)=>{
    let {id,email} = req.body
    const response = await ProcedureManager.giveAccess(id,email)
    res.send(response)
})

router.put('/remove', AuthToken.authenticateToken , ProcedureManager.canUpdate ,async(req,res)=>{
    let {id,email} = req.body
    const response = await ProcedureManager.removeAccess(id,email)
    res.send(response)
})

module.exports = router