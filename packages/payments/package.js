Package.describe({
  name: 'pulsarjs:payments',
  version: '0.0.2',
  summary: 'Payments for pulsarjs',
  git: 'https://github.com/isomer-io/pulsarjs'
});

Package.onUse(function(api) {
  api.use(['templating','tracker','session'], "client");

  api.use("meteorhacks:async@1.0.0", "server");

  api.use([
    "mrgalaxy:stripe@2.1.0",
    "orionjs:core@1.1.0",
    "iron:router@1.0.9",
    "meteorhacks:async@1.0.0",
    "spacebars","ongoworks:security@1.2.0","nicolaslopezj:roles@1.1.2", 'pulsarjs:config@0.0.1'
  ], ["client", "server"]);

  api.versionsFrom('METEOR@1.1.0.2');

  api.addFiles(['server/StripeServerCode.js'],'server');

  api.addFiles(['client/templates/buyButton/buyButton.html',
    'client/templates/buyButton/buyButton.js',
    'client/templates/buyButton/modals.html',
    'client/templates/buyerSetupButton/buyerSetupButton.html',
    'client/templates/buyerSetupButton/stripeOauthTemplate.html',
    'client/templates/buyerSetupButton/buyerSetup.html',
    'client/templates/buyerSetupButton/buyerSetupButton.js',
    'subscribeButtonTemplate.html',
    'unsubscribeButtonTemplate.html',
    'subscribe.html',
    'client/StripeClientCode.js',
    'charges/templates/findOneCharge.html',
    'charges/templates/findOneCharge.js',
    'charges/templates/findCharges.html'], 'client');

  api.addFiles(['refunds/RefundCollection.js','StripeCode.js',
  'charges/code/lib/chargesCollection.js'],['client','server']);


  api.addFiles(['server/RefundsSecurity.js',
  'charges/code/server/chargesSecurity.js'],'server');

  api.export('createCustomer', 'client');
  api.export('createCharge', 'client');
  api.export('Refunds');
  api.export('Charges');

});
