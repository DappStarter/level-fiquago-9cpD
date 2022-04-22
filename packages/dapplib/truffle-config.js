require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success stool cruise shift promote guess kangaroo army gift'; 
let testAccounts = [
"0x4baebbf34a58da3ba6f475c3b1c5de646d5240934e4524cc1f095b94275b784d",
"0x4d40a43be7575d5728e55b77e72e359951a296b1676f42645f743e980f2130a0",
"0x70bae3a0dfbb499e5e4c53510e91f6fc555495529db0d8b5e62ab8e7ff18cfcf",
"0x147b8426a29973eeb7513ecb360ec464ac878dc593afea556b1593add383f586",
"0xd8c9c8bfcd3f85a3929551ed513f282cb85d50e89a268cfcbabd7f8752e23755",
"0x440f8bdaff5513871ae1bb9aca5863878349fb16e30d55fa61a100f84b8d2ef1",
"0xb8e06ac1f6b31b3a182088d8afc5895188fb03c5e9a03653171043a53b1b71e5",
"0xd89f32afbcf65b6d16f0109b2c950b30a14ffe41bd093d8babbf3f12ab7082b5",
"0xc2896f0f74347109cf0f768d02faa231c0986df3bd0b79cee4fb0150bdf3f4db",
"0x411f46023790bcbba39a49a6b39597a19780def7a43d6dbead0e0fb3fe40303b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

