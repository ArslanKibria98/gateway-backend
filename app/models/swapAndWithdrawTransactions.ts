'use strict';
var mongoose = require('mongoose');

var schema = mongoose.Schema({
  createdByUser: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  updatedByUser: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
  isActive: { type: Boolean, default: false },
  destinationNetwork: { type: mongoose.Schema.Types.ObjectId, ref: 'networks' },
  sourceNetwork: { type: mongoose.Schema.Types.ObjectId, ref: 'networks' },
  destinationCabn: { type: mongoose.Schema.Types.ObjectId, ref: 'currencyAddressesByNetwork' },
  sourceCabn: { type: mongoose.Schema.Types.ObjectId, ref: 'currencyAddressesByNetwork' },
  receiveNetwork: { type: String, default: "" },
  receiveCurrency: { type: String, default: "" },
  receiveTransactionId: { type: String, default: "" },
  v: { type: Number, default: null },
  timestamp: { type: Number, default: null },
  receiveTransactionTimestamp: { type: Number, default: null },
  receiveAddress: { type: Number, default: null },
  receiveAmount: { type: String, default: "" },
  sendNetwork: { type: String, default: "" },
  sendAddress: { type: String, default: "" },
  sendTimestamp: { type: Number, default: null },
  sendCurrency: { type: String, default: "" },
  sendAmount: { type: String, default: "" },
  payBySig: { 
    token: { type: String, default: "" },
    payee: { type: String, default: "" },
    amount: { type: String, default: "" },
    toToken: { type: String, default: "" },
    sourceChainId: { type: String, default: "" },
    swapTxId: { type: String, default: "" },
    contractName: { type: String, default: "" },
    contractVersion: { type: String, default: "" },
    contractAddress: { type: String, default: "" },
    hash: { type: String, default: "" },
    signatures: [
    ],
    salt: { type: String, default: "" },
  },
  originCurrency: { type: String, default: "" },
  sendToCurrency: { type: String, default: "" },
  used: { type: String, default: "" }, //can be '', 'pending', 'failed', 'completed'
  status: { type: String, default: "swapPending" },
  useTransactions: [
    {
      transactionId: { type: String},
      status: { type: String},
      timestamp: { type: Number },
    }
  ],
  execution: {
    status: { type: String, default: "" }, // can be '', 'pending', 'failed', 'timedout', 'sucess'
    transactions: {
      network: { type: String, default: "" },
      transactionId: { type: String, default: "" },
      timestamp: { type: Number, default: null },
      status: { type: String, default: "" }, //can be 'pending', 'failed', 'timedout', 'sucess'
      message: { type: String, default: "" },
    },
  },
  signature: { type: Number, default: null },
  blocked: { type: Boolean, default: false },
  creator: { type: String, default: "" }

},{ collection: 'swapAndWithdrawTransactions' });

var currenciesModel = mongoose.model("swapAndWithdrawTransactions",schema);
module.exports = currenciesModel;
