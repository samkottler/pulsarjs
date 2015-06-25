Package.describe({
  name: 'stripe',
  version: '0.0.1',
  summary: 'A simplified version of https://github.com/tyler-johnson/stripe-meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use(["templating",'tracker','session'], "client");

  api.use("meteorhacks:async@1.0.0", "server");

  api.use([
    "mrgalaxy:stripe@2.1.0",
    "orionjs:core@1.1.0",
    "iron:router@1.0.9",
    "meteorhacks:async@1.0.0",
    "spacebars","ongoworks:security","nicolaslopezj:roles"
  ], ["client", "server"]);

  api.versionsFrom('METEOR@1.1.0.2');

  api.addFiles(['server/StripeServerCode.js'],'server');

  api.addFiles(['payForItemButtonTemplate.html','payForItem.html',
    'connectToStripeButtonTemplate.html', 'stripeOauthTemplate.html','subscribeButtonTemplate.html',
    'unsubscribeButtonTemplate.html','subscribe.html',
    'client/StripeClientCode.js'], 'client');

  api.addFiles(['refunds/RefundCollection.js','StripeCode.js'],['client','server']);


  api.addFiles(['server/RefundsSecurity.js'],'server');
  
  api.export('createCustomer', 'client');
  api.export('createCharge', 'client');
});