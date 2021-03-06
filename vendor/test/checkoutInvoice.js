var assert = require('assert')
    , Invoice = require('../lib/invoice')
    ,intram=require('../../')
    , Setup =intram.Setup
    , Store =intram.Store
    , CheckoutInvoice = require('../lib/checkoutInvoice')
;

describe('CheckoutInvoice', function () {
    describe('#create()', function () {
        it('should work with valid initialization and total amount', function (done){
            this.timeout(15000);
            var setup = new Setup({
                mode: 'test',
                marchandKey: 'tpk_5e9469e65341de91988b352eba11f9f0c5f671384e1d6bfb09ce30103bcc09903b42dfacfb2b436d4b48af01f763bbaa1748b1d6ea165d4a2f581bcfd1fd8943',
                privateKey: 'tpk_5e9469e65341de91988b352eba11f9f0c5f671384e1d6bfb09ce30103bcc09903b42dfacfb2b436d4b48af01f763bbaa1748b1d6ea165d4a2f581bcfd1fd8943',
                publicKey: "5e59e0c34bb8737cedf4c0ec92d9ae94007e33e5c30280596456990d9fc2f6058147a092fa6017ab5a25150fc0dd2991cff0e49b9ee8cb04355b689769d68d44",
                secret: 'tsk_243a7b89fd82a2b4e049c0c8ff39c3012ee6ec70bda3288ad2bf6a1270439ce4245e2f1ea7e4c03beb5cd807cbc7a32c0baf7de3a1f9d9b8593bab38af6531f7'
            });
            var store = new Store({name: 'LandryShop'});
            var invoice = new CheckoutInvoice(setup, store);
            invoice.totalAmount = 1000;
            invoice.currency = 'XOF';
            invoice.create()
                .then(function () {
                    assert.ok(invoice.url);
                    assert.ok(invoice.token);
                    done();
                });
        });
    });


});