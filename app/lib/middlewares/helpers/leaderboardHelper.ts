var mongoose = require('mongoose');

module.exports = {

  async getLeaderboardsCountById(req: any){
    const filter = { _id: req.body.leaderboard, isActive: true }
    return await db.Leaderboards.countDocuments(filter)
  },
  convertListIntoLowercase(list: any) {

    if (list && list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        if (list[i]) {
          list[i] = list[i].toLowerCase()
        }
      }
    }

    return list
  },
  async createLeaderboardCurrencyAddressesByNetwork(body: any, model: any) {

    let results = []
    if (model && body.currencyAddressesByNetwork && body.currencyAddressesByNetwork.length > 0) {
      for (let i = 0; i < body.currencyAddressesByNetwork.length; i++) {
        let count = await db.LeaderboardCurrencyAddressesByNetwork.count({ network: body.currencyAddressesByNetwork[i], leaderboard: model._id })
        if (count == 0) {

          let innerBody = {
            currencyAddressesByNetwork: body.currencyAddressesByNetwork[i],
            leaderboard: model._id
          }

          let result = await db.LeaderboardCurrencyAddressesByNetwork.create(innerBody)
          results.push(result._id)
        }
      }
    }

    return results
  },
  fetchTokenHolders(list: any) {

    if (list && list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        bscScanTokenHolders.findTokenHolders(list[i].currencyAddressesByNetwork)
      }
    }
  },
  async createLeaderboardStakingContractAddresses(body: any, model: any) {

    let results:any = []
    if (model && body.leaderboardStakingContractAddresses && body.leaderboardStakingContractAddresses.length > 0) {
      for (let i = 0; i < body.leaderboardStakingContractAddresses.length; i++) {
        let count = await db.LeaderboardStakingContractAddresses.count({ stakingContractAddress: body.leaderboardStakingContractAddresses[i], leaderboard: model._id })
        if (count == 0) {

          let innerBody = {
            stakingContractAddress: body.leaderboardStakingContractAddresses[i],
            leaderboard: model._id,
            isActive: true
          }

          let result = await db.LeaderboardStakingContractAddresses.create(innerBody)
          results.push(result._id)
        }
      }
    }

    return results
  }

}
