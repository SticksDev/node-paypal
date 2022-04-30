const liberrors = require('./utils/errors')
class client {
    constructor(configOps) {
        if(!configOps) {
            throw new liberrors.payPalClientError('Configuration options are required');
        }

        // Check if configOps is an object, i.e
        // new client({
        //     clientId: '',
        //     clientSecret: '',
        // )}

        if(typeof configOps !== 'object') {
            throw new liberrors.payPalClientError('Configuration options must be an object.');
        }

        if(!configOps.clientId || !configOps.clientSecret) {
            throw new liberrors.payPalClientError('Client ID and Client Secret are required');
        }
        
        this.configuration = {
            baseUrl: configOps.sandbox ? 'https://api-m.sandbox.paypal.com' : 'https://api.paypal.com',
            ...configOps,
        }
    }

    getCurrentConfiuration() {
        return this.configuration;
    }
}

module.exports = { client };