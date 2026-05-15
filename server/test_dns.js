const dns = require('dns');
dns.resolveSrv('_mongodb._tcp.stlightcluster.1iphjvi.mongodb.net', (err, addresses) => {
  if (err) {
    console.error('DNS Resolution Error:', err);
  } else {
    console.log('Addresses:', addresses);
  }
});
