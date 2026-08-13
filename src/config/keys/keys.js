const fs = require('fs');
const path = require('path');

const privateKeyEC = process.env.EC_PRIVATE_KEY;
const publicKeyEC = fs.readFileSync(
    path.join(__dirname, 'ECkeys', 'ec_public.pem'),
    'utf8'
);

const privateKeyRSA = process.env.RSA_PRIVATE_KEY;
const publicKeyRSA = fs.readFileSync(
    path.join(__dirname, 'RSAkeys', 'public.key'),
    'utf8'
);

module.exports = {
    privateKeyEC,
    publicKeyEC,
    privateKeyRSA,
    publicKeyRSA,
};
