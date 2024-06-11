declare const db: any,
  asyncMiddleware: any,
  commonFunctions: any,
  stringHelper: any,
  leaderboardHelper: any,
  organizationHelper: any,
  timeoutHelper: any,
  tokenHolderBalanceSnapshotEventHelper: any,
  CGTrackerHelper: any,
  competitionHelper: any,
  calcaluteGrowthVolume: any,
  bscScanHelper: any,
  cTSnapshotHelper: any,
  currencyHelper: any,
  bscScanTokenHolders: any,
  addressesHelper: any,
  raisePoolsHelper: any,
  usersHelper: any,
  profileMiddleware: any,
  stakingTrackerHelper: any,
  crucibleAprsHelper: any,
  logsHelper: any,
  stakingHelper: any,
  mSLGTrackerHelper: any,
  mSLGCalculations: any,
  timeoutCallBack: any,
  networksHelper: any,
  dexesHelper: any,
  productsHelper: any,
  packagesHelper: any,
  web3ConfigurationHelper: any,
  web3Helper: any,
  swapTransactionHelper: any,
  utils: any,
  swapUtilsHelper: any,
  standardStatuses: any,
  smartContractHelper: any,
  withdrawTransactionHelper: any,
  fiberAxiosHelper: any,
  multiswapNodeAxiosHelper: any,
  nonEvmHelper: any,
  nodeConfigurationsHelper: any,
  nodeInfraAuthHelper: any;

module.exports = function () {
  const utils: any = {};
  utils.IS_LOCAL_ENV = true;

  (utils.increaseTimeOutCount = function () {
    // if(!this.count){
    //   this.count = 0
    // }
    // this.count += 1;
    // console.log(this.count)
  }),
    (utils.getCount = function () {
      // return this.count || 0;
    }),
    (utils.pick = function (object: any, keys: any) {
      return keys.reduce((obj: any, key: any) => {
        if (object && Object.prototype.hasOwnProperty.call(object, key)) {
          // eslint-disable-next-line no-param-reassign
          obj[key] = object[key];
        }
        return obj;
      }, {});
    }),
    (utils.bridgeContractVersions = {
      V1_0: "000.003",
      V1_2: "001.200",
    }),
    (utils.expectedSchemaVersionV1_0 = "1.0");
  utils.expectedSchemaVersionV1_2 = "1.2";
  utils.globalTokenExpiryTime = "1800s";
  utils.swapAndWithdrawTransactionStatuses = {
    generatorSignatureCreated: "generatorSignatureCreated",
    generatorSignatureFailed: "generatorSignatureFailed",
    validatorSignatureCreated: "validatorSignatureCreated",
    validatorSignatureFailed: "validatorSignatureFailed",
    masterValidationFailed: "masterValidationFailed",
    swapPending: "swapPending",
    swapCreated: "swapCreated",
    swapCompleted: "swapCompleted",
    swapFailed: "swapFailed",
    swapWithdrawGenerated: "swapWithdrawGenerated",
    swapWithdrawPending: "swapWithdrawPending",
    swapWithdrawFailed: "swapWithdrawFailed",
    swapWithdrawCompleted: "swapWithdrawCompleted",
  };
  utils.swapAndWithdrawTransactionJobStatuses = {
    pending: "pending",
    created: "created",
    failed: "failed",
    completed: "completed",
  };
  utils.nodeTypes = {
    generator: "generator",
    validator: "validator",
    master: "master",
    fiber: "fiber",
    fiberFeeDistribution: "/v1/referrals/fee-distribution",
  };
  return utils;
};
