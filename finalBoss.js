var randomNumber = require('./randomNumber');
var USDconverter = require('./USDconverter');

var randomDollarGenerator = function() {
  return USDconverter(randomNumber(100, 1000000));
};

var accountBalanceString = function() {
  return "Account balance: \n"
};

module.exports.randomDollar = randomDollarGenerator;
module.exports.accountBalanceString = accountBalanceString;
