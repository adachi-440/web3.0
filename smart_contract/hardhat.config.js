require('@nomiclabs/hardhat-waffle');
require('dotenv').config()

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.API_KEY}`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  }
}
