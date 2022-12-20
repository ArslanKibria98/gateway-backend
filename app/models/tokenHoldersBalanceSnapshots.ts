'use strict';
var mongoose = require('mongoose');

var schema = mongoose.Schema({
  tokenHolderBalanceSnapshotEvent: { type: mongoose.Schema.Types.ObjectId, ref: 'tokenHolderBalanceSnapshotEvents' },
  currencyAddressesByNetwork: { type: mongoose.Schema.Types.ObjectId, ref: 'currencyAddressesByNetwork' },
  tokenContractAddress: { type: String, default: "" },
  tokenHolderAddress: { type: String, default: "" },
  tokenHolderQuantity: { type: String, default: "" },
  currentBlock: { type: String, default: "" },

  isActive: { type: Boolean, default: true },

  createdAt: { type: Date, default: new Date() },
  updatedAt: { type: Date, default: new Date() },
},{ collection: 'tokenHoldersBalanceSnapshots' });

var tokenHoldersBalanceSnapshotsModel = mongoose.model("tokenHoldersBalanceSnapshots",schema);
module.exports = tokenHoldersBalanceSnapshotsModel;
