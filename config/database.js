const crypto = require('crypto').randomBytes(256).toString('hex');


   module.exports= {
        uri: 'mongodb://localhost:27017/login',//db uri and db name
            secret:
        'crypto',//crypto-created secret
            db:
        'login'//db name
    }

