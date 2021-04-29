require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gesture roast food ski struggle riot pitch smooth gesture hat army gate'; 
let testAccounts = [
"0x617f47245bbf02b2d6f6983038d8b0f70577818d70f0c6f23e67d13a7fe714b3",
"0xec099e3f0c283697fe5e82a479fb983f61f9b9900e416b91febceb7e379985d4",
"0xc69fcbc1005677df4edd81e6587ef86e015f5ce5cdbbc142331940cef999b5cd",
"0x42c48463a17d938a25ba5f62f46f0053b67bacbd75407958f82256bdd823365e",
"0xa42ff777ceb7d2a74eab228abb37e8706262f5dd0f24d23a8c21bf73a00b7bfa",
"0x62ccb589185a75e19a13ffd5c966340232c78f2713f01c26f3cd00f939565394",
"0xb572341f0b9de1f785e9e80018623b397822c11e3eb3347513506bdfb865c1bc",
"0xc6b2066eedad94fbf019fee891f7df6531b6ef327c258c8f3ca1affdeba5b6d5",
"0x31f3c006008b62ab648b4d7967eabca78ed23b3aca780406ca16c2d57e04d519",
"0xa49e4b9642769db0cb68d6142b3630746cf91108cbd71872d00788d9519e7717"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

