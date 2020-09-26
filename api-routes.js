let router = require('express').Router();
const apiService = require('./api.service');

router.get('/ares/:ico', getICO);

module.exports = router;

function getICO(req, res, next) {
    apiService.getICO(req.params.ico)
        .then((data) => {
                if(!data) {
                    res.json({
                        message: 'Data not found',
                        status: '404'
                    })
                } else {
                    res.json({
                        message: 'Data loaded successfully.',
                        status: '200',
                        data: data   
                    })
                }
            }
        )
        .catch(err => {
            next(err);
        });
}